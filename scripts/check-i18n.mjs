#!/usr/bin/env node
/**
 * i18n guard — fails if a translation key used by the UI is missing from any language.
 *
 * Catches both call styles:
 *   t("about_title")                    → literal keys
 *   { href: "#about", key: "nav_about" } → keys held in data objects
 *
 * Usage: npm run check:i18n
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { translations } from "../lib/translations.js";

const ROOTS = ["app", "components"];
const SOURCE_EXT = /\.(js|jsx|mjs)$/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (SOURCE_EXT.test(entry)) out.push(full);
  }
  return out;
}

const keys = new Set();

for (const file of ROOTS.flatMap((r) => walk(r))) {
  const src = readFileSync(file, "utf8");
  // t("some_key")
  for (const m of src.matchAll(/\bt\(\s*"([a-z0-9_]+)"\s*\)/g)) keys.add(m[1]);
  // key: "some_key"  (Navbar LINKS and similar data objects)
  for (const m of src.matchAll(/\bkey:\s*"([a-z0-9]+_[a-z0-9_]+)"/g)) keys.add(m[1]);
}

const missing = {};
for (const lang of Object.keys(translations)) {
  const absent = [...keys].filter((k) => !(k in translations[lang]));
  if (absent.length) missing[lang] = absent;
}

const unused = Object.keys(translations.en).filter((k) => !keys.has(k));

console.log(`Checked ${keys.size} keys used in app/ + components/ against ${Object.keys(translations).length} languages.`);

if (unused.length) {
  console.log(`\nℹ Defined but not referenced (${unused.length}): ${unused.join(", ")}`);
}

if (Object.keys(missing).length) {
  console.error("\n✗ Missing translations:");
  for (const [lang, absent] of Object.entries(missing)) {
    console.error(`  ${lang}: ${absent.join(", ")}`);
  }
  process.exit(1);
}

console.log("✓ All used translation keys exist in every language.");

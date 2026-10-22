import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { TRUST_ITEMS } from "@/lib/data";

export default function TrustBar() {
  return (
    <div className="container-x pb-6">
      <Reveal>
        <div className="glass flex flex-wrap items-center justify-center gap-2.5 rounded-3xl px-5 py-4">
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-ash-100 px-3.5 py-1.5 text-sm font-extrabold text-neutral-900"
            >
              <CheckCircle2 className="h-4 w-4 text-brand-emerald" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

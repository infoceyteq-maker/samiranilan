import Reveal from "./Reveal";

export default function SectionHeading({ kicker, title, sub }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      {kicker ? <div className="eyebrow">{kicker}</div> : null}
      <h2 className="section-title mt-3">{title}</h2>
      {sub ? <p className="mt-4 text-lg leading-relaxed text-neutral-800">{sub}</p> : null}
    </Reveal>
  );
}

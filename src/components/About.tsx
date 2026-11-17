import { useEffect, useState } from "react";
import Section from "@/components/Section";
import { prefersReducedMotion, useInView } from "@/hooks/use-in-view";

const highlights = [
  { value: "2+", label: "Years exploring AI / ML" },
  { value: "10+", label: "Projects built" },
  { value: "7", label: "Verified certificates" },
];

/** Counts up to the numeric part of a value like "10+" once it scrolls into view. */
const CountUp = ({ value }: { value: string }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!match || !inView) return;
    if (prefersReducedMotion()) {
      setCurrent(target);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  if (!match) return <>{value}</>;

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {current}
        {suffix}
      </span>
    </span>
  );
};

const About = () => (
  <Section id="about" index="01" eyebrow="Profile" title="About me">
    <p className="text-lg leading-8 text-foreground sm:text-xl sm:leading-9">
      I’m an AI enthusiast focused on generative AI, deep learning, and data-centric engineering. I build NLP models,
      Vision-GPT2 systems with custom attention, and practical applications like Smart Chief.
    </p>
    <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
      My work spans Python, TensorFlow, Keras, PyTorch, and end-to-end data pipelines. I enjoy learning, solving hard
      problems, and shipping AI products that are useful beyond a demo.
    </p>

    <dl className="mt-10 grid grid-cols-1 border-y border-border sm:grid-cols-3">
      {highlights.map((highlight) => (
        <div
          key={highlight.label}
          className="flex flex-col-reverse justify-end gap-1 border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
        >
          <dt className="text-sm text-muted-foreground">{highlight.label}</dt>
          <dd className="text-3xl font-semibold tabular-nums text-primary">
            <CountUp value={highlight.value} />
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default About;

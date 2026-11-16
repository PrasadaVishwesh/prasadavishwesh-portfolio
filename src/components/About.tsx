import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { value: "2+", label: "Years exploring AI / ML" },
  { value: "10+", label: "Projects built" },
  { value: "7", label: "Verified certificates" },
];

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" ref={ref} className="border-b border-border py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">01 / Profile</p>
            <h2 className="mt-3 text-3xl font-semibold">About me</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-foreground sm:text-xl">
              I’m an AI enthusiast focused on generative AI, deep learning, and data-centric engineering. I build NLP models, Vision-GPT2 systems with custom attention, and practical applications like Smart Chief.
            </p>
            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
              My work spans Python, TensorFlow, Keras, PyTorch, and end-to-end data pipelines. I enjoy learning, solving hard problems, and shipping AI products that are useful beyond a demo.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-0 border-y border-border sm:grid-cols-3">
              {highlights.map((highlight, index) => (
                <motion.div key={highlight.label} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.12 * index }} className="border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                  <div className="text-3xl font-semibold tabular-nums text-primary">{highlight.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{highlight.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
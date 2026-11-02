import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const education = [
  {
    role: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    company: "Chameli Devi Group of Institutions, Indore",
    duration: "2016 – 2020",
    description:
      "Completed B.E. in Computer Science & Engineering with CGPA: 8.31 / 10.00.",
  },
];

function EducationEntry({ exp, idx }) {
  const entryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: entryRef,
    offset: ["start 0.9", "start 0.55"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const markerScale = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <li ref={entryRef} className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] md:gap-x-0">
      <motion.div
        className="relative z-10 col-start-1 row-start-1 flex justify-center pt-7 md:col-start-2 md:pt-8"
        style={{ opacity, scale: markerScale }}
      >
        <span className="size-4 rounded-full border-2 border-cyan-300 bg-neutral-950 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
      </motion.div>
      <motion.article
        style={{ opacity, y }}
        className={`col-start-2 row-start-1 min-w-0 rounded-2xl border border-white/15 bg-neutral-900/90 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.25)] sm:p-7 md:col-span-1 md:p-7 ${
          idx % 2 === 0 ? "md:col-start-3" : "md:col-start-1"
        }`}
      >
        <p className="mb-3 text-sm font-semibold text-cyan-300">{exp.duration}</p>
        <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{exp.role}</h3>
        <p className="mt-2 mb-4 text-lg text-violet-300">{exp.company}</p>
        <p className="text-sm leading-7 text-neutral-300 sm:text-base">{exp.description}</p>
      </motion.article>
    </li>
  );
}

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="mb-14 text-center sm:mb-20">
          <h2 className="text-4xl font-semibold sm:text-5xl">Education</h2>
        </header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-4 top-2 w-px -translate-x-1/2 bg-linear-to-b from-cyan-400 via-cyan-300/70 to-violet-400 md:left-1/2"
          />
          <ol className="relative grid gap-y-7 md:gap-y-10">
            {education.map((exp, idx) => (
              <EducationEntry
                key={`${exp.company}-${exp.role}-${idx}`}
                exp={exp}
                idx={idx}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Education;
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { value: 500, suffix: "+", label: "Weddings Covered" },
  { value: 35, suffix: "+", label: "Countries" },
  { value: 15, suffix: "", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Industry Awards" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span className="font-serif text-5xl md:text-6xl font-light text-champagne">
      {count}{suffix}
    </span>
  );
};

const CountersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="text-center"
          >
            <AnimatedCounter target={c.value} suffix={c.suffix} inView={inView} />
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-champagne/60 mt-3">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CountersSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import j1 from "@/assets/journal-1.jpg";
import j2 from "@/assets/journal-2.jpg";
import j3 from "@/assets/journal-3.jpg";

const stories = [
  { src: j1, title: "A Provençal Love Story", subtitle: "Sarah & James — Lavender Fields, France", date: "October 2025" },
  { src: j2, title: "Romance in Paris", subtitle: "Elena & Marco — The City of Light", date: "September 2025" },
  { src: j3, title: "A Castle Fairy Tale", subtitle: "Charlotte & William — Scottish Highlands", date: "August 2025" },
];

const JournalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" ref={ref} className="py-28 md:py-36 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Journal</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Love Stories</h2>
          <div className="elegant-line mt-6" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="img-zoom mb-6">
                <img src={s.src} alt={s.title} className="w-full h-[350px] object-cover" />
              </div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{s.date}</p>
              <h3 className="font-serif text-2xl font-light text-foreground group-hover:text-sepia transition-colors duration-500 mb-2">
                {s.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">{s.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;

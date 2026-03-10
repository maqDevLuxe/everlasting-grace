import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const publications = ["VOGUE", "Harper's Bazaar", "Martha Stewart", "Brides", "Elle"];

const FeaturedIn = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-warm-cream">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto px-6"
      >
        <p className="text-center font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-12">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {publications.map((pub, i) => (
            <motion.span
              key={pub}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="font-serif text-2xl md:text-3xl font-light text-muted-foreground/60 tracking-wider"
            >
              {pub}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedIn;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portraitImg from "@/assets/portrait-fullwidth.jpg";

const FullwidthPortrait = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.img
        src={portraitImg}
        alt="Romantic bridal portrait"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-charcoal/20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-champagne text-center px-6 leading-snug">
          "Every love story is beautiful,<br />but yours is my favorite."
        </p>
      </motion.div>
    </section>
  );
};

export default FullwidthPortrait;

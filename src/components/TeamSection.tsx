import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import photographerImg from "@/assets/photographer.jpg";

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Meet the Artist</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug mb-6">
            Alexander <br /><span className="italic">Beaumont</span>
          </h2>
          <div className="elegant-line !mx-0 mb-8" />
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-lg mb-6">
            With over 15 years of experience and a background in fine art, Alexander has become one of the most sought-after luxury wedding photographers in the world. His work has been published in Vogue, Harper's Bazaar, and exhibited in galleries across Europe.
          </p>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-lg">
            "I believe every love story deserves to be told with the same artistry and reverence as a great painting. My camera is simply the brush."
          </p>
          <p className="font-serif italic text-lg text-foreground mt-4">— Alexander Beaumont</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="order-1 md:order-2 img-zoom"
        >
          <img src={photographerImg} alt="Lead photographer Alexander Beaumont" className="w-full h-[500px] md:h-[600px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

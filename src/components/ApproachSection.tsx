import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolioImg from "@/assets/portfolio-6.jpg";

const ApproachSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Approach</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug mb-6">
            The Art of <br /><span className="italic">Seeing Beauty</span>
          </h2>
          <div className="elegant-line !mx-0 mb-8" />
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-lg mb-6">
            We don't just photograph weddings — we immerse ourselves in your love story. Every stolen glance, every tear of joy, every spontaneous burst of laughter is captured with the reverence it deserves. Our editorial approach blends documentary authenticity with fine art composition.
          </p>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-lg">
            Working with natural light and cinematic framing, we create images that feel both timeless and deeply personal — photographs you'll treasure for generations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="img-zoom"
        >
          <img src={portfolioImg} alt="Fine art wedding photography approach" className="w-full h-[500px] md:h-[600px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: p1, alt: "Romantic couple portrait", tall: true },
  { src: p2, alt: "Wedding details flat lay", tall: false },
  { src: p3, alt: "Bride on grand staircase", tall: true },
  { src: p4, alt: "Reception table setting", tall: false },
  { src: p5, alt: "First dance", tall: false },
  { src: p6, alt: "Intimate kiss under veil", tall: true },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="py-28 md:py-36 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Signature Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Portfolio
          </h2>
          <div className="elegant-line mt-6" />
        </motion.div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="img-zoom break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover ${img.tall ? "h-[450px] md:h-[550px]" : "h-[280px] md:h-[350px]"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

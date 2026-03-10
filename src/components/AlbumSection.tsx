import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import albumImg from "@/assets/album.jpg";

const AlbumSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 md:py-36 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="img-zoom"
        >
          <img src={albumImg} alt="Fine art wedding album" className="w-full h-[400px] md:h-[500px] object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Heirloom Quality</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug mb-6">
            Fine Art <br /><span className="italic">Albums</span>
          </h2>
          <div className="elegant-line !mx-0 mb-8" />
          <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-lg mb-6">
            Each album is a hand-crafted masterpiece — Italian leather covers, museum-grade archival paper, and meticulous design that transforms your photographs into a gallery-worthy collection you'll pass down through generations.
          </p>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Starting from $3,500
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AlbumSection;

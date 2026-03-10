import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import d1 from "@/assets/destination-1.jpg";
import d2 from "@/assets/destination-2.jpg";
import d3 from "@/assets/destination-3.jpg";

const destinations = [
  { src: d1, name: "Santorini", country: "Greece" },
  { src: d2, name: "Tuscany", country: "Italy" },
  { src: d3, name: "Bali", country: "Indonesia" },
];

const DestinationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="destinations" ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Around the World</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Destination Weddings
          </h2>
          <div className="elegant-line mt-6" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group img-zoom cursor-pointer"
            >
              <img src={d.src} alt={`Wedding in ${d.name}`} className="w-full h-[400px] md:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-all duration-700" />
              <div className="absolute bottom-8 left-8">
                <p className="font-serif text-3xl text-champagne">{d.name}</p>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-champagne/70 mt-1">{d.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

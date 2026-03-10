import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Alexander didn't just photograph our wedding — he captured the very essence of our love. Every image makes us relive that magical day.",
    couple: "Victoria & Sebastian",
    location: "Lake Como, Italy",
  },
  {
    quote: "The most beautiful photographs we have ever seen. He has an extraordinary ability to find light and emotion in every single moment.",
    couple: "Arabella & James",
    location: "Château de Chantilly, France",
  },
  {
    quote: "Working with Éternité was like having an artist paint our love story. The result is nothing short of breathtaking.",
    couple: "Sophia & Edward",
    location: "Santorini, Greece",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 md:py-36 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Testimonials</h2>
          <div className="elegant-line mt-6" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.couple}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <p className="font-serif text-lg italic text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="elegant-line mb-4" />
              <p className="font-sans text-sm font-bold text-foreground">{t.couple}</p>
              <p className="font-sans text-xs text-muted-foreground tracking-wider mt-1">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Inquiry", desc: "Share your vision and wedding details through our contact form." },
  { num: "02", title: "Consultation", desc: "A personal call to discuss your love story, style, and expectations." },
  { num: "03", title: "Proposal", desc: "A bespoke proposal crafted uniquely for your celebration." },
  { num: "04", title: "The Day", desc: "We arrive, we observe, we create — your story, beautifully told." },
];

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">How It Works</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">The Booking Process</h2>
          <div className="elegant-line mt-6" />
        </motion.div>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-center"
            >
              <span className="font-serif text-4xl text-gold">{s.num}</span>
              <h3 className="font-serif text-xl font-light text-foreground mt-4 mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

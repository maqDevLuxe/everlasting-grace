import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="contact" ref={ref} className="py-28 md:py-36 bg-charcoal text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto px-6"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-champagne/60 mb-6">Begin Your Story</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-champagne leading-snug mb-8">
            Check <span className="italic">Availability</span>
          </h2>
          <p className="font-sans text-sm text-champagne/60 leading-relaxed mb-10 max-w-xl mx-auto">
            We accept a limited number of weddings each year to ensure every couple receives our complete dedication. Inquire below to begin the conversation.
          </p>
          <a
            href="mailto:hello@eternite.com"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase border border-champagne text-champagne px-12 py-5 hover:bg-champagne hover:text-charcoal transition-all duration-700"
          >
            Inquire for 2026
          </a>
        </motion.div>
      </section>
      <footer className="bg-charcoal border-t border-champagne/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-serif text-2xl text-champagne/80 tracking-wider">Éternité</span>
          <div className="flex items-center gap-8">
            {["Instagram", "Pinterest", "Vimeo"].map((s) => (
              <a key={s} href="#" className="font-sans text-xs tracking-[0.2em] uppercase text-champagne/40 hover:text-champagne transition-colors duration-500">
                {s}
              </a>
            ))}
          </div>
          <p className="font-sans text-xs text-champagne/30">
            © 2026 Éternité Photography. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;

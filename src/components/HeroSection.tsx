import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => (
  <section className="relative h-screen overflow-hidden">
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <img src={heroImg} alt="Luxury wedding photography" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/40" />
    </motion.div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="font-sans text-xs tracking-[0.4em] uppercase text-champagne mb-6"
      >
        Luxury Wedding Photography
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.4 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-champagne leading-tight"
      >
        Where Love Becomes
        <br />
        <span className="italic">Timeless Art</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="mt-10"
      >
        <a
          href="#contact"
          className="font-sans text-xs tracking-[0.3em] uppercase border border-champagne text-champagne px-10 py-4 hover:bg-champagne hover:text-charcoal transition-all duration-700"
        >
          Inquire Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

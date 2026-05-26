import { motion } from "framer-motion";
import { Button } from "./ui/button";

const lineVariants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, delay: 0.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Cinematic zoom background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 20, ease: "easeOut" }}
      />
      <div className="absolute inset-0 z-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-background" />

      {/* Floating Petals */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-40">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/30 rounded-full blur-[1px]"
            style={{
              top: `${(i * 17 + 5) % 100}%`,
              left: `${(i * 13 + 3) % 100}%`,
              borderRadius: "50% 0 50% 50%",
              transform: `rotate(${i * 37}deg)`,
            }}
            animate={{
              y: [0, -(60 + i * 8), 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 3), 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="container relative z-20 mx-auto px-4 text-center mt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 tracking-widest uppercase">
            Luxury Event Management
          </span>
        </motion.div>

        {/* Headline — line by line reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg"
          >
            Turning Your Dream
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg"
          >
            Events Into Reality
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light drop-shadow-md"
        >
          Guwahati's finest luxury wedding planning and event management services.
          We curate moments with love, precision, and elegance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              className="rounded-full px-8 text-base h-14 min-w-[200px] shadow-xl text-white bg-primary hover:bg-primary/90 relative overflow-hidden group"
              data-testid="button-book-consultation"
            >
              <span className="relative z-10">
                <a href="#contact">Book Consultation</a>
              </span>
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base h-14 min-w-[200px] bg-white/10 hover:bg-white text-white hover:text-primary border-white backdrop-blur-sm"
              data-testid="button-view-work"
            >
              <a href="#gallery">View Our Work</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest opacity-70">Scroll to explore</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
          animate={{ height: [0, 48, 0], y: [0, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohan & Sneha",
    rating: 5,
    text: "A-Z Creations made our dream wedding a reality! The decor was absolutely stunning, exactly what we envisioned. The team handled everything perfectly, allowing us to just enjoy our big day without any stress. Highly recommended!",
    event: "Wedding Ceremony",
    initials: "RS",
  },
  {
    name: "Vikram & Anjali",
    rating: 5,
    text: "We hired them for our engagement party and it was magical. The floral arrangements and lighting were perfect. They truly are the best event planners in Guwahati.",
    event: "Engagement Party",
    initials: "VA",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Organized my daughter's first birthday with A-Z Creations. The theme execution was flawless! The attention to detail in the balloon decor and stage setup was brilliant.",
    event: "Birthday Celebration",
    initials: "PS",
  },
  {
    name: "Rahul & Neha",
    rating: 5,
    text: "From destination wedding planning to execution, their team was hands-on. The hospitality they provided to our guests was top-notch. It felt like family planning the wedding.",
    event: "Destination Wedding",
    initials: "RN",
  },
  {
    name: "Amit Desai",
    rating: 5,
    text: "Excellent corporate event management. Professional, punctual, and very elegant setup. They understood our brand requirements perfectly.",
    event: "Corporate Gala",
    initials: "AD",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = (idx: number, dir: number) => {
    setDirection(dir);
    setCurrent((idx + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => goTo(current + 1, 1), 4500);
    return () => clearInterval(timer);
  }, [current, paused]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.97, transition: { duration: 0.35 } }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-primary/5 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Words of Love</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from the families and couples who trusted us.
          </p>
        </motion.div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden min-h-[280px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.3, type: "spring" }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.5)]" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-muted-foreground italic mb-8 leading-relaxed text-lg md:text-xl">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm font-serif"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  >
                    {t.initials}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-foreground font-serif text-xl">{t.name}</h4>
                    <p className="text-primary text-sm font-medium">{t.event}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
              onClick={() => goTo(current - 1, -1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className="rounded-full transition-all"
                  animate={{
                    width: i === current ? 24 : 8,
                    backgroundColor: i === current ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.25)",
                  }}
                  style={{ height: 8 }}
                  whileHover={{ scale: 1.2 }}
                  data-testid={`button-testimonial-dot-${i}`}
                />
              ))}
            </div>

            <motion.button
              className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
              onClick={() => goTo(current + 1, 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarHeart, Users, Award, HeartHandshake } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = (target / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  const stats = [
    { icon: <CalendarHeart className="w-6 h-6" />, target: 8, suffix: "+", label: "Years Experience" },
    { icon: <Users className="w-6 h-6" />, target: 500, suffix: "+", label: "Events Planned" },
    { icon: <Award className="w-6 h-6" />, target: 100, suffix: "%", label: "Client Satisfaction" },
    { icon: <HeartHandshake className="w-6 h-6" />, target: 24, suffix: "/7", label: "Professional Team" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/about.png"
                alt="A-Z Creations Wedding Setup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-full -z-10 blur-3xl opacity-50" />
            <div className="absolute top-1/2 -left-12 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              About Us
            </motion.span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creating Memories That{" "}
              <span className="text-primary italic">Last a Lifetime</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A-Z Creations Wedding Planner & Events specializes in creating unforgettable weddings,
              engagements, birthday celebrations, and premium events with elegant décor,
              flawless execution, and personalized planning. Based in the heart of Guwahati,
              we bring your vision to life with meticulous attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-primary"
                    whileHover={{ scale: 1.15, backgroundColor: "hsl(var(--primary))", color: "white" }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-foreground">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

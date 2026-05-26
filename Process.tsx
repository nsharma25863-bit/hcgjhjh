import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquareText, PenTool, Flower, Hammer, GlassWater } from "lucide-react";

const steps = [
  { num: "01", icon: <MessageSquareText className="w-6 h-6" />, title: "Consultation", desc: "We meet to understand your vision, requirements, and budget." },
  { num: "02", icon: <PenTool className="w-6 h-6" />, title: "Planning", desc: "Detailed timeline, venue selection, and vendor curation." },
  { num: "03", icon: <Flower className="w-6 h-6" />, title: "Design & Decor", desc: "Creating mood boards, floral concepts, and elegant setups." },
  { num: "04", icon: <Hammer className="w-6 h-6" />, title: "Execution", desc: "Flawless on-ground management and precise coordination." },
  { num: "05", icon: <GlassWater className="w-6 h-6" />, title: "Celebration", desc: "You celebrate joyously while we handle the rest." },
];

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Workflow</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Journey to Perfection
          </h2>
          <p className="text-muted-foreground text-lg">
            A seamless, stress-free process designed to bring your dream event to life step by step.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated connecting line */}
          <div ref={lineRef} className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-secondary/30 z-0 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.3), hsl(var(--primary)), hsl(var(--primary)/0.3))" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-white border-4 border-secondary flex items-center justify-center text-primary shadow-xl mb-6 relative cursor-default"
                  whileHover={{
                    scale: 1.12,
                    borderColor: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary))",
                    color: "white",
                    boxShadow: "0 0 0 8px hsl(var(--primary)/0.12), 0 16px 32px hsl(var(--primary)/0.25)",
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {step.icon}
                  <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold text-muted-foreground border border-border"
                    whileHover={{ scale: 1.15, backgroundColor: "hsl(var(--primary))", color: "white" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.num}
                  </motion.div>

                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                  />
                </motion.div>

                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

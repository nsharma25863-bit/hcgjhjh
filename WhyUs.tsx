import { motion } from "framer-motion";
import { HeartHandshake, Lightbulb, ShieldCheck, Banknote, Clock, Award, Smile, CheckCircle2 } from "lucide-react";

const reasons = [
  { icon: <HeartHandshake className="w-8 h-8" />, title: "Personalized Event Planning", desc: "Every event is tailored to reflect your unique style and personality." },
  { icon: <Lightbulb className="w-8 h-8" />, title: "Creative Decoration Concepts", desc: "Innovative and breathtaking decor that leaves a lasting impression." },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Professional Team", desc: "Highly skilled experts dedicated to executing flawlessly." },
  { icon: <Banknote className="w-8 h-8" />, title: "Affordable Luxury Packages", desc: "Premium experiences designed to fit various budgets beautifully." },
  { icon: <Clock className="w-8 h-8" />, title: "Timely Execution", desc: "Punctual setup and seamless timeline management." },
  { icon: <Award className="w-8 h-8" />, title: "Premium Quality Service", desc: "Top-tier vendors, fresh florals, and luxury materials only." },
  { icon: <Smile className="w-8 h-8" />, title: "Client Satisfaction", desc: "Our ultimate goal is to see you and your guests smiling." },
  { icon: <CheckCircle2 className="w-8 h-8" />, title: "End-to-End Management", desc: "We handle everything so you can simply enjoy the moment." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/40 blur-3xl pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            The A-Z Creations Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just plan events; we craft experiences. Here is why couples and families trust us.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group"
              data-testid={`card-why-${i}`}
            >
              <div className="h-full border-none shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-400 rounded-2xl bg-white/85 backdrop-blur-sm p-6 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(248,182,200,0.07) 0%, rgba(183,110,121,0.04) 100%)" }}
                />
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary mb-6 transition-all duration-300 relative z-10"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  style={{}}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                </motion.div>
                <h3 className="font-bold text-lg text-foreground mb-3 relative z-10">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Heart, Plane, CalendarCheck, Gift, Music, Users, Camera, Utensils,
  MapPin, Sparkles, PartyPopper, Flower2, Mic, Palette, Gem, Crown,
  Baby, Settings
} from "lucide-react";

const services = [
  { icon: <Heart className="w-8 h-8" />, title: "Wedding Planning", desc: "Complete end-to-end luxury wedding management and execution." },
  { icon: <Plane className="w-8 h-8" />, title: "Destination Weddings", desc: "Exotic and breathtaking destination wedding experiences." },
  { icon: <Gem className="w-8 h-8" />, title: "Engagement Ceremony", desc: "Elegant ring ceremonies and pre-wedding celebrations." },
  { icon: <CalendarCheck className="w-8 h-8" />, title: "Anniversary Celebration", desc: "Romantic setups to celebrate your years of togetherness." },
  { icon: <Gift className="w-8 h-8" />, title: "Birthday Party Planning", desc: "Fun, vibrant, and perfectly organized birthday events." },
  { icon: <PartyPopper className="w-8 h-8" />, title: "Theme Party Decoration", desc: "Creative and immersive theme-based décor setups." },
  { icon: <Crown className="w-8 h-8" />, title: "Religious Events", desc: "Respectful and beautifully arranged religious gatherings." },
  { icon: <Palette className="w-8 h-8" />, title: "Haldi & Mehendi Setup", desc: "Colorful and traditional vibrant setups for pre-wedding rituals." },
  { icon: <Users className="w-8 h-8" />, title: "Reception Management", desc: "Grand reception planning for a flawless guest experience." },
  { icon: <Sparkles className="w-8 h-8" />, title: "Bridal Entry Concepts", desc: "Unique, cinematic, and unforgettable bridal entries." },
  { icon: <MapPin className="w-8 h-8" />, title: "Stage Decoration", desc: "Luxurious and grand stage designs customized to your taste." },
  { icon: <Flower2 className="w-8 h-8" />, title: "Floral Decoration", desc: "Premium fresh and artificial floral arrangements." },
  { icon: <Settings className="w-8 h-8" />, title: "Corporate Events", desc: "Professional planning for conferences and company gatherings." },
  { icon: <Baby className="w-8 h-8" />, title: "Baby Shower Planning", desc: "Sweet and adorable setups for welcoming the little one." },
  { icon: <Music className="w-8 h-8" />, title: "Live Music & DJ", desc: "Top-tier entertainment, live bands, and DJ arrangements." },
  { icon: <Camera className="w-8 h-8" />, title: "Photography", desc: "Capturing your best moments with cinematic photography." },
  { icon: <Utensils className="w-8 h-8" />, title: "Catering Management", desc: "Exquisite culinary experiences for your guests." },
  { icon: <Heart className="w-8 h-8" />, title: "Luxury Venue Decor", desc: "Transforming any space into a luxurious event venue." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Event Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From the first consultation to the final farewell, we offer a complete
            suite of services to ensure your celebration is absolutely perfect.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-default"
              data-testid={`card-service-${index}`}
            >
              <div className="h-full border border-border/50 group-hover:border-primary/40 transition-all duration-400 rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(248,182,200,0.08) 0%, rgba(183,110,121,0.05) 100%)",
                  }}
                />
                <div className="p-6 flex flex-col items-center text-center gap-4 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary transition-all duration-500"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    style={{}}
                  >
                    <motion.div
                      className="group-hover:text-white transition-colors duration-300"
                      style={{}}
                    >
                      <div className="group-hover:[&>svg]:text-white">
                        {service.icon}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Animated icon bg */}
                  <style>{`
                    .service-card:hover .icon-wrap { background-color: hsl(var(--primary)); }
                    .service-card:hover .icon-wrap svg { color: white; }
                  `}</style>

                  <h3 className="font-serif font-bold text-xl text-foreground mt-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

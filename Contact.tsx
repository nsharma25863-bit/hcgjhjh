import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Call Us",
    content: <><a href="tel:09864054556" className="text-muted-foreground hover:text-primary transition-colors block">098640 54556</a><a href="https://wa.me/919864054556" className="text-primary hover:underline text-sm font-medium block mt-1">WhatsApp Available</a></>,
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    content: <a href="mailto:info@azcreations.in" className="text-muted-foreground hover:text-primary transition-colors">info@azcreations.in</a>,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Visit Us",
    content: <p className="text-muted-foreground">Guwahati, Assam, India</p>,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Business Hours",
    content: <p className="text-muted-foreground text-sm">Mon - Sun<br />9:00 AM - 9:00 PM</p>,
  },
];

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent Successfully!",
      description: "We will get back to you shortly to discuss your event.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-primary/6 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Plan Your Big Day
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out to us to check date availability, request a quote, or schedule a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-none shadow-xl bg-white overflow-hidden rounded-3xl">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-serif font-bold mb-6">Send an Inquiry</h3>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div custom={0} variants={fieldVariants} className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <Input
                        required
                        placeholder="John Doe"
                        className="bg-secondary/20 border-transparent focus-visible:ring-primary transition-shadow duration-200 focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)]"
                        data-testid="input-name"
                      />
                    </motion.div>
                    <motion.div custom={1} variants={fieldVariants} className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="bg-secondary/20 border-transparent focus-visible:ring-primary transition-shadow duration-200 focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)]"
                        data-testid="input-phone"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div custom={2} variants={fieldVariants} className="space-y-2">
                      <label className="text-sm font-medium">Event Type</label>
                      <Select required>
                        <SelectTrigger className="bg-secondary/20 border-transparent focus:ring-primary" data-testid="select-event-type">
                          <SelectValue placeholder="Select Event" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="engagement">Engagement</SelectItem>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div custom={3} variants={fieldVariants} className="space-y-2">
                      <label className="text-sm font-medium">Event Date</label>
                      <Input
                        required
                        type="date"
                        className="bg-secondary/20 border-transparent focus-visible:ring-primary"
                        data-testid="input-date"
                      />
                    </motion.div>
                  </div>

                  <motion.div custom={4} variants={fieldVariants} className="space-y-2">
                    <label className="text-sm font-medium">Message Details</label>
                    <Textarea
                      required
                      placeholder="Tell us a little bit about your vision..."
                      className="min-h-[120px] bg-secondary/20 border-transparent focus-visible:ring-primary resize-none"
                      data-testid="textarea-message"
                    />
                  </motion.div>

                  <motion.div custom={5} variants={fieldVariants}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-full text-base py-6 font-semibold relative overflow-hidden group"
                        data-testid="button-submit"
                      >
                        <span className="relative z-10">Request Consultation</span>
                        <motion.span
                          className="absolute inset-0 bg-white/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: "0 16px 32px hsl(var(--primary)/0.1)" }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
                    whileHover={{ scale: 1.15, backgroundColor: "hsl(var(--primary))", color: "white" }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold mb-1">{info.title}</h4>
                    {info.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-md h-[220px] bg-secondary/50 relative group cursor-pointer"
              whileHover={{ scale: 1.01, boxShadow: "0 20px 40px hsl(var(--primary)/0.12)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-10 h-10 text-primary mb-3" />
                </motion.div>
                <h4 className="font-bold text-lg mb-1">A-Z Creations Location</h4>
                <p className="text-sm text-muted-foreground">Guwahati, Assam</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" className="mt-4 rounded-full bg-white/80 backdrop-blur-sm">
                    View on Google Maps
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Weddings", "Engagements", "Birthdays", "Corporate Events", "Decorations"];

const galleryImages = [
  { id: 1, src: "/images/gallery/wedding-1.png", category: "Weddings", alt: "Wedding Ceremony Setup" },
  { id: 2, src: "/images/gallery/wedding-2.png", category: "Weddings", alt: "Wedding Aisle" },
  { id: 3, src: "/images/gallery/wedding-3.png", category: "Weddings", alt: "Wedding Reception" },
  { id: 4, src: "/images/gallery/engagement-1.png", category: "Engagements", alt: "Engagement Stage" },
  { id: 5, src: "/images/gallery/engagement-2.png", category: "Engagements", alt: "Engagement Details" },
  { id: 6, src: "/images/gallery/birthday-1.png", category: "Birthdays", alt: "Kids Birthday Party" },
  { id: 7, src: "/images/gallery/birthday-2.png", category: "Birthdays", alt: "Adult Birthday Setup" },
  { id: 8, src: "/images/gallery/corporate-1.png", category: "Corporate Events", alt: "Corporate Gala" },
  { id: 9, src: "/images/gallery/wedding-1.png", category: "Decorations", alt: "Mehendi Decoration" },
  { id: 10, src: "/images/gallery/engagement-1.png", category: "Decorations", alt: "Haldi Decoration" },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredImages = galleryImages.filter(
    (img) => activeTab === "All" || img.category === activeTab
  );

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Glimpse of Our Magic
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our curated gallery of unforgettable moments and breathtaking setups.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map((cat) => (
            <motion.div key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant={activeTab === cat ? "default" : "outline"}
                className={`rounded-full transition-all ${
                  activeTab === cat
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-transparent border-primary/20 text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => { setActiveTab(cat); setVisibleCount(6); }}
                data-testid={`button-filter-${cat.toLowerCase().replace(/ /g, "-")}`}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.slice(0, visibleCount).map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -12 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-sm"
                onClick={() => setSelectedImage({ src: img.src, alt: img.alt })}
                whileHover={{ y: -6 }}
                data-testid={`img-gallery-${img.id}`}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-end justify-start p-5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white font-medium text-sm">{img.alt}</span>
                    <motion.div
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40"
                      whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.4)" }}
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredImages.length && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="rounded-full px-8 text-primary border-primary/30 hover:bg-primary/5"
                data-testid="button-load-more"
              >
                Load More
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[92vw] max-h-[92vh] p-0 overflow-hidden bg-black/95 border-none rounded-2xl">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[88vh] object-contain rounded-xl"
                />
                <motion.button
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 text-white"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}

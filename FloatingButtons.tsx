import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call button */}
      <motion.a
        href="tel:09864054556"
        aria-label="Call Us"
        initial={{ opacity: 0, scale: 0, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
        data-testid="button-float-call"
      >
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <FaPhone className="w-5 h-5 relative z-10" />
      </motion.a>

      {/* WhatsApp button */}
      <motion.a
        href="https://wa.me/919864054556"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        initial={{ opacity: 0, scale: 0, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2.7, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg"
        data-testid="button-float-whatsapp"
      >
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />
        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </motion.a>
    </div>
  );
}

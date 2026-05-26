import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold text-white">A-Z Creations</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Guwahati's premium wedding planner and event management studio. 
              We curate luxurious, flawless, and unforgettable celebrations wrapped in love.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaPinterest className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors text-sm">Portfolio Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors text-sm">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Luxury Weddings</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Destination Weddings</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Corporate Events</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Birthday Celebrations</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Floral Decorations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">A:</span>
                <span className="text-zinc-400">Guwahati, Assam, India</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">P:</span>
                <a href="tel:09864054556" className="text-zinc-400 hover:text-primary transition-colors">098640 54556</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">E:</span>
                <a href="mailto:info@azcreations.in" className="text-zinc-400 hover:text-primary transition-colors">info@azcreations.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} A-Z Creations Wedding Planner & Events. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

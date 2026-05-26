import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { ScrollProgress } from "../components/ScrollProgress";
import { CursorGlow } from "../components/CursorGlow";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Process } from "../components/Process";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <ScrollProgress />
      <CursorGlow />
      <div className="min-h-[100dvh] w-full bg-background flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <WhyUs />
          <Testimonials />
          <Process />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}

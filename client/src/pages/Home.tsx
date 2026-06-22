import Navigation from "@/components/Navigation";
import HeroNew from "@/components/sections/HeroNew";
import FloatingActions from "@/components/FloatingActions";
import PreFooterCTA from "@/components/PreFooterCTA";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroNew />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Blog />
      <PreFooterCTA />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

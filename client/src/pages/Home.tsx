import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <WhyHireMe />
      <Projects />
      <Certifications />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

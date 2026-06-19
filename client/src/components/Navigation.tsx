import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Why Hire Me', id: 'hire-me' },
  { label: 'Certificates', id: 'certifications' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg dark:bg-slate-950/95'
          : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">KS</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground">Kaveen</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick('contact')}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Contact
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Download Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-foreground/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-t border-border">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-left font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary/10"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

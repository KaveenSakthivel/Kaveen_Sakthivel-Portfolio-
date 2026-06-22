import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const { scrollToElement } = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-12 md:py-16 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Kaveen Sakthivel</h3>
            <p className="text-foreground/70 text-sm">Digital Marketing Specialist helping brands grow through data-driven strategies.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToElement(item.toLowerCase())}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['SEO Services', 'Content Marketing', 'Social Media', 'Paid Ads'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="rounded-full border-white/20 hover:border-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-white/20 hover:border-white">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">© {currentYear} Kaveen Sakthivel. All rights reserved.</p>
          <button
            onClick={() => scrollToElement('home')}
            className="mt-4 md:mt-0 p-2 rounded-full border border-white/20 hover:border-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

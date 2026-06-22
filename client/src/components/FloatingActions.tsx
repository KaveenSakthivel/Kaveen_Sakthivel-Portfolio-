import { motion } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Let's Talk Button */}
      <motion.button
        className="fixed bottom-8 left-8 glass-strong px-6 py-3 rounded-full font-medium flex items-center gap-2 group z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToContact}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Let's Talk</span>
      </motion.button>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 glass-strong p-3 rounded-full ring-brand group z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        initial={{ opacity: 0, x: 50 }}
        animate={showScroll ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </>
  );
}

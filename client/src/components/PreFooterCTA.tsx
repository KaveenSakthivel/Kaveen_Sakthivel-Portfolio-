import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PreFooterCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="glass-strong p-12 md:p-16 rounded-3xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to grow your <span className="gradient-text">brand online?</span>
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create a digital strategy that drives real results for your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="btn-glass-primary flex items-center justify-center gap-2 group">
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-glass flex items-center justify-center gap-2">
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

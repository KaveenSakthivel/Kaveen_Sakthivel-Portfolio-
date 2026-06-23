import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CertificationsNew() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certificates" className="py-20 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk text-foreground">
              Professional Certifications
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Verified credentials and professional certifications from industry-leading organizations.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-foreground/70 mb-3">{cert.issuer}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-foreground/50">{cert.date}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    Verified
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

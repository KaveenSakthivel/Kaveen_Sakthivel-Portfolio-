import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { certifications } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import { Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container" ref={ref}>
        <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Certifications</h2>
            <p className="text-lg text-foreground/70">Professional credentials and continuous learning</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold font-poppins">{cert.title}</h3>
                      <p className="text-sm text-primary">{cert.organization}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/50">{cert.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

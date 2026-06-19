import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { experience } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container" ref={ref}>
        <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Professional Experience</h2>
            <p className="text-lg text-foreground/70">Building practical experience through internships and projects</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <Card className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold font-poppins">{exp.title}</h3>
                        <span className="text-sm text-primary font-medium">{exp.startDate} – {exp.endDate}</span>
                      </div>
                      <p className="text-foreground/70 mb-1">{exp.company}</p>
                      <p className="text-sm text-foreground/50 mb-4">{exp.location}</p>
                      <p className="text-foreground/70 mb-4">{exp.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {(exp.responsibilities || exp.achievements)?.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground/70">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

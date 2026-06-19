import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container" ref={ref}>
        <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Featured Projects</h2>
            <p className="text-lg text-foreground/70">Case studies showcasing real results and impact</p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 font-poppins">{project.title}</h3>
                      <p className="text-sm text-primary font-medium">{project.category}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Challenge</p>
                      <p className="text-sm text-foreground/70">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Results</p>
                      <p className="text-sm text-foreground/70">{project.results}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-primary/5">
                        <p className="text-lg font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-foreground/60">{metric.label}</p>
                      </div>
                    ))}
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

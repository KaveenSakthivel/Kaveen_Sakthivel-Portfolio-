import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skills } from '@/data/portfolio';
import { Card } from '@/components/ui/card';

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

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    { title: 'SEO', items: skills.seo },
    { title: 'Digital Marketing', items: skills.digitalMarketing },
    { title: 'Business Development', items: skills.businessDevelopment },
    { title: 'Tools', items: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container" ref={ref}>
        <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Skills & Expertise</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A comprehensive toolkit of digital marketing skills and industry tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {item}
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

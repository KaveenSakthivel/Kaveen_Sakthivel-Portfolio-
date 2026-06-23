import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

export default function SkillsNew() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Digital Marketing',
      items: (skills as any).digitalMarketing || []
    },
    {
      title: 'Business Development',
      items: (skills as any).businessDevelopment || []
    },
    {
      title: 'Technical Skills',
      items: (skills as any).technicalSkills || []
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk text-foreground">
              Professional Skills
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Comprehensive expertise in digital marketing, SEO, business development, and modern marketing tools.
            </p>
          </motion.div>

          {/* Skills Grid by Category */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary font-space-grotesk">{category.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((skill: string, skillIndex: number) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ y: -5 }}
                      className="glass p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{skill}</h4>
                        <div className="w-2 h-2 rounded-full bg-primary mt-1" />
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-cyan-400"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: '85%' } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/portfolio";
import { ArrowRight, Target, Lightbulb, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Case studies showcasing successful digital marketing and business development campaigns with measurable results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index: number) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        Challenge
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        Strategy
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{project.strategy}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Execution</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">{project.execution}</p>

                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">Results</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

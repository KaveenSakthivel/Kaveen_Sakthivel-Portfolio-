import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skills } from "@/data/portfolio";
import { Zap } from "lucide-react";

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

const skillCategories = [
  {
    title: "Digital Marketing Skills",
    skills: skills.digitalMarketing,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
  },
  {
    title: "Business Development Skills",
    skills: skills.businessDevelopment,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    borderColor: "border-cyan-200 dark:border-cyan-700",
  },
  {
    title: "Technical & Tools",
    skills: skills.technicalSkills,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-700",
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-slate-950" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Industry-expected skills in Digital Marketing and Business Development, combined with technical expertise in essential tools and platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className={`rounded-xl p-8 border ${category.borderColor} ${category.bgColor} backdrop-blur`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`} />
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white mb-8">
            Skill Proficiency Levels
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-white">Digital Marketing</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">SEO & Content Marketing</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">90%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Social Media Marketing</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">85%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Paid Advertising</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">80%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-white">Business Development</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Lead Generation</span>
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">88%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Market Research</span>
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">82%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">Strategic Planning</span>
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">85%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

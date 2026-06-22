import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, BookOpen, Award } from "lucide-react";

const journeyMilestones = [
  {
    year: "Mid 2025",
    title: "Digital Marketing Career Begins",
    description: "Started my professional journey in digital marketing with a focus on SEO and content strategy. Completed foundational certifications in Google Analytics and SEO fundamentals. Executed successful campaigns across multiple platforms.",
    icon: BookOpen,
  },
  {
    year: "Late 2025",
    title: "Content & SEO Expertise",
    description: "Created 15+ SEO-optimized articles for SaaS platforms and awareness campaigns. Developed expertise in keyword research, on-page optimization, content marketing strategies, and audience engagement.",
    icon: TrendingUp,
  },
  {
    year: "Early 2026",
    title: "Business Development Career Launch",
    description: "Transitioned into Business Development role with focus on lead generation, market research, and strategic partnerships. Developed comprehensive strategies for identifying growth opportunities and driving revenue expansion.",
    icon: Award,
  },
  {
    year: "2026 - Present",
    title: "Dual Expertise & Strategic Growth",
    description: "Leveraging combined expertise in Digital Marketing and Business Development to help businesses achieve sustainable growth through comprehensive strategies, data-driven decisions, and strategic partnerships.",
    icon: CheckCircle,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function MyJourney() {
  return (
    <section id="my-journey" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A timeline of my professional growth from Digital Marketing to Business Development, with expertise in both domains.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-600" />

          <div className="space-y-12 md:space-y-16">
            {journeyMilestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
                    <div className="w-full md:w-1/2">
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200 dark:border-blue-700">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold font-poppins text-slate-900 dark:text-white mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-full md:w-auto flex justify-center">
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="absolute w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Digital Marketing Expertise</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Specialized in SEO, content strategy, and data-driven campaigns to drive organic growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Business Development Skills</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Lead generation, market research, and strategic partnerships for sustainable growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Continuous Learning</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Stay updated with latest trends and best practices through certifications and research.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

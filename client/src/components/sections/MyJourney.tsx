import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, BookOpen, Award } from "lucide-react";

const journeyMilestones = [
  {
    year: "2022",
    title: "Digital Marketing Journey Begins",
    description: "Started my professional journey in digital marketing with a focus on SEO and content strategy. Completed foundational certifications in Google Analytics and SEO fundamentals.",
    icon: BookOpen,
  },
  {
    year: "2023",
    title: "First Successful Campaign",
    description: "Executed first major digital marketing campaign that increased organic traffic by 150%. Developed expertise in keyword research, on-page optimization, and content marketing strategies.",
    icon: TrendingUp,
  },
  {
    year: "2024",
    title: "Specialized Expertise",
    description: "Deepened expertise in advanced SEO techniques, technical SEO, and data-driven marketing. Completed multiple professional certifications and started mentoring junior marketers.",
    icon: Award,
  },
  {
    year: "2025",
    title: "Strategic Growth Focus",
    description: "Currently focused on helping businesses achieve sustainable digital growth through comprehensive SEO strategies, content marketing, and performance optimization.",
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
            My <span className="text-teal-600 dark:text-teal-400">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A timeline of my professional growth in digital marketing, from foundational learning to strategic expertise in SEO and content marketing.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-600 to-teal-400 dark:from-teal-500 dark:to-teal-600" />

          {/* Timeline Items */}
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
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full">
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

                    {/* Timeline Dot */}
                    <div className="w-full md:w-auto flex justify-center">
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="absolute w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Spacer for layout */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Achievements Summary */}
        <motion.div
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">SEO Expertise</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Specialized in technical SEO, on-page optimization, and content strategy to drive organic growth.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Data-Driven Approach</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Leverage analytics and metrics to make informed decisions and optimize marketing campaigns.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Continuous Learning</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Stay updated with latest digital marketing trends and best practices through certifications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

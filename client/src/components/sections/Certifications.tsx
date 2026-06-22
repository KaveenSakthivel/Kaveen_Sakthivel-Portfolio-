import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

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

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise in Digital Marketing, SEO, Business Analysis, and Sales Strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 flex items-center justify-center transition-colors flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {cert.issuer}
                </p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{certifications.length}+</div>
            <p className="text-slate-600 dark:text-slate-300 font-semibold">Professional Certifications</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">From leading industry organizations</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <p className="text-slate-600 dark:text-slate-300 font-semibold">Domains Covered</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Digital Marketing, SEO, Business Development</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2024-2025</div>
            <p className="text-slate-600 dark:text-slate-300 font-semibold">Recent Certifications</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Continuously updating skills and knowledge</p>
          </div>
        </motion.div>

        {/* Certification Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white mb-6 text-center">
            Certifying Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Google", "Semrush", "HubSpot", "Content Marketing Institute", "IIBA", "LinkedIn Learning"].map((org, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm text-center">{org}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

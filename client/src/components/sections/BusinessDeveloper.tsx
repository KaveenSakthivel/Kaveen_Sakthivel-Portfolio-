import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Handshake, BarChart3, Zap } from "lucide-react";

const bdServices = [
  {
    icon: Users,
    title: "Lead Generation & Prospecting",
    description: "Identify and qualify potential clients through strategic research and outreach campaigns.",
    details: ["Prospect Research", "Lead Scoring", "Qualification Strategy", "Outreach Campaigns"]
  },
  {
    icon: Target,
    title: "Market Research & Analysis",
    description: "Deep dive into market trends, competitor analysis, and opportunity identification.",
    details: ["Market Trends", "Competitor Analysis", "Industry Insights", "Opportunity Mapping"]
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Develop and nurture strategic partnerships that drive mutual growth and expansion.",
    details: ["Partnership Development", "Negotiation", "Contract Management", "Relationship Building"]
  },
  {
    icon: BarChart3,
    title: "Business Strategy",
    description: "Create comprehensive strategies for sustainable business growth and market expansion.",
    details: ["Growth Planning", "Revenue Strategy", "Market Expansion", "Performance Metrics"]
  },
  {
    icon: TrendingUp,
    title: "Sales Strategy & Execution",
    description: "Develop and execute sales strategies that drive revenue and customer acquisition.",
    details: ["Sales Planning", "Pipeline Management", "Conversion Optimization", "Revenue Growth"]
  },
  {
    icon: Zap,
    title: "Client Relationship Management",
    description: "Build and maintain strong client relationships that lead to long-term partnerships.",
    details: ["Relationship Building", "Account Management", "Client Retention", "Satisfaction Tracking"]
  }
];

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

export default function BusinessDeveloper() {
  return (
    <section id="business-developer" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
            Business <span className="text-blue-600 dark:text-blue-400">Development</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Strategic business development services to identify growth opportunities, generate qualified leads, and drive sustainable revenue expansion through data-driven strategies and strategic partnerships.
          </p>
        </motion.div>

        {/* BD Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {bdServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-slate-800 rounded-xl p-8 border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BD Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-3xl font-bold font-poppins text-slate-900 dark:text-white mb-8 text-center">
            My Business Development Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                Research & Analysis
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Conduct comprehensive market research, competitor analysis, and opportunity identification to understand the landscape and identify high-potential prospects.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                </div>
                Strategic Planning
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Develop customized strategies aligned with your business goals, targeting the right audience segments and identifying the most effective channels for engagement.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                </div>
                Execution & Outreach
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Execute targeted outreach campaigns, manage prospect relationships, and qualify leads to build a strong sales pipeline for your business.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                </div>
                Measurement & Optimization
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Track performance metrics, analyze results, and continuously optimize strategies to maximize ROI and drive sustainable business growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key BD Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
            <p className="text-slate-600 dark:text-slate-300">Qualified Leads Generated</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15%</div>
            <p className="text-slate-600 dark:text-slate-300">Average Conversion Rate</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">300%</div>
            <p className="text-slate-600 dark:text-slate-300">Average ROI on Campaigns</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <p className="text-slate-600 dark:text-slate-300">Strategic Partnerships</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

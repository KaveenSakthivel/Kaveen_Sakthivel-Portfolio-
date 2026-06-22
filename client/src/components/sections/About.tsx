import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { personalInfo, achievements } from '@/data/portfolio';
import { Award, Briefcase, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800">
      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Image (Profile) */}
          <motion.div variants={itemVariants} className="relative order-2 md:order-1">
            <div className="relative w-full max-w-sm mx-auto md:mx-0 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 dark:border-blue-800">
              <img
                src={personalInfo.profileImage}
                alt="Kaveen Sakthivel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
            {/* Accent shapes */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/15 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300/15 rounded-full blur-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-slate-900 dark:text-white">
                About <span className="text-blue-600 dark:text-blue-400">Me</span>
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a Digital Marketing Specialist and Business Developer with a passion for driving measurable growth through data-driven strategies. Currently pursuing my BBA (CA) at Dr. NGP Arts and Science College, I've gained hands-on experience across SEO, content marketing, lead generation, and strategic business development through multiple internships.
              </p>
            </div>

            {/* Dual Role Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-blue-200 dark:border-blue-700 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Digital Marketing</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  SEO optimization, content strategy, and data-driven campaigns to boost visibility and engagement.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-blue-200 dark:border-blue-700 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Business Development</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Lead generation, market research, and strategic partnerships to drive sustainable business growth.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">3+ Internships Completed</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Digital Marketing, SEO, Content Writing, and Business Development</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">30+ SEO Articles Published</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Organic traffic growth and lead generation campaigns</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Multiple Certifications</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">SEO, Digital Marketing, Business Analysis, and Sales Strategy</p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm passionate about helping businesses improve visibility, generate leads, and drive measurable digital growth. My dual expertise in marketing and business development allows me to create comprehensive strategies that deliver results.
            </p>

            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('https://linkedin.com/in/kaveen-sakthivel', '_blank')}
            >
              <Award className="w-5 h-5 mr-2" />
              View Full Profile
            </Button>
          </motion.div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group backdrop-blur"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 flex items-center justify-center mb-4 transition-colors">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

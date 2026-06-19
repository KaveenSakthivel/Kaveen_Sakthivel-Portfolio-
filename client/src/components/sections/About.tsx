import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { personalInfo, achievements } from '@/data/portfolio';
import { Award } from 'lucide-react';

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
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={personalInfo.profileImage}
                alt="Kaveen Sakthivel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Accent shapes */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
                About Me
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm a Digital Marketing Specialist with a passion for driving measurable growth through data-driven strategies. Currently pursuing my BBA (CA) at Dr. NGP Arts and Science College, I've gained hands-on experience across SEO, content marketing, social media, and business development through multiple internships.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-poppins">My Journey</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">BBA (CA) Student</p>
                    <p className="text-sm text-foreground/60">Dr. NGP Arts and Science College</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">3+ Internships Completed</p>
                    <p className="text-sm text-foreground/60">Digital Marketing, SEO, Content Writing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">15+ SEO Articles Published</p>
                    <p className="text-sm text-foreground/60">Organic traffic growth and lead generation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Multiple Certifications</p>
                    <p className="text-sm text-foreground/60">SEO, Digital Marketing, Business Analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              I'm passionate about helping businesses improve visibility, generate leads, and drive measurable digital growth. My approach combines strategic thinking with hands-on execution, always backed by data and results.
            </p>
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
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
              <p className="text-sm text-foreground/60">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const floatingBadges = [
  { label: 'SEO Expert', delay: 0 },
  { label: 'Growth Hacker', delay: 0.2 },
  { label: 'BD Specialist', delay: 0.4 },
];

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
];

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium">Digital Marketing & Business Development</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transforming <span className="gradient-text">Ideas Into</span> Digital Growth
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Digital Marketing Specialist & Business Developer helping brands grow through SEO, Content Marketing, Lead Generation, and Data-Driven Strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="btn-glass-primary flex items-center justify-center gap-2 group">
                Let's Connect
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-glass flex items-center justify-center gap-2">
                Download Resume
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="stat-counter">{stat.value}</div>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Portrait with Floating Badges */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-3xl blur-3xl" />

            {/* Glass Frame */}
            <motion.div
              className="relative glass-strong p-1 rounded-3xl w-full max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full rounded-3xl object-cover"
              />
            </motion.div>

            {/* Floating Badges */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="absolute glass px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  delay: 0.7 + badge.delay,
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  top: `${20 + index * 30}%`,
                  right: index % 2 === 0 ? '-20px' : 'auto',
                  left: index % 2 === 0 ? 'auto' : '-20px',
                }}
              >
                <span className="text-primary mr-2">•</span>
                {badge.label}
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 border border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-32 h-32 border border-cyan-400/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

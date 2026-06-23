import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroNew() {
  const stats = [
  { value: '3+', label: 'Internships' },
  { value: '30+', label: 'SEO Articles' },
  { value: '3+', label: 'Projects' },
  { value: '90%+', label: 'Growth Impact' }
];

  const handleConnect = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{personalInfo.title}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-space-grotesk leading-tight"
            >
              <span className="text-foreground">Helping Brands Grow Through</span>
              <br />
              <span className="gradient-text">SEO & Digital Marketing</span>
              <br />
              <span className="text-foreground">Business Development</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-foreground/80 mb-8 max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleConnect}
                className="btn-glass-primary flex items-center gap-2"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownloadResume}
                className="btn-glass flex items-center gap-2"
              >
                Download Resume <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-3xl md:text-4xl font-bold gradient-text"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-500/20 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image Container */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden glass-strong border-2 border-primary/30"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt="Kaveen Sakthivel"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-lg text-sm font-semibold text-primary"
              >
                Expert
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-lg text-sm font-semibold text-cyan-400"
              >
                Growth
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

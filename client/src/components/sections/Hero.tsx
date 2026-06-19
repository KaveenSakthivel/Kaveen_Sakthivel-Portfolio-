import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Hero() {
  const { scrollToElement } = useSmoothScroll();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663776238416/QPhX633oqLofvBervzqDBw/hero-background-f33RbnBt5usfAv5ARZnX2E.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-slate-950/0 dark:via-slate-950/50 dark:to-slate-950" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <motion.div
        className="container relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Open To Opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-poppins"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Transforming Ideas Into Digital Growth
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Digital Marketing Specialist helping brands grow through SEO, Content Marketing, Social Media Marketing, Google Ads, Meta Ads, and Data-Driven Marketing Strategies.
        </motion.p>

        {/* Value Proposition */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-primary font-semibold mb-10"
        >
          Helping businesses improve visibility, generate leads, increase engagement, and drive measurable digital growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={() => scrollToElement('contact')}
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-foreground/20 hover:border-primary hover:text-primary px-8"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            LinkedIn Profile
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="p-2 rounded-full border border-foreground/20">
            <ArrowDown className="w-6 h-6 text-foreground/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

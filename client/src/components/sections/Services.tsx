import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/data/portfolio';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';

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

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Services I Offer
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to help your business grow and succeed in the digital landscape.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as any;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-poppins">{service.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">Key Services</p>
                      <ul className="text-xs text-foreground/60 space-y-1">
                        {service.details.slice(0, 3).map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

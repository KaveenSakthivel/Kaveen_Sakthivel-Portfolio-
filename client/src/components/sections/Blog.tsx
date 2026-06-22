import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { blogPosts } from '@/data/portfolio';

import { Card } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container" ref={ref}>
        <motion.div initial="hidden" animate={isVisible ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Latest Blog Posts</h2>
            <p className="text-lg text-foreground/70">Insights on digital marketing, SEO, and business growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors font-poppins">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

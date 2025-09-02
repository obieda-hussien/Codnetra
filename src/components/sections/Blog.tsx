import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import FadeIn from '../animations/FadeIn';

// Sample blog data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'مستقبل تطوير تطبيقات الويب في 2024',
    excerpt: 'استكشاف أحدث التقنيات والاتجاهات في تطوير تطبيقات الويب وكيف ستشكل المستقبل',
    author: 'فريق كودنيترا',
    date: '15 ديسمبر 2024',
    readTime: '5 دقائق',
    category: 'تقنية',
    image: '/placeholder-blog-1.jpg'
  },
  {
    id: 2,
    title: 'أهمية تجربة المستخدم في التطبيقات المحمولة',
    excerpt: 'كيف تؤثر تجربة المستخدم على نجاح التطبيقات وما هي أفضل الممارسات لتحسينها',
    author: 'أحمد محمد',
    date: '12 ديسمبر 2024',
    readTime: '7 دقائق',
    category: 'تصميم',
    image: '/placeholder-blog-2.jpg'
  },
  {
    id: 3,
    title: 'الذكاء الاصطناعي في تطوير البرمجيات',
    excerpt: 'كيف يغير الذكاء الاصطناعي مجال تطوير البرمجيات ويحسن من كفاءة المطورين',
    author: 'سارة أحمد',
    date: '10 ديسمبر 2024',
    readTime: '6 دقائق',
    category: 'ذكاء اصطناعي',
    image: '/placeholder-blog-3.jpg'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            المدونة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            أحدث المقالات والنصائح في عالم التقنية وتطوير البرمجيات
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card hover className="h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">
                    صورة المقال
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {post.date}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary hover:text-primary-dark font-semibold text-sm"
                  >
                    اقرأ المزيد ←
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Posts CTA */}
        <FadeIn direction="up" delay={0.6} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
          >
            عرض جميع المقالات
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Blog;
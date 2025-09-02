import { faHome, faUsers, faCode, faLaptopCode, faNewspaper, faEnvelope, faMobile, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const navigationItems = [
  { label: 'الرئيسية', href: '#hero', sectionId: 'hero', icon: faHome },
  { label: 'خدماتنا', href: '#services', sectionId: 'services', icon: faCode },
  { label: 'أعمالنا', href: '#portfolio', sectionId: 'portfolio', icon: faLaptopCode },
  { label: 'فريقنا', href: '#team', sectionId: 'team', icon: faUsers },
  { label: 'المدونة', href: '#blog', sectionId: 'blog', icon: faNewspaper },
  { label: 'تواصل معنا', href: '#contact', sectionId: 'contact', icon: faEnvelope },
];

// Keep existing for backward compatibility
export const NAVIGATION_LINKS = [
  { name: 'الرئيسية', href: 'hero' },
  { name: 'خدماتنا', href: 'services' },
  { name: 'أعمالنا', href: 'portfolio' },
  { name: 'المدونة', href: 'blog' },
  { name: 'اتصل بنا', href: 'contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'تطوير تطبيقات الويب',
    description: 'تطبيقات ويب حديثة وسريعة باستخدام أحدث التقنيات',
    icon: faLaptopCode,
    features: ['React & Next.js', 'TypeScript', 'تصميم متجاوب', 'أداء عالي'],
  },
  {
    id: 2,
    title: 'تطوير تطبيقات الموبايل',
    description: 'تطبيقات موبايل مبتكرة لنظامي iOS و Android',
    icon: faMobile,
    features: ['React Native', 'Flutter', 'تصميم UX/UI', 'تجربة مستخدم مميزة'],
  },
  {
    id: 3,
    title: 'الحلول البرمجية المخصصة',
    description: 'حلول برمجية مخصصة تناسب احتياجات عملك',
    icon: faCode,
    features: ['تحليل المتطلبات', 'تصميم النظام', 'التطوير المرن', 'الدعم المستمر'],
  },
  {
    id: 4,
    title: 'استشارات تقنية',
    description: 'استشارات تقنية متخصصة لتطوير أعمالك الرقمية',
    icon: faRocket,
    features: ['تحليل التقنيات', 'استراتيجية التطوير', 'تحسين الأداء', 'الأمان الرقمي'],
  },
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', name: 'الكل' },
  { id: 'web', name: 'تطبيقات ويب' },
  { id: 'mobile', name: 'تطبيقات موبايل' },
  { id: 'design', name: 'تصميم UI/UX' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: '#', icon: faGithub },
  { name: 'LinkedIn', href: '#', icon: faLinkedin },
  { name: 'Twitter', href: '#', icon: faTwitter },
];

export const HERO_TEXTS = [
  'تطوير تطبيقات مبتكرة.',
  'حلول برمجية ذكية.',
  'نحول فكرتك إلى واقع.',
  'تقنيات المستقبل اليوم.',
];
import { faCode, faLaptopCode, faMobile, faRocket, faLightbulb, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  section: string;
}

export const NAVIGATION_LINKS: NavigationItem[] = [
  { id: 'home', label: 'الرئيسية', href: '/', section: 'hero' },
  { id: 'about', label: 'عنّا', href: '#about', section: 'about' },
  { id: 'services', label: 'خدماتنا', href: '#services', section: 'services' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact', section: 'contact' },
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
    description: 'تطبيقات أندرويد بواجهات عملية وسهلة الاستخدام',
    icon: faMobile,
    features: ['Android', 'Kotlin', 'تصميم UX/UI', 'تجربة مستخدم مميزة'],
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
  { name: 'GitHub', href: 'https://github.com/obieda-hussien', icon: faGithub },
];


export const HERO_TEXTS = [
  'تطوير تطبيقات مبتكرة.',
  'حلول برمجية ذكية.',
  'نحول فكرتك إلى واقع.',
  'تقنيات المستقبل اليوم.',
];

interface Developer {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  bio: string;
  skills: string[];
  avatar: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
  achievements: string[];
  specialties: string[];
}

export const DEVELOPERS: Developer[] = []


interface JourneyMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  status: 'completed' | 'in-progress' | 'planned';
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = []

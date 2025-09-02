import { faCode, faLaptopCode, faMobile, faRocket, faLightbulb, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  section: string;
}

export const NAVIGATION_LINKS: NavigationItem[] = [
  { id: 'home', label: 'الرئيسية', href: '/', section: 'hero' },
  { id: 'about', label: 'عن الشركة', href: '#about', section: 'about' },
  { id: 'journey', label: 'رحلة الشركة', href: '#journey', section: 'journey' },
  { id: 'team', label: 'فريق المطورين', href: '#team', section: 'team' },
  { id: 'services', label: 'خدماتنا', href: '#services', section: 'services' },
  { id: 'portfolio', label: 'أعمالنا', href: '#portfolio', section: 'portfolio' },
  { id: 'blog', label: 'المدونة', href: '#blog', section: 'blog' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact', section: 'contact' }
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

export const DEVELOPERS: Developer[] = [
  {
    id: 'abdelrahman',
    name: 'عبدالرحمن حسين',
    nameEn: 'Abdelrahman Hussein',
    role: 'Full-Stack Developer & Co-Founder',
    bio: 'مطور متكامل متخصص في تطبيقات الويب الحديثة وتطبيقات الأندرويد',
    skills: ['React', 'Node.js', 'Python', 'Kotlin', 'PostgreSQL'],
    avatar: '/team/abdelrahman.jpg',
    socialLinks: {
      github: 'https://github.com/abdelrahman',
      linkedin: 'https://linkedin.com/in/abdelrahman'
    },
    achievements: ['أكثر من 50 مشروع ناجح', '5 سنوات خبرة', 'شهادات تقنية متقدمة'],
    specialties: ['Mobile Development', 'Backend Architecture', 'Database Design']
  },
  {
    id: 'ahmed',
    name: 'أحمد إسماعيل',
    nameEn: 'Ahmed Ismail',
    role: 'Frontend Developer & UI/UX Designer',
    bio: 'مصمم ومطور واجهات المستخدم مع شغف بالتصميم العصري والتجربة المميزة',
    skills: ['React', 'TypeScript', 'Figma', 'Three.js', 'Framer Motion'],
    avatar: '/team/ahmed.jpg',
    socialLinks: {
      github: 'https://github.com/ahmed',
      portfolio: 'https://ahmed-portfolio.com'
    },
    achievements: ['تصميم أكثر من 100 واجهة', 'جوائز في التصميم', 'كورسات متخصصة'],
    specialties: ['UI/UX Design', '3D Web Development', 'Animation Design']
  }
];

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

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'inception',
    date: '2024',
    title: 'بداية الحلم',
    description: 'انطلقت فكرة كودنيترا من شغفنا بالتكنولوجيا ورغبتنا في تقديم حلول مبتكرة',
    icon: faLightbulb,
    status: 'completed',
    metrics: [
      { label: 'المؤسسين', value: '2' },
      { label: 'الأفكار الأولى', value: '10+' }
    ]
  },
  {
    id: 'team-formation',
    date: '2024',
    title: 'تكوين الفريق',
    description: 'ضم فريق من خبراء الذكاء الاصطناعي والتطوير لتحقيق رؤيتنا',
    icon: faUsers,
    status: 'completed',
    metrics: [
      { label: 'أعضاء الفريق', value: '11' },
      { label: 'مجالات الخبرة', value: '6' }
    ]
  },
  {
    id: 'first-projects',
    date: '2024',
    title: 'أول المشاريع',
    description: 'إطلاق أولى مشاريعنا والبدء في بناء سمعتنا في السوق',
    icon: faRocket,
    status: 'in-progress',
    metrics: [
      { label: 'مشاريع جارية', value: '3' },
      { label: 'عملاء راضون', value: '100%' }
    ]
  },
  {
    id: 'expansion',
    date: '2025',
    title: 'التوسع والنمو',
    description: 'خطط للتوسع في الخدمات وزيادة فريق العمل',
    icon: faChartLine,
    status: 'planned',
    metrics: [
      { label: 'خدمات جديدة', value: '5' },
      { label: 'أسواق جديدة', value: '3' }
    ]
  }
];
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-background text-dark-text py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">Codenetra</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              شركة متخصصة في تطوير الحلول البرمجية المبتكرة والتطبيقات العصرية 
              التي تساعد الشركات على النمو والتطور في العصر الرقمي.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">تطوير تطبيقات الويب</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">تطبيقات الموبايل</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">الحلول المخصصة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">الاستشارات التقنية</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@codenetra.com</li>
              <li>+966 50 123 4567</li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Codenetra. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
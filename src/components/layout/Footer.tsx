import React from 'react'

const Footer: React.FC = () => (
  <footer className="cn-footer">
    <div className="cn-container cn-footer-inner">
      <a href="#home" className="cn-brand">Codenetra<span className="cn-brand-dot">.</span></a>
      <small>© {new Date().getFullYear()} Codenetra</small>
      <a href="https://wa.me/201212294336" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب">واتساب ↗</a>
    </div>
  </footer>
)

export default Footer

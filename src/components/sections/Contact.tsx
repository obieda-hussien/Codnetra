import React from 'react'

const whatsapp = 'https://wa.me/201212294336?text=' +
  encodeURIComponent('أهلاً، أنا جاي من موقع Codenetra وعايز أستفسر عن تنفيذ مشروع برمجي.')

const Contact: React.FC = () => (
  <section id="contact" className="cn-contact">
    <div className="cn-container">
      <span className="cn-kicker">/ تواصل معنا</span>
      <h2>عندك فكرة مشروع؟</h2>
      <p>ابعتلنا نبذة عن فكرتك على واتساب علشان نناقش التفاصيل.</p>
      <a className="cn-button cn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">
        ابدأ محادثة واتساب
      </a>
    </div>
  </section>
)

export default Contact

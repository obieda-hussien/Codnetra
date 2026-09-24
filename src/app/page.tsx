import { ArrowUpLeft, Bot, Code2, Globe2, MessageCircle, Smartphone, Wrench } from 'lucide-react'

const phone = '201212294336'
const text = 'أهلاً، أنا جاي من موقع Codenetra وعايز أستفسر عن تنفيذ مشروع برمجي.'
const whatsapp = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text)
const services = [
  { title: 'تطوير تطبيقات أندرويد', description: 'تطبيقات عملية بواجهات واضحة، مع اهتمام بالأداء وتجربة المستخدم.', Icon: Smartphone },
  { title: 'تصميم وتطوير المواقع', description: 'مواقع متجاوبة تعرض فكرتك أو مشروعك بطريقة منظمة وسهلة التصفح.', Icon: Globe2 },
  { title: 'تحسين وصيانة البرمجيات', description: 'مراجعة الواجهات، معالجة المشاكل، وتحسين سرعة وسلاسة التطبيقات.', Icon: Wrench },
  { title: 'تكاملات الذكاء الاصطناعي', description: 'دراسة طرق دمج أدوات ونماذج الذكاء الاصطناعي في تجارب مفيدة.', Icon: Bot },
]

export default function Home() {
  return <div className="cn-site" lang="ar" dir="rtl">
    <a className="cn-skip" href="#main">انتقل للمحتوى</a>
    <header className="cn-header"><nav className="cn-container cn-nav" aria-label="التنقل الرئيسي">
      <a className="cn-brand" href="#home"><span className="cn-brand-icon"><Code2 size={22}/></span>Codenetra<span className="cn-brand-dot">.</span></a>
      <div className="cn-nav-links"><a href="#about">عنّا</a><a href="#services">الخدمات</a><a href="#process">طريقة العمل</a><a href="#contact">التواصل</a></div>
      <a className="cn-nav-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">ابدأ مشروعك <ArrowUpLeft size={17}/></a>
    </nav></header>
    <main id="main">
      <section className="cn-hero" id="home"><div className="cn-container cn-hero-grid">
        <div className="cn-hero-copy">
          <span className="cn-eyebrow"><span className="cn-dot"/>حلول رقمية تبدأ من فكرتك</span>
          <h1>من الفكرة إلى <span>تجربة رقمية</span> واضحة ومفيدة.</h1>
          <p>نساعد الأفراد وأصحاب المشاريع في تصميم وتطوير التطبيقات والمواقع والحلول البرمجية، مع الاهتمام بالتفاصيل والأداء وسهولة الاستخدام.</p>
          <div className="cn-actions"><a className="cn-button cn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> تواصل على واتساب <ArrowUpLeft size={17}/></a><a className="cn-button cn-secondary" href="#services">اكتشف خدماتنا <ArrowUpLeft size={17}/></a></div>
          <small>احكيلنا عن فكرتك، ونناقش معاك الخطوة المناسبة.</small>
        </div>
        <div className="cn-art" aria-label="تصميم تجريدي لهوية Codenetra"><div className="cn-art-bar"><span>● ● ●</span> CODENETRA / IDEAS → SOFTWARE</div><div className="cn-art-center"><div className="cn-orbit"><Code2 size={70} strokeWidth={1.2}/></div><strong>Think. Build. Improve.</strong><span>01 / YOUR IDEA</span></div><div className="cn-art-footer">DESIGN <i/> DEVELOPMENT <i/> EXPERIENCE</div></div>
      </div></section>
      <section className="cn-about cn-container" id="about"><span className="cn-kicker">/ 01 — مين إحنا</span><div className="cn-about-grid"><h2>تكنولوجيا مفيدة،<br/><span>من غير تعقيد.</span></h2><p>Codenetra مساحة لتطوير أفكار رقمية بشكل عملي. بنبدأ بفهم احتياجك، وبعدها نحدد نطاق الشغل ونختار الحل اللي يناسب مشروعك. هدفنا تجربة واضحة للمستخدم وكود قابل للتطوير.</p></div></section>
      <section className="cn-services" id="services"><div className="cn-container"><span className="cn-kicker">/ 02 — إيه اللي بنقدمه</span><div className="cn-section-heading"><h2>خدماتنا<span>.</span></h2><p>بنتعامل مع كل فكرة حسب احتياجاتها، من أول فهم المطلوب لحد تجربة الاستخدام.</p></div><div className="cn-services-grid">{services.map(({title,description,Icon},i)=><article className="cn-service" key={title}><div className="cn-service-top"><span><Icon size={27} strokeWidth={1.7}/></span><small>0{i+1} / 04</small></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="cn-process cn-container" id="process"><span className="cn-kicker">/ 03 — نشتغل إزاي</span><h2>خطوات بسيطة وواضحة<span>.</span></h2><div className="cn-process-grid"><div><span>01</span><h3>نفهم الفكرة</h3><p>نتكلم عن الهدف والمستخدم والاحتياجات.</p></div><div><span>02</span><h3>نحدد النطاق</h3><p>نتفق على المطلوب والأولويات قبل التنفيذ.</p></div><div><span>03</span><h3>نبني ونحسّن</h3><p>نطوّر الحل ونجربه ونراجع التفاصيل.</p></div></div></section>
      <section className="cn-contact" id="contact"><div className="cn-container cn-contact-grid"><div><span className="cn-kicker">/ 04 — نبدأ</span><h2>عندك فكرة؟<br/><span>خلّينا نتكلم.</span></h2><p>ابعتلنا على واتساب نبذة عن المشروع اللي في بالك، وهنقدر نناقش التفاصيل معاك مباشرة.</p><a className="cn-button cn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> ابدأ محادثة واتساب <ArrowUpLeft size={17}/></a><p className="cn-number" dir="ltr">+20 121 229 4336</p></div><div className="cn-contact-art" aria-hidden="true"><MessageCircle size={110} strokeWidth={1}/></div></div></section>
    </main>
    <footer className="cn-footer"><div className="cn-container cn-footer-inner"><span className="cn-brand">Codenetra<span className="cn-brand-dot">.</span></span><small>© {new Date().getFullYear()} Codenetra</small><a href="#home" aria-label="العودة للأعلى">↑</a></div></footer>
    <a className="cn-float" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="تواصل مع Codenetra عبر واتساب"><MessageCircle size={24}/><span>واتساب</span></a>
  </div>
}

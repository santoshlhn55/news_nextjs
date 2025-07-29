import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'राजनीति',
  description: 'भारतीय राजनीति की ताजा खबरें। संसद, सरकार, विपक्ष और राजनीतिक विकासों की विश्वसनीय जानकारी।',
  keywords: 'राजनीति, भारतीय राजनीति, संसद, सरकार, विपक्ष, चुनाव, नीति',
  url: '/rajneeti',
  type: 'website',
  image: '/og-politics.jpg',
});

export default function Rajneeti() {
  return (
    <>
      <PerformanceMonitor pageName="rajneeti" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">राजनीति</span>
          </div>
          <h1>राजनीति</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <Link href="/article" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/1e3a8a/ffffff?text=संसद+भवन" 
                    alt="संसद भवन का एक दृश्य, जहाँ मानसून सत्र चल रहा है।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-card-content">
                  <h3>संसद का मानसून सत्र: विपक्ष ने महंगाई और बेरोजगारी पर सरकार को घेरा</h3>
                  <p>सत्र के पहले दिन विपक्ष ने बढ़ती महंगाई और अन्य महत्वपूर्ण मुद्दों पर जोरदार बहस की मांग करते हुए सरकार पर दबाव बनाया।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </Link>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/166534/ffffff?text=नई+शिक्षा+नीति" 
                    alt="एक कक्षा में छात्र पढ़ते हुए।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>नई शिक्षा नीति पर राज्यों के साथ केंद्र की बैठक जल्द</h3>
                  <p>कार्यान्वयन की प्रगति और चुनौतियों पर चर्चा करने के लिए शिक्षा मंत्रालय जल्द ही सभी राज्यों के शिक्षा मंत्रियों के साथ एक महत्वपूर्ण बैठक करेगा।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/991b1b/ffffff?text=चुनाव+आयोग" 
                    alt="भारत का चुनाव आयोग का लोगो।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>चुनाव आयोग ने आगामी विधानसभा चुनावों की तैयारी शुरू की</h3>
                  <p>आयोग ने पांच राज्यों में होने वाले विधानसभा चुनावों के लिए प्रारंभिक तैयारियों और मतदाता सूची के पुनरीक्षण का काम शुरू कर दिया है।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
            </div>

            {/* Pagination */}
            <nav className="pagination" aria-label="लेख सूची">
              <span className="disabled">पिछला</span>
              <span className="current" aria-current="page">1</span>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">अगला</a>
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="section-sidebar">
            <div className="sidebar-widget">
              <div className="ad-container ad-sidebar-sticky">
                <span className="ad-label">विज्ञापन</span>
                <span className="ad-placeholder-text">स्टिकि विज्ञापन (300x600)</span>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3 className="widget-title">अन्य श्रेणियां</h3>
              <ul className="widget-list">
                <li><Link href="/vyapar">व्यापार</Link></li>
                <li><Link href="/vishwa">विश्व</Link></li>
                <li><Link href="/khel">खेल</Link></li>
                <li><Link href="/manoranjan">मनोरंजन</Link></li>
                <li><Link href="/taknik">तकनीक</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

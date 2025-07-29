import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'खेल',
  description: 'खेल की ताजा खबरें और अपडेट्स। क्रिकेट, फुटबॉल, कबड्डी और अन्य खेलों की विश्वसनीय जानकारी।',
  keywords: 'खेल, क्रिकेट, फुटबॉल, कबड्डी, ओलंपिक, स्पोर्ट्स, भारतीय खेल',
  url: '/khel',
  type: 'website',
  image: '/og-sports.jpg',
});

export default function Khel() {
  return (
    <>
      <PerformanceMonitor pageName="khel" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">खेल</span>
          </div>
          <h1>खेल</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/22c55e/ffffff?text=खेल" 
                    alt="क्रिकेट स्टेडियम का एक दृश्य।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-card-content">
                  <h3>क्रिकेट: भारत ने फाइनल में रोमांचक जीत दर्ज की</h3>
                  <p>आखिरी ओवर तक चले मुकाबले में भारतीय टीम ने शानदार प्रदर्शन करते हुए विश्व कप अपने नाम कर लिया।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/4f46e5/ffffff?text=Kabaddi" 
                    alt="प्रो कबड्डी लीग का लोगो।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>प्रो कबड्डी लीग के ऑक्शन की तारीखें घोषित, टीमों में हलचल</h3>
                  <p>आगामी सीजन के लिए खिलाड़ियों की नीलामी की तारीखों का ऐलान हो गया है, और सभी फ्रेंचाइजी अपनी रणनीति बनाने में जुट गई हैं।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/f59e0b/ffffff?text=Olympics" 
                    alt="ओलंपिक के छल्ले।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>ओलंपिक में भारतीय एथलीटों का शानदार प्रदर्शन जारी, और पदक पक्के</h3>
                  <p>भारतीय दल ने निशानेबाजी और कुश्ती में और पदक जीतकर देश का नाम रोशन किया है। प्रधानमंत्री ने दी बधाई।</p>
                  <div className="article-card-meta">१४ जुलाई २०२५</div>
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
                <li><Link href="/rajneeti">राजनीति</Link></li>
                <li><Link href="/vyapar">व्यापार</Link></li>
                <li><Link href="/vishwa">विश्व</Link></li>
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

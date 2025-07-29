import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'व्यापार',
  description: 'भारतीय अर्थव्यवस्था और व्यापार की ताजा खबरें। शेयर बाजार, कंपनियां, निवेश और आर्थिक विकास की जानकारी।',
  keywords: 'व्यापार, अर्थव्यवस्था, शेयर बाजार, निवेश, कंपनियां, आर्थिक विकास',
  url: '/vyapar',
  type: 'website',
  image: '/og-business.jpg',
});

export default function Vyapar() {
  return (
    <>
      <PerformanceMonitor pageName="vyapar" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">व्यापार</span>
          </div>
          <h1>व्यापार</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/9a3412/fde68a?text=Stock+Market" 
                    alt="स्टॉक मार्केट चार्ट्स ऊपर की ओर जाते हुए।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-card-content">
                  <h3>शेयर बाजार नए शिखर पर, निवेशकों में उत्साह का माहौल</h3>
                  <p>सकारात्मक वैश्विक संकेतों और मजबूत घरेलू मांग के कारण सेंसेक्स और निफ्टी ने आज रिकॉर्ड ऊंचाई हासिल की।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/047857/ffffff?text=RBI" 
                    alt="भारतीय रिजर्व बैंक का लोगो।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>आरबीआई ने रेपो रेट में कोई बदलाव नहीं किया, ईएमआई स्थिर</h3>
                  <p>मौद्रिक नीति समिति की बैठक के बाद, आरबीआई गवर्नर ने घोषणा की कि रेपो रेट को अपरिवर्तित रखा जाएगा, जिससे कर्जदारों को राहत मिली है।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/7c2d12/ffffff?text=World+Bank" 
                    alt="विश्व बैंक का मुख्यालय।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>भारत की जीडीपी वृद्धि दर अनुमान से बेहतर रहने की उम्मीद: विश्व बैंक</h3>
                  <p>विश्व बैंक ने अपनी नवीनतम रिपोर्ट में भारतीय अर्थव्यवस्था के प्रति विश्वास जताते हुए चालू वित्त वर्ष के लिए विकास दर का अनुमान बढ़ाया है।</p>
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

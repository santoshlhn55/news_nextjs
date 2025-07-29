import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'मनोरंजन',
  description: 'मनोरंजन की ताजा खबरें। फिल्में, टीवी, सेलिब्रिटी और ओटीटी की विश्वसनीय जानकारी।',
  keywords: 'मनोरंजन, फिल्में, टीवी, सेलिब्रिटी, ओटीटी, बॉलीवुड, हॉलीवुड',
  url: '/manoranjan',
  type: 'website',
  image: '/og-entertainment.jpg',
});

export default function Manoranjan() {
  return (
    <>
      <PerformanceMonitor pageName="manoranjan" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">मनोरंजन</span>
          </div>
          <h1>मनोरंजन</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/8b5cf6/ffffff?text=मनोरंजन" 
                    alt="एक फिल्म का पोस्टर।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-card-content">
                  <h3>नई फिल्म का ट्रेलर रिलीज, सोशल मीडिया पर धूम</h3>
                  <p>आने वाली बड़ी बजट की फिल्म के ट्रेलर ने रिलीज होते ही दर्शकों में उत्साह भर दिया है और यह चर्चा का विषय बन गया है।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/ec4899/ffffff?text=OTT" 
                    alt="एक टीवी स्क्रीन पर ओटीटी प्लेटफॉर्म्स के लोगो।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>इस हफ्ते ओटीटी पर रिलीज होंगी ये फिल्में और वेब सीरीज</h3>
                  <p>इस सप्ताह दर्शकों के लिए मनोरंजन का पूरा पैकेज है, जिसमें कई बहुप्रतीक्षित फिल्में और वेब सीरीज विभिन्न ओटीटी प्लेटफॉर्म पर आ रही हैं।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/d946ef/ffffff?text=Celebrity+Wedding" 
                    alt="एक सेलिब्रिटी कपल।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>मशहूर सेलिब्रिटी कपल ने की अपनी शादी की घोषणा, फैंस ने दी बधाई</h3>
                  <p>बॉलीवुड के पसंदीदा कपल ने सोशल मीडिया पर अपनी शादी की तारीख का ऐलान कर दिया है, जिसके बाद से बधाइयों का तांता लग गया है।</p>
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
                <li><Link href="/khel">खेल</Link></li>
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

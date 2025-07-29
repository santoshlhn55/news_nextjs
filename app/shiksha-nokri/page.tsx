import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'शिक्षा और नौकरी',
  description: 'शिक्षा और नौकरी की ताजा खबरें। करियर, शिक्षा नीति, रोजगार और प्रतियोगी परीक्षाओं की जानकारी।',
  keywords: 'शिक्षा, नौकरी, करियर, रोजगार, प्रतियोगी परीक्षा, शिक्षा नीति',
  url: '/shiksha-nokri',
  type: 'website',
  image: '/og-education.jpg',
});

export default function ShikshaNokri() {
  return (
    <>
      <PerformanceMonitor pageName="shiksha-nokri" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">शिक्षा/नौकरी</span>
          </div>
          <h1>शिक्षा/नौकरी</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/0d9488/ffffff?text=Sarkari+Naukri" 
                    alt="एक सरकारी कार्यालय की इमारत।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>रेलवे में 10,000 पदों पर निकली बंपर भर्ती, जल्द करें आवेदन</h3>
                  <p>भारतीय रेलवे ने विभिन्न पदों के लिए भर्ती की घोषणा की है। इच्छुक उम्मीदवार ऑनलाइन आवेदन कर सकते हैं।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/9333ea/ffffff?text=Exam+Result" 
                    alt="एक छात्र परीक्षा परिणाम देखकर खुश हो रहा है।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>12वीं बोर्ड परीक्षा के नतीजे घोषित, 85% छात्र हुए पास</h3>
                  <p>केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE) ने आज 12वीं कक्षा के परीक्षा परिणाम घोषित कर दिए हैं। छात्र आधिकारिक वेबसाइट पर अपना रिजल्ट देख सकते हैं।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/c2410c/ffffff?text=Skill+Development" 
                    alt="स्किल डेवलपमेंट कोर्स का लोगो।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>सरकार ने युवाओं के लिए नए स्किल डेवलपमेंट कोर्स शुरू किए</h3>
                  <p>इस पहल का उद्देश्य युवाओं को नवीनतम तकनीक और उद्योग की मांगों के अनुसार प्रशिक्षित करना है ताकि उनकी रोजगार क्षमता बढ़ सके।</p>
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
                <li><Link href="/manoranjan">मनोरंजन</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

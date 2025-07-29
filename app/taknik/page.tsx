import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'तकनीक',
  description: 'तकनीक की ताजा खबरें और अपडेट्स। स्मार्टफोन, कंप्यूटर, AI और डिजिटल विकास की जानकारी।',
  keywords: 'तकनीक, स्मार्टफोन, कंप्यूटर, AI, डिजिटल, सॉफ्टवेयर',
  url: '/taknik',
  type: 'website',
  image: '/og-technology.jpg',
});

export default function Taknik() {
  return (
    <>
      <PerformanceMonitor pageName="taknik" />
      <Header />
      
      <main id="main-content" className="container">
          
          <header className="section-page-header">
              <div className="breadcrumbs">
                  <Link href="/">होम</Link>
                  <span>&gt;</span>
                  <span aria-current="page">तकनीक</span>
              </div>
              <h1>तकनीक</h1>
          </header>

          <div className="section-layout">
              {/* Main Content: Article List */}
              <div className="section-main">
                  <div className="article-list">
                      {/* Article Card 1 */}
                      <Link href="#" className="article-card">
                          <div className="article-card-image-wrapper">
                             <OptimizedImage 
                    src="https://placehold.co/800x500/0891b2/ffffff?text=New+Smartphone" 
                    alt="एक नया स्मार्टफोन।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                          </div>
                          <div className="article-card-content">
                              <h3>नया 5G स्मार्टफोन लॉन्च, मिलेंगे दमदार कैमरा और प्रोसेसर</h3>
                              <p>एक प्रमुख मोबाइल कंपनी ने अपना नया फ्लैगशिप 5G स्मार्टफोन लॉन्च कर दिया है, जिसमें बेहतरीन कैमरा क्वालिटी और तेज प्रोसेसर दिया गया है।</p>
                              <div className="article-card-meta">१६ जुलाई २०२५</div>
                          </div>
                      </Link>
                      {/* Article Card 2 */}
                      <Link href="#" className="article-card">
                          <div className="article-card-image-wrapper">
                              <OptimizedImage 
                    src="https://placehold.co/800x500/65a30d/ffffff?text=AI+Future" 
                    alt="आर्टिफिशियल इंटेलिजेंस का प्रतीकात्मक चित्र।"
                    width={800}
                    height={500}
                  />
                          </div>
                          <div className="article-card-content">
                              <h3>आर्टिफिशियल इंटेलिजेंस (AI) का भविष्य: क्या यह नौकरियों के लिए खतरा है?</h3>
                              <p>विशेषज्ञों का कहना है कि AI से कई क्षेत्रों में क्रांति आएगी, लेकिन इसके साथ ही नौकरियों पर पड़ने वाले प्रभाव को लेकर भी बहस छिड़ गई है।</p>
                              <div className="article-card-meta">१५ जुलाई २०२५</div>
                          </div>
                      </Link>
                      {/* Article Card 3 */}
                      <Link href="#" className="article-card">
                          <div className="article-card-image-wrapper">
                             <OptimizedImage 
                    src="https://placehold.co/800x500/be185d/ffffff?text=Social+Media+App" 
                    alt="एक सोशल मीडिया ऐप का लोगो।"
                    width={800}
                    height={500}
                  />
                          </div>
                          <div className="article-card-content">
                              <h3>लोकप्रिय सोशल मीडिया ऐप में आया नया फीचर, यूजर्स में उत्साह</h3>
                              <p>इस नए फीचर से यूजर्स अब और बेहतर तरीके से अपने दोस्तों से जुड़ सकेंगे। कंपनी ने कहा कि यह प्राइवेसी को ध्यान में रखकर बनाया गया है।</p>
                              <div className="article-card-meta">१४ जुलाई २०२५</div>
                          </div>
                      </Link>
                  </div>

                  {/* Pagination */}
                  <nav className="pagination" aria-label="लेख सूची">
                      <span className="disabled">पिछला</span>
                      <span className="current" aria-current="page">1</span>
                      <Link href="#">2</Link>
                      <Link href="#">3</Link>
                      <Link href="#">अगला</Link>
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
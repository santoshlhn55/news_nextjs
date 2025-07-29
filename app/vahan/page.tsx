import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'वाहन',
  description: 'वाहनों की ताजा खबरें और रिव्यू। कार, बाइक, इलेक्ट्रिक वाहन और ऑटोमोबाइल की विश्वसनीय जानकारी।',
  keywords: 'वाहन, कार, बाइक, इलेक्ट्रिक वाहन, ऑटोमोबाइल, एसयूवी',
  url: '/vahan',
  type: 'website',
  image: '/og-vehicles.jpg',
});

export default function Vahan() {
  return (
    <>
      <PerformanceMonitor pageName="vahan" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">वाहन</span>
          </div>
          <h1>वाहन</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/3b82f6/ffffff?text=Electric+SUV" 
                    alt="एक नई इलेक्ट्रिक एसयूवी कार।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-card-content">
                  <h3>नई इलेक्ट्रिक SUV लॉन्च, 500km की रेंज का दावा</h3>
                  <p>प्रमुख कार निर्माता कंपनी ने अपनी बहुप्रतीक्षित इलेक्ट्रिक एसयूवी को शानदार फीचर्स और लंबी रेंज के साथ बाजार में उतारा है।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/16a34a/ffffff?text=New+Bike" 
                    alt="एक नई स्पोर्ट्स बाइक।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>दमदार इंजन के साथ नई स्पोर्ट्स बाइक लॉन्च, जानें कीमत और फीचर्स</h3>
                  <p>युवाओं को ध्यान में रखकर कंपनी ने अपनी नई स्पोर्ट्स बाइक को आक्रामक डिजाइन और शक्तिशाली इंजन के साथ पेश किया है।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/f97316/ffffff?text=EV+Policy" 
                    alt="एक इलेक्ट्रिक वाहन चार्जिंग स्टेशन।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>सरकार की नई EV पॉलिसी: इलेक्ट्रिक वाहन होंगे सस्ते!</h3>
                  <p>सरकार ने इलेक्ट्रिक वाहनों को बढ़ावा देने के लिए नई नीति की घोषणा की है, जिसमें सब्सिडी और टैक्स में छूट शामिल है।</p>
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

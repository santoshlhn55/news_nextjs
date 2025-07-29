import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

export const metadata: Metadata = generateMetadata({
  title: 'विश्व',
  description: 'विश्व की ताजा खबरें और अंतरराष्ट्रीय विकास। राजनीति, अर्थव्यवस्था, विज्ञान और तकनीक की वैश्विक जानकारी।',
  keywords: 'विश्व, अंतरराष्ट्रीय, वैश्विक खबरें, विदेश नीति, अंतरराष्ट्रीय राजनीति',
  url: '/vishwa',
  type: 'website',
  image: '/og-world.jpg',
});

export default function Vishwa() {
  return (
    <>
      <PerformanceMonitor pageName="vishwa" />
      <Header />
      <main id="main-content" className="container">
        <header className="section-page-header">
          <div className="breadcrumbs">
            <Link href="/">होम</Link>
            <span>&gt;</span>
            <span aria-current="page">विश्व</span>
          </div>
          <h1>विश्व</h1>
        </header>

        <div className="section-layout">
          {/* Main Content: Article List */}
          <div className="section-main">
            <div className="article-list">
              {/* Article Card 1 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/1d4ed8/dbeafe?text=World+Leaders" 
                    alt="विश्व नेता एक शिखर सम्मेलन में हाथ मिलाते हुए।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-card-content">
                  <h3>जलवायु शिखर सम्मेलन में ऐतिहासिक समझौते पर बनी सहमति</h3>
                  <p>कई दिनों की तनावपूर्ण बातचीत के बाद, विश्व के नेताओं ने कार्बन उत्सर्जन को कम करने के लिए एक महत्वपूर्ण समझौते की घोषणा की।</p>
                  <div className="article-card-meta">१६ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 2 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/0c4a6e/ffffff?text=UNSC" 
                    alt="संयुक्त राष्ट्र सुरक्षा परिषद का मीटिंग हॉल।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>यूक्रेन संकट पर संयुक्त राष्ट्र सुरक्षा परिषद की आपात बैठक</h3>
                  <p>बढ़ते तनाव के बीच, संयुक्त राष्ट्र सुरक्षा परिषद ने स्थिति पर चर्चा करने और समाधान खोजने के लिए एक तत्काल बैठक बुलाई है।</p>
                  <div className="article-card-meta">१५ जुलाई २०२५</div>
                </div>
              </a>
              {/* Article Card 3 */}
              <a href="#" className="article-card">
                <div className="article-card-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/b91c1c/ffffff?text=China+Economy" 
                    alt="चीन का एक शहर और उसकी अर्थव्यवस्था का प्रतीक।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card-content">
                  <h3>चीन की अर्थव्यवस्था में मंदी के संकेत, वैश्विक बाजारों पर असर</h3>
                  <p>नवीनतम आर्थिक आंकड़ों ने चीन की विकास दर में मंदी का संकेत दिया है, जिससे दुनिया भर के शेयर बाजारों में चिंता की लहर है।</p>
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

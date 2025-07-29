import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PWAFeatures from '../components/PWAFeatures';

export const metadata: Metadata = generateMetadata({
  title: 'होम',
  description: 'न्यूज़ सर्कल इंडिया - भारत और विश्व की ताजा खबरें। राजनीति, व्यापार, खेल, मनोरंजन और तकनीक की विश्वसनीय जानकारी।',
  keywords: 'न्यूज़, खबरें, भारत, राजनीति, व्यापार, खेल, मनोरंजन, तकनीक',
  url: '/',
  type: 'website',
  image: '/og-homepage.jpg',
});

export default function Home() {
  return (
    <>
      <PerformanceMonitor pageName="home" />
      <PWAFeatures />
      <Header />
      <main id="main-content" className="container" style={{ paddingTop: '1rem' }}>
        {/* =========== Header Ad Slot =========== */}
        <div className="ad-container ad-leaderboard">
          <span className="ad-label">विज्ञापन</span>
          <span className="ad-placeholder-text">लीडरबोर्ड विज्ञापन (970x90)</span>
        </div>

        {/* =========== राजनीति Section =========== */}
        <section className="news-section" aria-labelledby="politics-title">
          <header className="section-header">
            <h2 id="politics-title" className="section-title">
              <Link href="/rajneeti">राजनीति</Link>
            </h2>
          </header>
          <div className="section-content">
            <article className="section-main-article">
              <Link href="/article">
                <div className="article-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/1e3a8a/ffffff?text=संवाद+भवन" 
                    alt="संवाद भवन का एक दृश्य, जहां मानसून सत्र चल रहा है।"
                    width={800}
                    height={500}
                    priority={true}
                  />
                </div>
                <div className="article-content">
                  <h3>संवाद का मानसून सत्र: विपक्ष ने महंगाई और बेरोजगारी पर सरकार को घेरा</h3>
                  <p>सत्र के पहले दिन विपक्ष ने बढ़ती महंगाई और अन्य महत्वपूर्ण मुद्दों पर जोरदार बहस की मांग करते हुए सरकार पर दबाव बनाया।</p>
                </div>
              </Link>
            </article>
            <ul className="secondary-headlines-list">
              <li><a href="#">नई शिक्षा नीति पर राज्यों के साथ केंद्र की बैठक जल्द।</a></li>
              <li><a href="#">चुनाव आयोग ने आगामी विधानसभाओं की तैयारी शुरू की।</a></li>
              <li><a href="#">रक्षा सौदे पर विपक्ष ने उठाए सवाल, सरकार ने दिया जवाब।</a></li>
            </ul>
          </div>
        </section>

        {/* =========== व्यापार Section =========== */}
        <section className="news-section" aria-labelledby="business-title">
          <header className="section-header">
            <h2 id="business-title" className="section-title">
              <Link href="/vyapar">व्यापार</Link>
            </h2>
          </header>
          <div className="section-content">
            <article className="section-main-article">
              <a href="#">
                <div className="article-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/9a3412/fde68a?text=Stock+Market" 
                    alt="स्टॉक मार्केट चार्ट्स ऊपर की ओर जाते हुए।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-content">
                  <h3>शेयर बाजार नए शिखर पर, निवेशकों में उत्साह का माहौल</h3>
                  <p>सकारात्मक वैश्विक संकेतों और मजबूत घरेलू मांग के कारण सेंसेक्स और निफ्टी ने आज रिकॉर्ड ऊंचाई हासिल की।</p>
                </div>
              </a>
            </article>
            <ul className="secondary-headlines-list">
              <li><a href="#">आरबीआई ने रेपो रेट में कोई बदलाव नहीं किया, ईएमआई स्थिर।</a></li>
              <li><a href="#">भारत की जीडीपी वृद्धि दर अनुमान से बेहतर रहने की उम्मीद: विश्व बैंक।</a></li>
              <li><a href="#">स्टार्टअप्स के लिए सरकार ने नए फंड की घोषणा की।</a></li>
            </ul>
          </div>
        </section>

        {/* =========== In-Feed Ad Slot 1 =========== */}
        <div className="ad-container ad-in-feed">
          <span className="ad-label">विज्ञापन</span>
          <span className="ad-placeholder-text">इन-फीड विज्ञापन (300x250 or Responsive)</span>
        </div>

        {/* =========== विश्व Section =========== */}
        <section className="news-section" aria-labelledby="world-title">
          <header className="section-header">
            <h2 id="world-title" className="section-title">
              <Link href="/vishwa">विश्व</Link>
            </h2>
          </header>
          <div className="section-content">
            <article className="section-main-article">
              <a href="#">
                <div className="article-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/1d4ed8/dbeafe?text=World+Leaders" 
                    alt="विश्व नेता एक शिखर सम्मेलन में हाथ मिलाते हुए।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-content">
                  <h3>जलवायु शिखर सम्मेलन में ऐतिहासिक समझौते पर बनी सहमति</h3>
                  <p>कई दिनों की तनापूर्ण बातचीत के बाद, विश्व के नेताओं ने कार्बन उत्सर्जन को कम करने के लिए एक महत्वपूर्ण समझौते की घोषणा की।</p>
                </div>
              </a>
            </article>
            <ul className="secondary-headlines-list">
              <li><a href="#">यूक्रेन संकट पर संयुक्त राष्ट्र सुरक्षा परिषद की आपात बैठक।</a></li>
              <li><a href="#">चीन की अर्थव्यवस्था में मंदी के संकेत, वैश्विक बाजारों पर असर।</a></li>
              <li><a href="#">अफ्रीकी देशों ने व्यापार और विकास के लिए नए गठबंधन का ऐलान किया।</a></li>
            </ul>
          </div>
        </section>

        {/* =========== खेल Section =========== */}
        <section className="news-section" aria-labelledby="sports-title">
          <header className="section-header">
            <h2 id="sports-title" className="section-title">
              <Link href="/khel">खेल</Link>
            </h2>
          </header>
          <div className="section-content">
            <article className="section-main-article">
              <a href="#">
                <div className="article-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/22c55e/ffffff?text=खेल" 
                    alt="क्रिकेट स्टेडियम का एक दृश्य।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-content">
                  <h3>क्रिकेट: भारत ने फाइनल में रोमांचक जीत दर्ज की</h3>
                  <p>आखिरी ओवर तक चले मुकाबले में भारतीय टीम ने शानदार प्रदर्शन करते हुए विश्व कप अपने नाम कर लिया।</p>
                </div>
              </a>
            </article>
            <ul className="secondary-headlines-list">
              <li><a href="#">प्रो कबड्डी लीग के ऑक्शन की तारीखें घोषित।</a></li>
              <li><a href="#">ओलंपिक में भारतीय एथलीटों का शानदार प्रदर्शन जारी।</a></li>
              <li><a href="#">इंडियन सुपर लीग का नया सीजन जल्द होगा शुरू।</a></li>
            </ul>
          </div>
        </section>

        {/* =========== In-Feed Ad Slot 2 =========== */}
        <div className="ad-container ad-in-feed">
          <span className="ad-label">विज्ञापन</span>
          <span className="ad-placeholder-text">इन-फीड विज्ञापन (300x250 or Responsive)</span>
        </div>

        {/* =========== मनोरंजन Section =========== */}
        <section className="news-section" aria-labelledby="entertainment-title">
          <header className="section-header">
            <h2 id="entertainment-title" className="section-title">
              <Link href="/manoranjan">मनोरंजन</Link>
            </h2>
          </header>
          <div className="section-content">
            <article className="section-main-article">
              <a href="#">
                <div className="article-image-wrapper">
                  <OptimizedImage 
                    src="https://placehold.co/800x500/8b5cf6/ffffff?text=मनोरंजन" 
                    alt="एक फिल्म का पोस्टर।"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-content">
                  <h3>नई फिल्म का ट्रेलर रिलीज, सोशल मीडिया पर धूम</h3>
                  <p>आने वाली बड़ी बजट की फिल्म के ट्रेलर ने रिलीज होते ही दर्शकों में उत्साह भर दिया है और यह चर्चा का विषय बन गया है।</p>
                </div>
              </a>
            </article>
            <ul className="secondary-headlines-list">
              <li><a href="#">इस हफ्ते ओटीटी पर रिलीज होंगी ये फिल्में और वेब सीरीज।</a></li>
              <li><a href="#">मशहूर टीवी शो में आएगा नया मोड़, कहानी में बड़ा बदलाव।</a></li>
              <li><a href="#">सेलिब्रिटी कपल ने की अपनी शादी की घोषणा।</a></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

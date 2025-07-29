import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import PerformanceMonitor from '../../components/PerformanceMonitor';

const sectionLink = '/rajneeti';
const sectionText = 'राजनीति';
const articleHeadline = 'संसद का मानसून सत्र: विपक्ष ने महंगाई और बेरोजगारी पर सरकार को घेरा';
const authorName = 'विशेष संवाददाता';
const publishDate = '१६ जुलाई २०२५';
const featuredImageUrl = 'https://placehold.co/1200x675/1e3a8a/ffffff?text=संसद+भवन';
const featuredImageAlt = 'संसद भवन का एक विस्तृत दृश्य, जहाँ मानसून सत्र चल रहा है।';
const articleBody = `
    <p><strong>नई दिल्ली:</strong> संसद का बहुप्रतीक्षित मानसून सत्र आज से शुरू हो गया है, और पहले ही दिन राजनीतिक माहौल गरमा गया। विपक्षी दलों ने एकजुट होकर बढ़ती महंगाई, बेरोजगारी और अग्निपथ योजना जैसे महत्वपूर्ण मुद्दों पर सरकार को घेरने की कोशिश की। लोकसभा और राज्यसभा, दोनों सदनों में इन विषयों पर तत्काल चर्चा की मांग को लेकर जमकर हंगामा हुआ, जिसके कारण कार्यवाही को कई बार स्थगित करना पड़ा।</p>
    <p>विपक्ष का नेतृत्व कर रहे कांग्रेस नेता ने कहा, "देश की जनता महंगाई की मार से त्रस्त है। पेट्रोल-डीजल से लेकर रसोई गैस और खाद्य पदार्थों की कीमतें आसमान छू रही हैं, लेकिन सरकार इस पर चर्चा करने से बच रही है। हम चाहते हैं कि सरकार देश को बताए कि इस समस्या से निपटने के लिए उसकी क्या योजना है।"</p>
    <div class='ad-container ad-in-content'>
        <span class='ad-label'>विज्ञापन</span>
        <span class='ad-placeholder-text'>मध्यम आयत विज्ञापन (300x250)</span>
    </div>
    <h2>सरकार का पक्ष और बचाव</h2>
    <p>वहीं, सरकार की ओर से संसदीय कार्य मंत्री ने विपक्ष के आरोपों का खंडन किया। उन्होंने कहा कि सरकार हर मुद्दे पर चर्चा के लिए तैयार है, लेकिन विपक्ष सदन की कार्यवाही में बाधा डालकर लोकतंत्र का अपमान कर रहा है। उन्होंने वैश्विक कारणों को महंगाई का जिम्मेदार ठहराते हुए कहा, "पूरी दुनिया इस समय आर्थिक चुनौतियों का सामना कर रही है। हमारी सरकार ने फिर भी स्थिति को नियंत्रण में रखा है और गरीबों को राहत देने के लिए कई कदम उठाए हैं।"</p>
    <blockquote>
        "लोकतंत्र में बहस और चर्चा आवश्यक है, लेकिन सदन की कार्यवाही को बाधित करना किसी भी तरह से उचित नहीं है। हम नियमों के तहत हर विषय पर बात करने को तैयार हैं।"
        <cite>- संसदीय कार्य मंत्री</cite>
    </blockquote>
    <div class='ad-container ad-in-content'>
        <span class='ad-label'>विज्ञापन</span>
        <span class='ad-placeholder-text'>मध्यम आयत विज्ञापन (300x250)</span>
    </div>
    <p>विश्लेषकों का मानना है कि यह सत्र काफी हंगामेदार रहने की संभावना है। सरकार जहां अपने विधायी कार्यों को पूरा करने पर जोर देगी, वहीं विपक्ष आगामी चुनावों को देखते हुए जनता से जुड़े मुद्दों को जोर-शोर से उठाकर सरकार पर दबाव बनाने की पूरी कोशिश करेगा। इस सत्र में कई महत्वपूर्ण विधेयक भी पेश किए जाने हैं, जिन पर सबकी नजरें टिकी रहेंगी।</p>
`;
const relatedArticles = [
  { text: 'विपक्ष की एकजुटता: क्या 2026 के चुनावों पर पड़ेगा असर?', url: '#' },
  { text: 'महंगाई पर सरकार का नया प्लान, जल्द मिल सकती है राहत', url: '#' },
  { text: 'सत्र में पेश होंगे ये 5 महत्वपूर्ण विधेयक, जानें आपके लिए क्या है खास', url: '#' },
];
const articleTags = ['मानसून सत्र', 'भारतीय संसद', 'महंगाई', 'बेरोजगारी', 'विपक्ष', 'राजनीति समाचार'];

export const metadata: Metadata = generateMetadata({
  title: 'लेख',
  description: 'न्यूज़ सर्कल इंडिया पर विस्तृत लेख और विश्लेषण। ताजा खबरों का गहन विश्लेषण।',
  keywords: 'लेख, विश्लेषण, विस्तृत रिपोर्ट, न्यूज़',
  url: '/article',
  type: 'website',
  image: '/og-article.jpg',
});

export default function Article() {
  return (
    <>
      <PerformanceMonitor pageName="article" />
      <Header />
      <div className="container">
        {/* =========== Header/ATF Ad Slot =========== */}
        <div className="ad-container ad-leaderboard-atf">
          <span className="ad-label">विज्ञापन</span>
          <span className="ad-placeholder-text">लीडरबोर्ड विज्ञापन (728x90)</span>
        </div>
      </div>
      <main id="main-content" className="container">
        <div className="article-layout">
          <div className="article-main-container">
            <article className="article-main">
              <header>
                <div className="breadcrumbs">
                  <Link href="/">होम</Link>
                  <span>&gt;</span>
                  <Link href={sectionLink}>{sectionText}</Link>
                  <span>&gt;</span>
                  <span aria-current="page">{articleHeadline.length > 20 ? articleHeadline.slice(0, 20) + '...' : articleHeadline}</span>
                </div>
                <div className="article-header">
                  <h1>{articleHeadline}</h1>
                </div>
                <div className="article-meta">
                  <div className="author-info">
                    <OptimizedImage 
                    src="https://placehold.co/80x80/e0e0e0/333333?text=लेखक" 
                    alt="लेखक की तस्वीर"
                    width={800}
                    height={500}
                  />
                    <div>
                      <span className="author-name">{authorName}</span>
                      <div className="publish-date">प्रकाशित: {publishDate}</div>
                    </div>
                  </div>
                  <div className="share-buttons">
                    <span>शेयर करें:</span>
                    <a href="#" className="share-btn" aria-label="फेसबुक पर साझा करें">
                      {/* Facebook SVG */}
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg>
                    </a>
                    <a href="#" className="share-btn" aria-label="ट्विटर पर साझा करें">
                      {/* Twitter SVG */}
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06 1.89 1.21 4.12 1.92 6.56 1.92 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
                    </a>
                    <div style={{ position: 'relative' }}>
                      <button className="share-btn" aria-label="लिंक कॉपी करें" onClick={() => {navigator.clipboard.writeText(window.location.href)}}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="article-featured-image">
                <OptimizedImage 
                  src={featuredImageUrl} 
                  alt={featuredImageAlt}
                  width={800}
                  height={500}
                  priority={true}
                />
              </div>
              <div className="article-body" dangerouslySetInnerHTML={{ __html: articleBody }} />
              <div className="article-tags">
                <span>टैग:</span>
                {articleTags.map(tag => (
                  <Link key={tag} href={`${sectionLink}?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
                ))}
              </div>
              <section className="related-articles">
                <h2>संबंधित समाचार</h2>
                <ul className="related-articles-list">
                  {relatedArticles.map((related, idx) => (
                    <li key={idx}><a href={related.url}>{related.text}</a></li>
                  ))}
                </ul>
              </section>
              {/* =========== End of Article Ad Slot =========== */}
              <div className="ad-container ad-in-content">
                <span className="ad-label">विज्ञापन</span>
                <span className="ad-placeholder-text">लेख के अंत का विज्ञापन (300x250)</span>
              </div>
            </article>
          </div>
          <aside className="article-sidebar">
            <div className="ad-sidebar-sticky-container">
              <div className="sidebar-widget" style={{ padding: 0, backgroundColor: 'transparent', boxShadow: 'none' }}>
                <div className="ad-container ad-sidebar-sticky">
                  <span className="ad-label">विज्ञापन</span>
                  <span className="ad-placeholder-text">स्टिकि विज्ञापन (300x600)</span>
                </div>
              </div>
            </div>
            <div className="sidebar-widget">
              <h3 className="widget-title">नवीनतम समाचार</h3>
              <ul className="widget-list">
                <li><a href="#">शेयर बाजार नए शिखर पर, निवेशकों में उत्साह का माहौल</a></li>
                <li><a href="#">जलवायु शिखर सम्मेलन में ऐतिहासिक समझौते पर बनी सहमति</a></li>
                <li><a href="#">क्रिकेट: भारत ने फाइनल में रोमांचक जीत दर्ज की</a></li>
                <li><a href="#">नई फिल्म का ट्रेलर रिलीज, सोशल मीडिया पर धूम</a></li>
                <li><a href="#">आरबीआई ने रेपो रेट में कोई बदलाव नहीं किया, ईएमआई स्थिर।</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

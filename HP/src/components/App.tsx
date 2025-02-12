import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import "../styles/glo.css";
import Member from "./Member";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function QuickHomepage()  {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state:{ isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Router>
    
    <div>
    
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1><span className="gothic">Quick Inc.</span></h1>
          <nav className="desktop-nav">
            <ul>
            
              <li><Link to="/">ホーム</Link></li>
              <li><a href="#about"><span className="gothic">Quick</span>について</a></li>
              <li><a href="#services">サービス</a></li>
              <li><a href="#news">ニュース</a></li>
              <li><Link to="/members">メンバー</Link></li>
              <li><a href="#contact">問い合わせ</a></li>
            </ul>
          </nav>
          <nav className="mobile-nav">
              <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
                <ul>
                  <li><Link to="/" onClick={closeMenu}><p className="sidecolor">ホーム</p></Link></li>
                  <li><a href="#about" onClick={closeMenu}><p className="sidecolor"><span className="gothic">Quick</span>について</p></a></li>
                  <li><a href="#services" onClick={closeMenu}><p className="sidecolor">サービス</p></a></li>
                  <li><a href="#news" onClick={closeMenu}><p className="sidecolor">ニュース</p></a></li>
                  <li><Link to="/members" onClick={closeMenu}><p className="sidecolor">メンバー</p></Link></li>
                  <li><a href="#contact" onClick={closeMenu}><p className="sidecolor">問い合わせ</p></a></li>
                </ul>
              </Menu>
          </nav>
          
          
        </div>
        
      </header>
      <Routes>
      <Route path="/" element={
        <>
      
      <video autoPlay loop muted className="hero-video">
          <source src="/Video3.mp4" type="video/mp4" />
      </video>

      <img src="head.png" alt="tsutsumi.jpg" className="hero-photo" />

      

      {/* Hero Section */}
      
      <section id="home" className="hero">
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4}}
          >
            <h1 className="hero-title">テクノロジーで医療をつくる。</h1>
            <p className="hero-subtitle">株式会社<span className="gothic">Quick</span>は、医学生発のスタートアップです。</p>
            <p className="hero-subtitle">高い開発力によって、DXから医療を刷新していきます。</p>
            <a href="#about"><Button className="button mt-6">- Read more -</Button></a>
          </motion.div>
        </div>
      </section>
    
      {/* About Us Section */}
      <section id="about" className="section video-background">
        
        <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>About Us</motion.h2>
        <p className="section-content"><br></br><br></br><br></br>株式会社クイックは、「テクノロジーで医療をつくる」をビジョンに、医療DXを推進するスタートアップです。<br></br><br></br>AI・データ活用・自動化技術を駆使し、医療現場の課題にアプローチし、誰もがより良い医療を享受できる未来をつくります。</p><br></br><br></br><br></br><br></br><br></br><br></br>
      </section>
      <section className="section video-background">
        <video autoPlay loop muted className="background-video">
          <source src="/Video7.mp4" type="video/mp4" />
        </video>
        <img src="/head3.png" alt="head2.png" className="background-photo" />

      {/* Service Section */}
      <section id="services" className="section video-background">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Service</motion.h2>
        <div className="service-grid">
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3 className="service-title">救急搬送DX</h3>
            <p className="service-description">AI・ITプロダクトにより、救急医療の現場を支援します</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3 className="service-title">病院向けDX</h3>
            <p className="service-description">医療機関内での業務をITで効率化します。また、そのためのコンサルティングも行っております。</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3 className="service-title">受託開発</h3>
            <p className="service-description">Webサイト制作からプロダクトのデモ開発など、技術/分野問わず開発を請け負います。</p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section video-background">
        <div className="section-content">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>News</motion.h2>
          <div className="news-grid">
            <motion.div className="news-card" whileHover={{ scale: 1.02 }}>
              <h3 className="news-title">2025年1月　Why me?ナイスアイデア賞受賞 </h3>
              <p className="news-description">KBCの主催するWhy me?というビジネスコンテストに参加し、ナイスアイデア賞をいただきました。</p>
              <img src="/image2.jpg" alt="新サービス発表" className="news-image" />
            </motion.div>
            <motion.div className="news-card" whileHover={{ scale: 1.02 }}>
              <h3 className="news-title">2025年1月　イチBizアワードにてトリプル受賞</h3>
              <p className="news-description">地理情報空間を活用したアイデアを競うイチBizアワードで、アイデア部門優秀賞、オーディエンス賞、ドクターヘリ賞の3つをいただきました。</p>
              <img src="/image4.jpg" alt="新サービス発表" className="news-image" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="section">
                <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>問い合わせ</motion.h2>
                <div className="contact-info">
                  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSepninQI5CACHlFn-IpV8_-evc0b_IFxA6GvAopvUuJiRc2OQ/viewform" target="_blank" rel="noopener noreferrer">問い合わせはこちら..</a></p>
                </div>
      </section>
      </section>
      <footer>
        <p>&copy; 2025 株式会社Quick. All Rights Reserved.</p>
      </footer>
      </>
      } />
      <Route path="/members" element={<Member />} />
      </Routes>
      
      
      
      {/* Footer */}
      
      </div>
      
    
    </Router>
    
  );
}
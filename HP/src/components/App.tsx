import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import "../styles/glo.css";

export default function QuickHomepage()  {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>株式会社Quick</h1>
          <nav>
            <ul>
              <li><a href="#home">ホーム</a></li>
              <li><a href="#about">Quickについて</a></li>
              <li><a href="#services">サービス</a></li>
              <li><a href="#news">ニュース</a></li>
              <li><a href="#contact">問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <video autoPlay loop muted className="hero-video">
          <source src="/Video3.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4}}
          >
            <h1 className="hero-title">テクノロジーで、医療の壁をぶち壊す。</h1>
            <p className="hero-subtitle">株式会社Quickは、医学生発のスタートアップです。</p>
            <p className="hero-subtitle">高い開発力によって、DXから医療を刷新していきます。</p>
            <Button className="button mt-6">- Read more -</Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>About Us</motion.h2>
        <p className="section-content">株式会社Quickは、革新的なテクノロジーとデータ分析を活用し、社会に貢献する企業です。</p>
      </section>

      {/* Service Section */}
      <section id="services" className="section">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>サービス紹介</motion.h2>
        <div className="service-grid">
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3 className="service-title">救急医療マッチング</h3>
            <p className="service-description">迅速な病院手配を可能にするシステム</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3 className="service-title">データ分析支援</h3>
            <p className="service-description">企業向けのデータ解析・コンサルティング</p>
          </motion.div>
          <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
            <h3 className="service-title">スマートシティ構築</h3>
            <p className="service-description">IoTとAIを活用した都市開発</p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section bg-gray-100">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>ニュース紹介</motion.h2>
        <div className="news-grid">
          <motion.div className="news-card" whileHover={{ scale: 1.02 }}>
            <h3 className="news-title">2025年 新サービス発表</h3>
            <p className="news-description">最新の救急医療マッチングサービスを公開しました。</p>
          </motion.div>
          <motion.div className="news-card" whileHover={{ scale: 1.02 }}>
            <h3 className="news-title">2024年 Quick Award 受賞</h3>
            <p className="news-description">テクノロジー分野での優れた取り組みが評価されました。</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 株式会社Quick. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
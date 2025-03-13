import { motion } from "framer-motion";
import "../styles/glo.css";

export default function NewsList() {
  return (
    <section id="news-list">
      <div className="header-image-container">
                
                <div className="header-overlay">
                
                <motion.h2 className="section-title"><br></br><br></br>News</motion.h2>
                </div>
      </div>
      <div className="section-content">
                <div className="news-grid">
                <motion.div className="news-card" whileHover={{ scale: 1.02 }}>
                    <h3 className="news-title">2025年2月26日　元アクセンチュア・高島屋の大川秋生氏がAdvisor就任</h3>
                    <p className="news-description">PRTIMESのリンクは<a href="https://prtimes.jp/main/html/rd/p/000000001.000156902.html" target="_blank" rel="noopener noreferrer">こちら</a>。<br></br>この度、元アクセンチュア・高島屋執行役員の大川秋生氏が、QuickのAdvisorに就任しました。<br></br>大川氏の豊富な経営・戦略経験を活かし、データ活用による事業成長や官民連携の強化を推進していきます。<br></br>引き続き、Quickは「テクノロジーで医療をつくる」ことを目指し、挑戦を続けてまいります。</p>
                  </motion.div>

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
  );
}
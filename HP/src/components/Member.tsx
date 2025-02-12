import { motion } from "framer-motion";
import "../styles/glo.css";

export default function Member() {
  return (
    <section id="members">
      <div className="header-image-container">
          <img src="/menber.jpg" alt="Header Image" className="header-image" />
          <div className="header-overlay">
          
          <motion.h2 className="section-title"><br></br><br></br>Members</motion.h2>
          </div>
      </div>
      
      <div className="section">
      <div className="members-grid">
        <div className="member-card">
          <img src="/tomioka.png" alt="山田 太郎" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">武田 淳宏</h3>
            <p className="member-role">CEO</p>
            <p className="member-description">株式会社Quickの創設者であり、CEOを務める。東京大学卒業後、医療分野での経験を活かし、Quickを設立。</p>
          </div>
        </div>
      

        <div className="member-card">
          <img src="/tsutsumi.png" alt="佐藤 花子" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">堤 敬信</h3>
            <p className="member-role">CTO</p>
            <p className="member-description">技術開発を担当し、革新的なソリューションを提供。京都大学でコンピュータサイエンスを専攻。</p>
          </div>
        </div>
        <div className="member-card">
          <img src="/tomioka.png" alt="鈴木 一郎" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">丸澤 賢司</h3>
            <p className="member-role">CIO</p>
            <p className="member-description">オペレーション全般を管理し、効率的な運営を実現。早稲田大学で経営学を学び、複数のスタートアップでの経験を持つ。</p>
          </div>
        </div>
      </div>
      </div>
      <footer>
        <p>&copy; 2025 株式会社Quick. All Rights Reserved.</p>
      </footer>
    </section>
  );
}
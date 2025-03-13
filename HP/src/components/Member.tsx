import { motion } from "framer-motion";
import "../styles/glo.css";

export default function Member() {
  return (
    <section id="members">
      <div className="header-image-container">
          <img src="/head2.png" alt="Header Image" className="header-image" />
          <div className="header-overlay">
          
          <motion.h2 className="section-title"><br></br><br></br>Members</motion.h2>
          </div>
      </div>
      
      <div className="section">
      <div className="members-grid">
        <div className="member-card">
          <img src="/tomoka.png" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">武田 淳宏</h3>
            <p className="member-role">CEO</p>
            <p className="member-description">株式会社Quickの創設者であり、CEOを務める。筑波大学医学群医学科在学中であり、医療分野での経験を活かし、Quickを設立。</p>
          </div>
        </div>
      

        <div className="member-card">
          <img src="/tsutsumi.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">堤 敬信</h3>
            <p className="member-role">CTO</p>
            <p className="member-description">＜経歴＞<br></br>筑波大学理工学群社会工学類卒業<br></br>筑波大学大学院システム情報工学研究群修士課程<br></br><br></br>＜座右の銘＞<br></br>旅は道連れ世は情け</p>
          </div>
        </div>
        <div className="member-card">
          <img src="/marusawa.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">丸澤 賢司</h3>
            <p className="member-role">CIO</p>
            <p className="member-description">＜経歴＞<br></br>筑波大学理工学群物理学類卒業<br></br>筑波大学医学群医学類5年<br></br><br></br>＜座右の銘＞<br></br>Think different</p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="members-grid">
        <div className="member-card">
          <img src="/ikeda.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">池田有之介</h3>
            <p className="member-role">技術顧問</p>
            <p className="member-description">＜経歴＞<br></br>広島大学大学院統合生命科学研究科修士課程 / University of Minnesota  Computer Science<br></br><br></br>＜座右の銘＞<br></br>揖保乃糸は無限に食える /<br></br>想像できることは全て可能</p>
          </div>
        </div>
      

        <div className="member-card">
          {/*<img src="/tsuti.png" alt="準備中" className="member-photo" />*/}
          <div className="member-info">
            <h3 className="member-name"></h3>
            <p className="member-role"></p>
            <p className="member-description"></p>
          </div>
        </div>
        <div className="member-card">
          {/*<img src="/tsuti.png" alt="準備中" className="member-photo" />*/}
          <div className="member-info">
            <h3 className="member-name"></h3>
            <p className="member-role"></p>
            <p className="member-description"></p>
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
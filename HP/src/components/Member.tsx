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
          <img src="/takeda.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">武田 淳宏</h3>
            <p className="member-role">CEO</p>
            <p className="member-description">＜経歴＞<br></br>筑波大学医学群医学類５年<br></br>蹴球部<br></br>病院実習を行う中で、救急医療の課題を感じ、在学中に起業。救急医療のシステム全体の変革を目指し、日々奮闘中</p>
          </div>
        </div>
      

        <div className="member-card">
          <img src="/tsutsumi.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">堤 敬信</h3>
            <p className="member-role">CTO</p>
            <p className="member-description">＜経歴＞<br></br>筑波大学理工学群社会工学類卒業<br></br>筑波大学大学院システム情報工学研究群修士課程<br></br>マルコフモデル及びグラフ理論を応用したアルゴリズムの研究開発及びそれを用いた重症度判定AIの開発に従事。<br></br></p>
          </div>
        </div>
        <div className="member-card">
          <img src="/marusawa.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">丸澤 賢司</h3>
            <p className="member-role">COO</p>
            <p className="member-description">＜経歴＞<br></br>東京学芸大学附属高校卒業<br></br>筑波大学理工学群物理学類首席卒業<br></br>筑波大学医学群医学類5年<br></br>重症度判定用AI研究開発を担当。<br></br></p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="members-grid">
        <div className="member-card">
          <img src="/ikeda.jpg" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">池田有之介</h3>
            <p className="member-role">エンジニア</p>
            <p className="member-description">＜経歴＞<br></br>広島大学大学院統合生命科学研究科修士課程 / University of Minnesota  Computer Science<br></br>官民含めた様々な案件の受託開発経験あり。<br></br></p>
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

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
          <img src="/tsutsumi.png" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">堤 敬信</h3>
            <p className="member-role">CTO</p>
            <p className="member-description">筑波大学大学院修士課程に在学中。</p>
          </div>
        </div>
        <div className="member-card">
          <img src="/tomoka.png" alt="準備中" className="member-photo" />
          <div className="member-info">
            <h3 className="member-name">丸澤 賢司</h3>
            <p className="member-role">CIO</p>
            <p className="member-description">筑波大学大学院修士課程に在学中。</p>
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
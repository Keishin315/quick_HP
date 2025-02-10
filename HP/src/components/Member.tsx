import { motion } from "framer-motion";
import "../styles/glo.css";

export default function Member() {
  return (
    <section id="members" className="section background-video">
      <video autoPlay loop muted className="background-video2">
          <source src="/Video.mp4" type="video/mp4" />
      </video>
      <motion.h2 className="section-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Members</motion.h2>
      <div className="members-grid">
        <motion.div className="member-card" whileHover={{ scale: 1.05 }}>
          <h3 className="member-name">山田 太郎</h3>
          <p className="member-role">CEO</p>
          <p className="member-description">株式会社Quickの創設者であり、CEOを務める。</p>
        </motion.div>
        <motion.div className="member-card" whileHover={{ scale: 1.05 }}>
          <h3 className="member-name">佐藤 花子</h3>
          <p className="member-role">CTO</p>
          <p className="member-description">技術開発を担当し、革新的なソリューションを提供。</p>
        </motion.div>
        <motion.div className="member-card" whileHover={{ scale: 1.05 }}>
          <h3 className="member-name">鈴木 一郎</h3>
          <p className="member-role">COO</p>
          <p className="member-description">オペレーション全般を管理し、効率的な運営を実現。</p>
        </motion.div>
      </div>
    </section>
  );
}
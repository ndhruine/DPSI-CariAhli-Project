import React from 'react';

const DetailKandidat = ({ kandidat, onBack }) => {
  return (
    <div className="detail-kandidat">
      <style>{`
        .detail-kandidat {
          max-width: 800px;
          margin: 0 auto;
        }

        .back-button {
          background-color: #4B0082;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .back-button:hover {
          background-color: #3A006B;
        }

        .detail-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          border: 2px solid #e0e0e0;
        }

        .detail-header {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 30px;
        }

        .detail-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          border: 4px solid #4B0082;
        }

        .detail-info h1 {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }

        .detail-position {
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }

        .detail-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 25px;
        }

        .skill-tag {
          background-color: #E6D7FF;
          color: #4B0082;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .detail-section {
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
        }

        .detail-description {
          font-size: 16px;
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .contact-info {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;
        }

        .contact-icon {
          font-size: 16px;
        }

        .detail-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .action-btn {
          padding: 15px 30px;
          border-radius: 25px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
          min-width: 150px;
        }

        .lihat-portofolio-btn {
          background-color: #666;
          color: white;
        }

        .lihat-portofolio-btn:hover {
          background-color: #555;
        }

        .hubungi-kandidat-btn {
          background-color: #666;
          color: white;
        }

        .hubungi-kandidat-btn:hover {
          background-color: #555;
        }

        .experience-item {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 15px;
          border-left: 4px solid #4B0082;
        }

        .experience-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .experience-company {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
        }

        .experience-period {
          font-size: 12px;
          color: #999;
        }
      `}</style>
      
      <button className="back-button" onClick={onBack}>
        <span>←</span>
        <span>Kembali ke Dashboard</span>
      </button>

      <div className="detail-card">
        <div className="detail-header">
          <div className="detail-avatar">{kandidat.avatar}</div>
          <div className="detail-info">
            <h1>{kandidat.name}</h1>
            <div className="detail-position">{kandidat.position}</div>
            <div className="detail-skills">
              {kandidat.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-title">Tentang Kandidat</h2>
          <div className="detail-description">
            {kandidat.description || 'Web developer with experience in building responsive websites and modern web applications. Skilled in user interface development and has a portfolio of real projects in frontend development. Passionate about creating efficient and user-friendly web solutions.'}
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-title">Informasi Kontak</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>{kandidat.name.toLowerCase().replace(' ', '.')}@email.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+62 812-3456-7890</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <span>linkedin.com/in/{kandidat.name.toLowerCase().replace(' ', '-')}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🏠</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-title">Pengalaman</h2>
          <div className="experience-item">
            <div className="experience-title">Frontend Developer</div>
            <div className="experience-company">PT. Tech Solutions Indonesia</div>
            <div className="experience-period">2022 - Sekarang</div>
          </div>
          <div className="experience-item">
            <div className="experience-title">Junior Web Developer</div>
            <div className="experience-company">CV. Digital Creative</div>
            <div className="experience-period">2021 - 2022</div>
          </div>
        </div>

        <div className="detail-actions">
          <button className="action-btn lihat-portofolio-btn">
            Lihat Portofolio
          </button>
          <button className="action-btn hubungi-kandidat-btn">
            Hubungi Kandidat
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailKandidat;

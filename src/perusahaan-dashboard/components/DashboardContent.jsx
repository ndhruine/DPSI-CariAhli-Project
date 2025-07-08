import React from 'react';

const DashboardContent = ({ onKandidatClick }) => {
  const kandidatList = [
    {
      id: 1,
      name: 'Chika Nurdini',
      skills: ['Web Development', 'Java Script', 'React'],
      avatar: '👤'
    },
    {
      id: 2,
      name: 'Fitra Anggoro',
      skills: ['Data Analysis', 'React', 'HTML'],
      avatar: '👤'
    }
  ];

  const detailKandidat = {
    id: 1,
    name: 'Chika Nurdini',
    position: 'Web Development',
    skills: ['Java Script', 'React'],
    description: 'Web developer with experience in building responsive websites and modern web applications. Skilled in user interface development and has a portfolio of real projects in frontend development.',
    avatar: '👤'
  };

  return (
    <div className="dashboard-content">
      <style>{`
        .dashboard-content {
          padding: 20px;
          max-width: 1400px;
        }

        .welcome-title {
          font-size: 28px;
          font-weight: bold;
          color: #4B0082;
          margin-bottom: 30px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .left-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .kandidat-cards {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .kandidat-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid #e0e0e0;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .kandidat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .kandidat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .kandidat-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          flex-shrink: 0;
        }

        .kandidat-name {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .kandidat-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 8px;
        }

        .skill-item {
          font-size: 11px;
          color: #666;
          background-color: #f5f5f5;
          padding: 2px 6px;
          border-radius: 8px;
        }

        .lihat-portofolio-btn {
          background-color: #C8B5A0;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 15px;
          cursor: pointer;
          font-size: 12px;
          transition: background-color 0.3s;
        }

        .lihat-portofolio-btn:hover {
          background-color: #B39A85;
        }

        .stats-container {
          background: linear-gradient(135deg, #E6D7FF 0%, #D4C5F9 100%);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          position: relative;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stat-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .stat-title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .stat-number {
          font-size: 48px;
          font-weight: bold;
          color: #4B0082;
          margin-bottom: 10px;
        }

        .stat-subtitle {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
        }

        .calendar-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: brightness(0);
          margin: 0 auto;
          display: block;
        }

        .detail-kandidat-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid #e0e0e0;
          height: auto;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .detail-kandidat-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .detail-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }

        .detail-info h3 {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .detail-position {
          font-size: 16px;
          color: #666;
          margin-bottom: 15px;
        }

        .detail-skills {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .skill-tag {
          background-color: #E6D7FF;
          color: #4B0082;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 500;
        }

        .detail-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .detail-actions {
          display: flex;
          gap: 15px;
        }

        .detail-btn {
          padding: 12px 24px;
          border-radius: 25px;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .lihat-portofolio-detail {
          background-color: #666;
          color: white;
        }

        .lihat-portofolio-detail:hover {
          background-color: #555;
        }

        .hubungi-kandidat {
          background-color: #666;
          color: white;
        }

        .hubungi-kandidat:hover {
          background-color: #555;
        }
      `}</style>
      
      <h1 className="welcome-title">Selamat Datang di Cari Ahli</h1>

      <div className="main-grid">
        <div className="left-section">
          <div className="kandidat-cards">
            {kandidatList.map((kandidat) => (
              <div 
                key={kandidat.id} 
                className="kandidat-card"
                onClick={() => onKandidatClick(kandidat)}
              >
                <div className="kandidat-avatar">{kandidat.avatar}</div>
                <div className="kandidat-content">
                  <div className="kandidat-name">{kandidat.name}</div>
                  <div className="kandidat-skills">
                    {kandidat.skills.map((skill, index) => (
                      <div key={index} className="skill-item">{skill}</div>
                    ))}
                  </div>
                  <button className="lihat-portofolio-btn">Lihat Portofolio</button>
                </div>
              </div>
            ))}
          </div>

          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Total</div>
                <div className="stat-title">Kandidat</div>
                <div className="stat-number">30</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-subtitle">Jadwal</div>
                <div className="stat-subtitle">Wawancara</div>
                <img src="/images/icon/calender.png" alt="Calendar" className="calendar-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="detail-kandidat-card">
          <div className="detail-kandidat-header">
            <div className="detail-avatar">{detailKandidat.avatar}</div>
            <div className="detail-info">
              <h3>{detailKandidat.name}</h3>
              <div className="detail-position">{detailKandidat.position}</div>
              <div className="detail-skills">
                {detailKandidat.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="detail-description">
            {detailKandidat.description}
          </div>
          
          <div className="detail-actions">
            <button className="detail-btn lihat-portofolio-detail">
              Lihat Portofolio
            </button>
            <button className="detail-btn hubungi-kandidat">
              Hubungi Kandidat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

import React from 'react';

const KandidatCard = ({ onKandidatClick }) => {
  const kandidatList = [
    {
      id: 1,
      name: 'Chika Nurdini',
      position: 'Web Development',
      skills: ['Java Script', 'React', 'HTML', 'CSS'],
      avatar: '👤',
      description: 'Web developer with experience in building responsive websites and modern web applications.'
    },
    {
      id: 2,
      name: 'Fitra Anggoro',
      position: 'Data Analysis',
      skills: ['Python', 'SQL', 'Machine Learning', 'React'],
      avatar: '👤',
      description: 'Data analyst skilled in extracting insights from complex datasets and building predictive models.'
    },
    {
      id: 3,
      name: 'Ahmad Rifai',
      position: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Firebase', 'API'],
      avatar: '👤',
      description: 'Mobile developer experienced in cross-platform app development with Flutter framework.'
    },
    {
      id: 4,
      name: 'Sari Indah',
      position: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      avatar: '👤',
      description: 'UI/UX designer passionate about creating intuitive and user-centered digital experiences.'
    }
  ];

  return (
    <div className="kandidat-grid">
      <style>{`
        .kandidat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px 0;
        }

        .kandidat-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid #e0e0e0;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .kandidat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .kandidat-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .kandidat-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        }

        .kandidat-info h3 {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        .kandidat-position {
          font-size: 14px;
          color: #666;
        }

        .kandidat-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .skill-tag {
          background-color: #E6D7FF;
          color: #4B0082;
          padding: 4px 8px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 500;
        }

        .kandidat-description {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .kandidat-actions {
          display: flex;
          gap: 10px;
        }

        .action-btn {
          padding: 8px 16px;
          border-radius: 20px;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .lihat-portofolio-btn {
          background-color: #C8B5A0;
          color: white;
        }

        .lihat-portofolio-btn:hover {
          background-color: #B39A85;
        }

        .hubungi-btn {
          background-color: #666;
          color: white;
        }

        .hubungi-btn:hover {
          background-color: #555;
        }
      `}</style>
      
      {kandidatList.map((kandidat) => (
        <div 
          key={kandidat.id} 
          className="kandidat-card"
          onClick={() => onKandidatClick(kandidat)}
        >
          <div className="kandidat-header">
            <div className="kandidat-avatar">{kandidat.avatar}</div>
            <div className="kandidat-info">
              <h3>{kandidat.name}</h3>
              <div className="kandidat-position">{kandidat.position}</div>
            </div>
          </div>
          
          <div className="kandidat-skills">
            {kandidat.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
          
          <div className="kandidat-description">
            {kandidat.description}
          </div>
          
          <div className="kandidat-actions">
            <button className="action-btn lihat-portofolio-btn">
              Lihat Portofolio
            </button>
            <button className="action-btn hubungi-btn">
              Hubungi
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KandidatCard;

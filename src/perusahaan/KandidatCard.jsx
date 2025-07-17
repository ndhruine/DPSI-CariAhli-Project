import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';

export default function DaftarKandidat() {
  const [kandidatData, setKandidatData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const kandidatSnapshot = await getDocs(collection(db, 'kandidatTerpilih'));
        const usersSnapshot = await getDocs(collection(db, 'users'));

        const users = usersSnapshot.docs.map((doc) => doc.data());

        const kandidatList = await Promise.all(
          kandidatSnapshot.docs.map(async (doc) => {
            const kandidat = doc.data();
            const nim = kandidat.nim;

            // Sama seperti fungsi fetchKontak yang kamu pakai
            const userData = users.find((user) => user.email?.substring(0, 10) === nim);

            return {
              ...kandidat,
              id: doc.id,
              email: userData?.email || '-',
              noHp: userData?.hp || '-', // gunakan 'hp' sesuai struktur Firestore
            };
          })
        );

        setKandidatData(kandidatList);
      } catch (error) {
        console.error('Gagal mengambil data kandidat:', error);
      }
    };

    fetchData();
  }, []);

  const handleHubungi = (email, noHp) => {
    if (noHp && noHp !== '-') {
      window.open(`https://wa.me/${noHp}`, '_blank');
    } else if (email && email !== '-') {
      window.location.href = `mailto:${email}`;
    } else {
      alert('Kontak tidak tersedia');
    }
  };

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          display: flex;
          flex-wrap: wrap;
          padding: 20px;
          gap: 20px;
        }

        .kandidat-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid #e0e0e0;
          width: 300px;
        }

        .kandidat-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }

        .kandidat-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .skill-tag {
          background-color: #E6D7FF;
          color: #4B0082;
          padding: 4px 8px;
          border-radius: 10px;
          font-size: 12px;
          margin-right: 5px;
          display: inline-block;
          margin-top: 5px;
        }

        .action-btn {
          margin-top: 15px;
          padding: 8px 12px;
          background-color: #C8B5A0;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
        }

        .action-btn:hover {
          background-color: #b39a85;
        }

        .contact-info {
          font-size: 14px;
          margin-top: 8px;
        }
      `}</style>

      {kandidatData.map((k) => (
        <div key={k.id} className="kandidat-card">
          <div className="kandidat-header">
            <div className="kandidat-avatar">👤</div>
            <div>
              <h3>{k.nama}</h3>
              <p>Semester {k.semester}</p>
            </div>
          </div>

          <div className="contact-info">
            <p><strong>NIM:</strong> {k.nim}</p>
            <p><strong>Email:</strong> {k.email}</p>
            <p><strong>No. HP:</strong> {k.noHp}</p>
          </div>

          <div>
            {k.skill?.map((s, idx) => (
              <span key={idx} className="skill-tag">{s}</span>
            ))}
          </div>

          <button className="action-btn" onClick={() => handleHubungi(k.email, k.noHp)}>
            Hubungi
          </button>
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';

export default function PerusahaanDashboard() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);
  const [kontak, setKontak] = useState({ email: '', noHp: '', nim: '' });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'portofolio'));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMahasiswa(data);
    };

    fetchData();
  }, []);

  const fetchKontak = async (nim) => {
    try {
      const userSnapshot = await getDocs(collection(db, 'users'));
      const userData = userSnapshot.docs
        .map((doc) => doc.data())
        .find((user) => user.email?.substring(0, 10) === nim);

      if (userData) {
        setKontak({
          email: userData.email || '',
          noHp: userData.hp || '',
          nim,
        });
      } else {
        setKontak({ email: '-', noHp: '-', nim });
      }
    } catch (error) {
      console.error('Gagal mengambil data kontak:', error);
    }
  };

  const handlePilihMahasiswa = async (mhs) => {
    setSelectedMahasiswa(mhs);
    await fetchKontak(mhs.nim);
  };

  const handleTambahKandidat = async () => {
    try {
      await addDoc(collection(db, 'kandidatTerpilih'), { ...selectedMahasiswa, ...kontak });
      alert('Kandidat berhasil ditambahkan!');
    } catch (error) {
      console.error('Gagal menambahkan kandidat:', error);
      alert('Gagal menambahkan kandidat.');
    }
  };

  const handleHubungi = () => {
    const { email, noHp } = kontak;
    if (noHp) {
      window.open(`https://wa.me/${noHp}`, '_blank');
    } else if (email) {
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
          padding: 20px;
          gap: 30px;
        }

        .kandidat-list {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .detail-panel {
          flex: 1;
          background: #f9f9f9;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #999;
        }

        .close-btn:hover {
          color: #333;
        }

        .kandidat-card {
          background: white;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 2px solid #e0e0e0;
          transition: transform 0.3s;
          height: 200px;
        }

        .kandidat-card:hover {
          transform: translateY(-5px);
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

        .detail-panel h2 {
          margin-top: 0;
        }

        .proyek-box {
          margin-top: 10px;
          padding: 10px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .button-group {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
      `}</style>

      <div className="kandidat-list">
        {mahasiswa.map((mhs) => (
          <div key={mhs.id} className="kandidat-card">
            <div className="kandidat-header">
              <div className="kandidat-avatar">👤</div>
              <div>
                <h3>{mhs.nama}</h3>
                <p>Semester {mhs.semester}</p>
              </div>
            </div>
            <div>
              {mhs.skill?.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            <button className="action-btn" onClick={() => handlePilihMahasiswa(mhs)}>
              Lihat Portofolio
            </button>
          </div>
        ))}
      </div>

      {selectedMahasiswa && (
        <div className="detail-panel">
          <button className="close-btn" onClick={() => setSelectedMahasiswa(null)}>×</button>

          <div className="kandidat-header">
            <div className="kandidat-avatar">👤</div>
            <div>
              <h2>{selectedMahasiswa.nama}</h2>
              <p>Semester {selectedMahasiswa.semester}</p>
              <p><strong>NIM:</strong> {selectedMahasiswa.nim}</p>
              <p><strong>Email:</strong> {kontak.email}</p>
              <p><strong>No. HP:</strong> {kontak.noHp}</p>
            </div>
          </div>

          <div>
            {selectedMahasiswa.skill?.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>

          <h3 style={{ marginTop: '20px' }}>Proyek</h3>
          {selectedMahasiswa.proyek?.length > 0 ? (
            selectedMahasiswa.proyek.map((p, i) => (
              <div key={i} className="proyek-box">
                <strong>{p.judul}</strong> <br />
                <small>{p.kategori} - {p.tahun}</small>
                <p>{p.deskripsi}</p>
              </div>
            ))
          ) : (
            <p>Belum ada proyek.</p>
          )}

          <div className="button-group">
            <button className="action-btn" onClick={handleTambahKandidat}>Tambah Kandidat</button>
            <button className="action-btn" onClick={handleHubungi}>Hubungi</button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';

const WawancaraContent = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('Ava Olivia');
  const [selectedDate, setSelectedDate] = useState('24/04/2024');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedMethod, setSelectedMethod] = useState('');

  const jadwalWawancara = [
    {
      id: 1,
      name: 'Ava Olivia',
      date: '24/04/2024',
      time: '10:00 AM',
      status: 'scheduled'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      date: '25/04/2024',
      time: '14:00 PM',
      status: 'scheduled'
    },
    {
      id: 3,
      name: 'Citra Dewi',
      date: '26/04/2024',
      time: '09:00 AM',
      status: 'scheduled'
    }
  ];

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleSendInvitation = () => {
    alert(`Undangan wawancara telah dikirim ke ${selectedCandidate} via ${selectedMethod}`);
  };

  return (
    <div className="wawancara-content">
      <style>{`
        .wawancara-content {
          padding: 20px;
          max-width: 1400px;
        }

        .welcome-title {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 18px;
          font-style: italic;
          color: #666;
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

        .stats-container {
          background: linear-gradient(135deg, #E6D7FF 0%, #D4C5F9 100%);
          border-radius: 20px;
          padding: 30px;
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
          font-size: 18px;
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
          font-size: 16px;
          font-weight: 600;
          color: #333;
          padding: 15px 25px;
          background-color: white;
          border-radius: 15px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .stat-subtitle:hover {
          background-color: #f5f5f5;
        }

        .schedule-section {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-height: 500px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
          text-align: center;
        }

        .section-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 25px;
          text-align: center;
        }

        .candidate-selector {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 15px;
          padding: 15px 20px;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .candidate-selector:hover {
          border-color: #4B0082;
        }

        .candidate-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .candidate-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
        }

        .candidate-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .arrow-icon {
          font-size: 18px;
          color: #666;
        }

        .datetime-section {
          margin-bottom: 25px;
        }

        .datetime-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
          text-align: center;
        }

        .datetime-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .datetime-input {
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 15px;
          padding: 12px 15px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .datetime-input:hover {
          border-color: #4B0082;
        }

        .method-section {
          margin-bottom: 30px;
        }

        .method-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
          text-align: center;
        }

        .method-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .method-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .method-option:hover {
          background-color: #f5f5f5;
        }

        .method-radio {
          width: 16px;
          height: 16px;
          border: 2px solid #ccc;
          border-radius: 50%;
          position: relative;
          transition: border-color 0.3s;
        }

        .method-radio.selected {
          border-color: #4B0082;
        }

        .method-radio.selected::after {
          content: '';
          width: 8px;
          height: 8px;
          background-color: #4B0082;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .method-label {
          font-size: 14px;
          color: #333;
        }

        .send-invitation-btn {
          background-color: #333;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s;
        }

        .send-invitation-btn:hover {
          background-color: #222;
        }

        .send-invitation-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
      
      <h1 className="welcome-title">Siap Bertemu Kandidat Unggulan?</h1>
      <p className="subtitle">Periksa Jadwal Wawancara Anda!!!</p>

      <div className="main-grid">
        <div className="left-section">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Jadwal</div>
                <div className="stat-title">Wawancara</div>
                <div className="stat-number">6</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-subtitle">Riwayat wawancara</div>
              </div>
            </div>
          </div>
        </div>

        <div className="schedule-section">
          <h2 className="section-title">Jadwal Wawancara</h2>
          <p className="section-subtitle">Pilih Kandidat</p>

          <div className="candidate-selector">
            <div className="candidate-info">
              <div className="candidate-avatar">👤</div>
              <span className="candidate-name">{selectedCandidate}</span>
            </div>
            <span className="arrow-icon">{'>'}</span>
          </div>

          <div className="datetime-section">
            <h3 className="datetime-title">Tanggal, Waktu</h3>
            <div className="datetime-grid">
              <div className="datetime-input">{selectedDate}</div>
              <div className="datetime-input">{selectedTime}</div>
            </div>
          </div>

          <div className="method-section">
            <h3 className="method-title">Via</h3>
            <div className="method-options">
              <div 
                className="method-option"
                onClick={() => handleMethodSelect('Zoom')}
              >
                <div className={`method-radio ${selectedMethod === 'Zoom' ? 'selected' : ''}`}></div>
                <span className="method-label">Zoom</span>
              </div>
              
              <div 
                className="method-option"
                onClick={() => handleMethodSelect('WhatsApp')}
              >
                <div className={`method-radio ${selectedMethod === 'WhatsApp' ? 'selected' : ''}`}></div>
                <span className="method-label">WhatsApp</span>
              </div>
              
              <div 
                className="method-option"
                onClick={() => handleMethodSelect('Offline Interview')}
              >
                <div className={`method-radio ${selectedMethod === 'Offline Interview' ? 'selected' : ''}`}></div>
                <span className="method-label">Offline Interview</span>
              </div>
            </div>
          </div>

          <button 
            className="send-invitation-btn"
            onClick={handleSendInvitation}
            disabled={!selectedMethod}
          >
            Kirim Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default WawancaraContent;

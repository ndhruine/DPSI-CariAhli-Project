import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="homepage-header">
        <h1>Tukar Sampah Jadi Hadiah</h1>
        <p>
          Ubah sampahmu menjadi sesuatu yang bernilai. Dapatkan hadiah menarik
          dengan menukarkan sampahmu sekarang!
        </p>
      </header>

      {/* Bagaimana Cara Kerjanya */}
      <section className="section">
        <h2>Bagaimana Cara Kerjanya?</h2>
        <ol>
          <li>Kumpulkan sampah yang bisa didaur ulang.</li>
          <li>
            Tukarkan sampah ke lokasi mitra kami atau gunakan aplikasi ini.
          </li>
          <li>
            Dapatkan poin dan tukarkan dengan hadiah menarik!
          </li>
        </ol>
      </section>

      {/* Kelebihan Aplikasi */}
      <section className="section">
        <h2>Kelebihan Aplikasi Kami</h2>
        <ul>
          <li>Mudah digunakan</li>
          <li>Mendukung kelestarian lingkungan</li>
          <li>Hadiah menarik setiap saat</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <p>© 2025 Tukar Sampah Jadi Hadiah. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
};

export default Homepage;

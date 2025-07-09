import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExchangePage.css";

const ExchangePage = () => {
  const [userPoints, setUserPoints] = useState(0); // Poin pengguna di ExchangePage
  const [selectedReward, setSelectedReward] = useState(null);
  const rewards = [
    { id: 1, name: "Voucher Belanja", points: 100 },
    { id: 2, name: "Pulsa", points: 200 },
    { id: 3, name: "Merchandise", points: 300 },
  ];

  // Ambil poin pengguna dari backend atau localStorage
  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        // Periksa localStorage untuk poin yang sudah ada
        const storedPoints = window.localStorage.getItem("userPoints");

        if (storedPoints) {
          // Jika ada di localStorage, gunakan poin tersebut
          setUserPoints(Number(storedPoints));
        } else {
          // Jika tidak ada, coba ambil poin dari backend (pastikan ada API untuk mengelola poin)
          const response = await axios.get("http://localhost:5000/userPoints");
          const points = response.data?.points || 0; // Jika tidak ada data, set ke 0
          setUserPoints(points);
        }
      } catch (error) {
        console.error("Error fetching user points:", error);
        alert("Gagal memuat poin pengguna.");
      }
    };

    fetchUserPoints();
  }, []); // Efek ini hanya berjalan sekali saat pertama kali komponen dimuat

  const handleExchange = async () => {
    if (!selectedReward) {
      alert("Silakan pilih hadiah terlebih dahulu.");
      return;
    }

    if (userPoints < selectedReward.points) {
      alert("Poin Anda tidak mencukupi untuk menukar hadiah ini.");
      return;
    }

    try {
      // Update poin pengguna setelah menukar hadiah
      const updatedPoints = userPoints - selectedReward.points;
      await axios.patch("http://localhost:5000/userPoints", { points: updatedPoints });

      // Update state dan simpan di localStorage
      setUserPoints(updatedPoints);
      window.localStorage.setItem("userPoints", updatedPoints);
      alert(`Hadiah "${selectedReward.name}" berhasil ditukar!`);
    } catch (error) {
      console.error("Error exchanging reward:", error);
      alert("Gagal menukar hadiah.");
    }

    setSelectedReward(null); // Reset hadiah yang dipilih
  };

  return (
    <div className="exchange-page">
      <h1>Tukar Sampah ke Hadiah</h1>
      <h3>Total Poin Anda: {userPoints}</h3>

      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            <h3>{reward.name}</h3>
            <p>Points: {reward.points}</p>
            <button onClick={() => setSelectedReward(reward)}>
              {selectedReward?.id === reward.id ? "Dipilih" : "Pilih"}
            </button>
          </li>
        ))}
      </ul>

      <button className="exchange-button" onClick={handleExchange}>
        Tukar Hadiah
      </button>
    </div>
  );
};

export default ExchangePage;

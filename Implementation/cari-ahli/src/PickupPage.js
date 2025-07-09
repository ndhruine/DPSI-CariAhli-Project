import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PickupPage.css";

const PickupPage = () => {
  const [pickupRequest, setPickupRequest] = useState({
    name: "",
    address: "",
    wasteType: "",
    weight: "",
  });
  const [pickupRequests, setPickupRequests] = useState([]);
  const [userPoints, setUserPoints] = useState(0); // Default poin 0
  const [editingId, setEditingId] = useState(null);

  const pointRules = {
    Plastik: 100, // Poin per kg
    Kertas: 200,
    Logam: 300,
  };

  // Mengambil total poin dari localStorage atau backend
  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const storedPoints = window.localStorage.getItem("userPoints");

        // Jika ada poin yang tersimpan di localStorage
        if (storedPoints) {
          const parsedPoints = Number(storedPoints);
          setUserPoints(parsedPoints >= 0 ? parsedPoints : 0); // Jika poin negatif, reset ke 0
        } else {
          // Jika tidak ada data, panggil backend untuk mendapatkan poin
          const response = await axios.get("http://localhost:5000/userPoints");
          const points = response.data.points;

          // Pastikan poin tidak negatif
          setUserPoints(points >= 0 ? points : 0); // Set ke 0 jika negatif
        }
      } catch (error) {
        console.error("Error fetching user points:", error);
        setUserPoints(0); // Set poin ke 0 jika terjadi error
      }
    };

    fetchUserPoints();
  }, []); // Efek hanya berjalan sekali saat pertama kali komponen dimuat

  // Mengambil daftar pengambilan
  useEffect(() => {
    const fetchPickupRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pickups");
        setPickupRequests(response.data);

        // Update total poin berdasarkan data pickupRequests yang ada
        const totalPoints = response.data.reduce((acc, request) => acc + request.points, 0);
        setUserPoints(totalPoints);
      } catch (error) {
        console.error("Error fetching pickup requests:", error);
      }
    };

    fetchPickupRequests();
  }, []); // Efek hanya berjalan sekali saat pertama kali komponen dimuat

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPickupRequest({ ...pickupRequest, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, wasteType, weight } = pickupRequest;
    if (!name || !address || !wasteType || !weight) {
      alert("Silakan lengkapi semua data!");
      return;
    }

    const points = weight * pointRules[wasteType];

    if (editingId) {
      try {
        await axios.put(`http://localhost:5000/pickups/${editingId}`, {
          ...pickupRequest,
          points,
        });
        alert("Permintaan berhasil diperbarui!");

        setPickupRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === editingId
              ? { ...pickupRequest, id: editingId, points }
              : request
          )
        );
        setEditingId(null);
        updateTotalPoints();
      } catch (error) {
        console.error("Error updating pickup request:", error);
        alert("Gagal memperbarui permintaan. Silakan coba lagi.");
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5000/pickups", {
          ...pickupRequest,
          points,
        });
        alert(`Permintaan berhasil dikirim! Anda mendapatkan ${points} poin.`);

        setPickupRequests([...pickupRequests, response.data]);

        // Update total poin setelah submit
        updateTotalPoints();

        await axios.patch("http://localhost:5000/userPoints", { points: userPoints + points });
        window.localStorage.setItem("userPoints", userPoints + points);
      } catch (error) {
        console.error("Error submitting pickup request:", error);
        alert("Gagal mengirim permintaan. Silakan coba lagi.");
      }
    }

    setPickupRequest({ name: "", address: "", wasteType: "", weight: "" });
  };

  const handleEdit = (id) => {
    const requestToEdit = pickupRequests.find((request) => request.id === id);
    if (requestToEdit) {
      setPickupRequest({
        name: requestToEdit.name,
        address: requestToEdit.address,
        wasteType: requestToEdit.wasteType,
        weight: requestToEdit.weight,
      });
      setEditingId(id);
    }
  };

  const handleDelete = async (id) => {
    try {
      const requestToDelete = pickupRequests.find((request) => request.id === id);
      if (requestToDelete) {
        const newUserPoints = userPoints - requestToDelete.points;

        await axios.delete(`http://localhost:5000/pickups/${id}`);

        setPickupRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== id)
        );

        setUserPoints(newUserPoints);
        updateTotalPoints();

        await axios.patch("http://localhost:5000/userPoints", { points: newUserPoints });
        window.localStorage.setItem("userPoints", newUserPoints);
      }
    } catch (error) {
      console.error("Error deleting pickup request:", error);
      alert("Gagal menghapus permintaan. Silakan coba lagi.");
    }
  };

  // Fungsi untuk menghitung total poin
  const updateTotalPoints = () => {
    const totalPoints = pickupRequests.reduce((acc, request) => acc + request.points, 0);
    setUserPoints(totalPoints);
  };

  return (
    <div className="pickup-page">
      <h1>Form Pengambilan Sampah</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={pickupRequest.name}
          onChange={handleChange}
          placeholder="Nama"
        />
        <input
          type="text"
          name="address"
          value={pickupRequest.address}
          onChange={handleChange}
          placeholder="Alamat"
        />
        <select
          name="wasteType"
          value={pickupRequest.wasteType}
          onChange={handleChange}
        >
          <option value="">Pilih Jenis Sampah</option>
          <option value="Plastik">Plastik</option>
          <option value="Kertas">Kertas</option>
          <option value="Logam">Logam</option>
        </select>
        <input
          type="number"
          name="weight"
          value={pickupRequest.weight}
          onChange={handleChange}
          placeholder="Berat (kg)"
        />
        <button type="submit">Kirim Permintaan</button>
      </form>

      <h2>Permintaan Pengambilan</h2>
      <ul>
        {pickupRequests.map((request) => (
          <li key={request.id}>
            <p>{request.name}</p>
            <p>{request.address}</p>
            <p>{request.wasteType}</p>
            <p>{request.weight} kg</p>
            <p>{request.points} poin</p>
            <button onClick={() => handleEdit(request.id)}>Edit</button>
            <button onClick={() => handleDelete(request.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      {/* Tampilkan total poin */}
      <h3>Total Poin Anda: {userPoints}</h3>
    </div>
  );
};

export default PickupPage;

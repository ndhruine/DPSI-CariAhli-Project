import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const TambahPortofolio = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    nama: '',
    nim: '',
    semester: '',
    deskripsi: '',
    skill: [],
    skillInput: '',
    proyek: [
      {
        judul: '',
        tahun: '',
        deskripsi: '',
        kategori: ''
      }
    ]
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSkillAdd = () => {
    const skill = data.skillInput.trim();
    if (skill && !data.skill.includes(skill)) {
      setData({
        ...data,
        skill: [...data.skill, skill],
        skillInput: ''
      });
    }
  };

  const handleSkillRemove = (skill) => {
    setData({
      ...data,
      skill: data.skill.filter((s) => s !== skill)
    });
  };

  const handleProyekChange = (index, field, value) => {
    const updated = [...data.proyek];
    updated[index][field] = value;
    setData({ ...data, proyek: updated });
  };

  const tambahProyek = () => {
    setData({
      ...data,
      proyek: [...data.proyek, { judul: '', tahun: '', deskripsi: '', kategori: '' }]
    });
  };

  const hapusProyek = (index) => {
    const updated = [...data.proyek];
    updated.splice(index, 1);
    setData({ ...data, proyek: updated });
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "portofolio"), data);
      alert("Portofolio berhasil ditambahkan!");
      navigate("/admin/kelolaportofolio");
    } catch (error) {
      alert("Gagal menyimpan portofolio: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-md shadow-md border border-purple-200">
      <button className="text-purple-700 mb-4" onClick={() => navigate(-1)}>← Kembali</button>

      <h2 className="text-lg font-semibold mb-4 text-purple-700">Data Mahasiswa</h2>

      {/* Baris Nama, NIM, Semester */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input type="text" name="nama" placeholder="Nama" onChange={handleChange} className="input border px-4 py-2 rounded-md w-full sm:w-[32%]" />
        <input type="text" name="nim" placeholder="NIM" onChange={handleChange} className="input border px-4 py-2 rounded-md w-full sm:w-[32%]" />
        <input type="text" name="semester" placeholder="Semester" onChange={handleChange} className="input border px-4 py-2 rounded-md w-full sm:w-[32%]" />
      </div>

      {/* Deskripsi Mahasiswa */}
      <textarea name="deskripsi" placeholder="Deskripsi Mahasiswa" onChange={handleChange} className="input border px-4 py-2 rounded-md mb-4 w-full" />

      {/* Skill input */}
      <div className="mb-4">
        <label className="font-medium">Skill:</label>
        <div className="flex gap-2 mt-2 mb-2">
          <input
            type="text"
            placeholder="Tambah skill"
            value={data.skillInput}
            onChange={(e) => setData({ ...data, skillInput: e.target.value })}
            className="border px-3 py-2 rounded-md w-full"
          />
          <button
            type="button"
            onClick={handleSkillAdd}
            className="bg-purple-700 text-white px-4 rounded-md"
          >
            Tambah
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.skill.map((skill, idx) => (
            <span key={idx} className="bg-gray-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
              {skill}
              <button onClick={() => handleSkillRemove(skill)} className="text-red-500 font-bold ml-1">&times;</button>
            </span>
          ))}
        </div>
      </div>

      {/* Data Proyek */}
      {data.proyek.map((proyek, index) => (
        <div key={index} className="border p-4 rounded-md mb-4">
          <p className="font-semibold mb-2">Proyek {index + 1}</p>
          <input type="text" placeholder="Judul Proyek" value={proyek.judul} onChange={(e) => handleProyekChange(index, 'judul', e.target.value)} className="input border px-3 py-2 rounded-md mb-2 w-full" />
          <input type="text" placeholder="Tahun" value={proyek.tahun} onChange={(e) => handleProyekChange(index, 'tahun', e.target.value)} className="input border px-3 py-2 rounded-md mb-2 w-full" />
          {/* Ditukar posisi */}
          <input type="text" placeholder="Kategori Proyek" value={proyek.kategori} onChange={(e) => handleProyekChange(index, 'kategori', e.target.value)} className="input border px-3 py-2 rounded-md mb-2 w-full" />
          <input type="text" placeholder="Deskripsi Proyek" value={proyek.deskripsi} onChange={(e) => handleProyekChange(index, 'deskripsi', e.target.value)} className="input border px-3 py-2 rounded-md mb-2 w-full" />
          {data.proyek.length > 1 && (
            <button onClick={() => hapusProyek(index)} className="text-red-500 text-sm">Hapus proyek</button>
          )}
        </div>
      ))}

      <button onClick={tambahProyek} className="bg-orange-500 text-white px-4 py-2 rounded-full mb-4">+ Tambahkan proyek</button>
      <br />
      <button onClick={handleSubmit} className="bg-purple-700 text-white px-6 py-2 rounded-full">Simpan</button>
    </div>
  );
};

export default TambahPortofolio;

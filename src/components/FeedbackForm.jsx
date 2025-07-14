// src/components/FeedbackForm.jsx
import { useState } from 'react';

export default function FeedbackForm({ onSave }) {
  const [scores, setScores] = useState({ skill: 1, pengetahuan: 1, pengalaman: 1 });
  const [comment, setComment] = useState("");

  const handleScoreChange = (field, value) => {
    const numericValue = Math.max(0, Math.min(10, Number(value))); // Batasi nilai 0-10
    setScores(prev => ({ ...prev, [field]: numericValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...scores, comment });
    alert("Penilaian berhasil disimpan!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Feedback & Penilaian</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around gap-4 mb-4">
          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-600 mb-1">Skill</label>
            <input type="number" value={scores.skill} onChange={(e) => handleScoreChange('skill', e.target.value)} className="w-16 text-center border rounded-md p-2" />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-600 mb-1">Pengetahuan</label>
            <input type="number" value={scores.pengetahuan} onChange={(e) => handleScoreChange('pengetahuan', e.target.value)} className="w-16 text-center border rounded-md p-2" />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-600 mb-1">Pengalaman</label>
            <input type="number" value={scores.pengalaman} onChange={(e) => handleScoreChange('pengalaman', e.target.value)} className="w-16 text-center border rounded-md p-2" />
          </div>
        </div>
        <textarea 
          placeholder="Komentar atau Feedback" 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded-md p-2 mb-4 h-24"
        ></textarea>
        <button type="submit" className="w-full bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
          Simpan Penilaian
        </button>
      </form>
    </div>
  );
}

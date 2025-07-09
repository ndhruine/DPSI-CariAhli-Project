import React from "react";

const feedbackData = [
  {
    id: 1,
    nama: "Aulia Rahma",
    status: "Diterima",
    feedback:
      "Kami sangat terkesan dengan kemampuan Aulia dalam bidang AI dan data science. Ia menunjukkan semangat belajar yang tinggi.",
  },
  {
    id: 2,
    nama: "Bagas Pratama",
    status: "Ditolak",
    feedback:
      "Kami mencari kandidat dengan pengalaman lebih dalam pengembangan backend dan manajemen proyek.",
  },
  {
    id: 3,
    nama: "Siti Nurhaliza",
    status: "Diterima",
    feedback:
      "Siti menunjukkan pemahaman yang kuat terhadap UI/UX dan memiliki portofolio yang menonjol.",
  },
  {
    id: 4,
    nama: "Rizky Maulana",
    status: "Ditolak",
    feedback:
      "Kami menyarankan Rizky untuk meningkatkan keterampilan komunikasi dan kerja tim sebelum melamar kembali.",
  },
];

const FeedbackIndustri = () => {
  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Feedback Industri</h1>
      <div className="overflow-x-auto bg-white text-black rounded-xl shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">No</th>
              <th className="px-6 py-3 text-left">Nama Mahasiswa</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.nama}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      item.status === "Diterima"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">{item.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackIndustri;

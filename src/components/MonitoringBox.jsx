// src/components/MonitoringBox.jsx
import ProgressBar from './ProgressBar';

export default function MonitoringBox({ student }) {
  if (!student) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm h-full">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Monitoring Perkembangan Mahasiswa</h3>
        <p className="text-gray-500">Pilih mahasiswa dari tabel untuk melihat progress.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Monitoring Perkembangan Mahasiswa</h3>
      <h4 className="text-lg font-bold text-purple-800 mb-4">Progress Mahasiswa </h4>
      <div className="space-y-4">
        <ProgressBar label="Skill" value={student.progress.skill} />
        <ProgressBar label="Pengetahuan" value={student.progress.pengetahuan} />
        <ProgressBar label="Pengalaman" value={student.progress.pengalaman} />
      </div>
    </div>
  );
}

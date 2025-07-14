// src/components/PortfolioCard.jsx
import { Link } from 'react-router-dom';

export default function PortfolioCard({ student }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-200">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
        <p className="text-gray-500 mb-4">{student.nim}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {student.skills.map(skill => (
            <span key={skill} className="bg-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <Link to={`/portofolio/${student.id}`}>
        <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
          Lihat detail Portofolio
        </button>
      </Link>
    </div>
  );
}
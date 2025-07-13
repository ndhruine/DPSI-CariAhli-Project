// src/components/PortfolioTable.jsx
export default function PortfolioTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="border-b">
          <tr>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Nama Mahasiswa</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Judul Portofolio</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Status Portofolio</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500">Tanggal Diperbarui</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-700">{item.name}</td>
              <td className="py-3 px-4 text-gray-700">{item.title}</td>
              <td className="py-3 px-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.status === 'Sudah diperbarui'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-700">{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
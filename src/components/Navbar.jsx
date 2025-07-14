export default function Navbar() {
  return (
    <div className="bg-white border-b shadow-sm px-6 py-6 flex justify-between items-center">
      <h2 className="font-bold text-purple-700 text-lg">Selamat Datang di Cari Ahli</h2>
      <div className="text-sm text-gray-600 flex items-center gap-2">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Dosen</span>
      </div>
    </div>
  );
}

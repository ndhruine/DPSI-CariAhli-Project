import logo from "./CariAhli.png";

const MahasiswaNavbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b-2 border-purple-800">
            <div className="flex items-center">
                <img src={logo} alt="CariAhli Logo" className="h-10 mr-2" />
            </div>
            <div className="flex items-center justify-between space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
                    <svg
                        className="w-6 h-6 text-green-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 2a5 5 0 100 10 5 5 0 000-10zm-7 16a7 7 0 0114 0H3z"
                        clipRule="evenodd"
                        />
                    </svg>
                </div>
                <span className="font-semibold text-purple-900">Mahasiswa</span>
            </div>
        </nav>
    );
};

export default MahasiswaNavbar;

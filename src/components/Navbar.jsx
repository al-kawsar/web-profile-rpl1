import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Determine if the current path matches the menu item's path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile */}
      <div className="flex justify-between relative top-3 lg:hidden">
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center"
          id="UserButton"
        >
          <img
            src="/icons/NavIcon.png"
            alt=""
            className="w-6 h-6"
            onClick={toggleMenu}
          />
        </div>
        <div className={`text-center text-white ${isMenuOpen ? "hidden" : ""}`}>
          <div className="text-[0.7rem]">Hi, visitor!</div>
          <div className="font-bold text-[1rem]">WELCOME</div>
        </div>

        <div
          className={`w-10 h-10 rounded-full flex justify-center items-center `}
          id="UserButton"
        >
          <img src="/icons/user.svg" alt="" className="" />
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="IsiNavbar"
        >
          <ul className="mt-8">
            <li className="mb-4">
              <Link
                to="/"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/') ? 'opacity-100' : ''}`}
              >
                Beranda
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/profil"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/profil') ? 'opacity-100' : ''}`}
              >
                Profil
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/struktur"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/struktur') ? 'opacity-100' : ''}`}
              >
                Struktur
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/akademik"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/akademik') ? 'opacity-100' : ''}`}
              >
                Akademik
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/jadwal"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/jadwal') ? 'opacity-100' : ''}`}
              >
                Jadwal
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/galeri"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/galeri') ? 'opacity-100' : ''}`}
              >
                Galeri
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/kontak"
                className={`text-white opacity-80 text-lg font-bold ${isActive('/kontak') ? 'opacity-100' : ''}`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop */}
      <div className="flex justify-between relative top-3 hidden lg:flex">
        <div>
          <img src="/images/LOGO_SMK7.png" className="w-12 h-12 rounded-full" alt="" />
        </div>
        <ul className="mt-2 flex gap-5">
          <li className="mb-4">
            <Link
              to="/"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/') ? 'opacity-100' : ''}`}
            >
              Beranda
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/profil"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/profil') ? 'opacity-100' : ''}`}
            >
              Profil
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/struktur"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/struktur') ? 'opacity-100' : ''}`}
            >
              Struktur
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/akademik"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/akademik') ? 'opacity-100' : ''}`}
            >
              Akademik
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/jadwal"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/jadwal') ? 'opacity-100' : ''}`}
            >
              Jadwal
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/galeri"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/galeri') ? 'opacity-100' : ''}`}
            >
              Galeri
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/kontak"
              className={`text-white opacity-80 text-[1rem] font-semibold ${isActive('/kontak') ? 'opacity-100' : ''}`}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile */}
      <div className="flex justify-between relative top-3 lg:hidden">
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center"
          id="UserButton"
        >
          <img
            src="/NavIcon.png"
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
          <img src="/user.svg" alt="" className="" />
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="IsiNavbar"
        >
          <ul className="mt-8">
            <li className="mb-4">
              <Link to="/" className="text-white opacity-80 text-lg font-bold">
                Beranda
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/profil"
                className="text-white opacity-80 text-lg font-bold"
              >
                Profil
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/struktur"
                className="text-white opacity-80 text-lg font-bold"
              >
                Struktur
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/akademik"
                className="text-white opacity-80 text-lg font-bold"
              >
                Akademik
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/jadwal"
                className="text-white opacity-80 text-lg font-bold"
              >
                Jadwal
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/galeri"
                className="text-white opacity-80 text-lg font-bold"
              >
                Galeri
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/kontak"
                className="text-white opacity-80 text-lg font-bold"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dekstop */}
      <div className="flex justify-between relative top-3 hidden lg:flex">
        <div>
          <img src="/LOGO_SMK7.png" className="w-12 h-12 rounded-full" alt="" />
        </div>
        <ul className="mt-2 flex gap-5">
          <li className="mb-4">
            <Link
              to="/"
              className="text-white opacity-80 text-[1rem] font-semibold"
            >
              Beranda
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/profil"
              className="text-white opacity-80 text-[1rem] font-semibold"
            >
              Profil
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/struktur"
              className="text-white opacity-80 text-[1rem] font-semibold"
            >
              Struktur
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/akademik"
              className="text-white opacity-80 text-[1rem] font-semibold"
            >
              Akademik
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/jadwal"
              className="text-white opacity-80 text-[1rem] font-semibold"
            >
              Jadwal
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/galeri"
              className="text-white opacity-80 text-[1rem] font-semibold"
            >
              Galeri
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/kontak"
              className="text-white opacity-80 text-[1rem] font-semibold"
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

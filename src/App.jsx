import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./Pages/Footer";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Profil from "./Pages/Profil";
import Struktur from "./Pages/Struktur";
import Akademik from "./Pages/Akademik";
import Jadwal from "./Pages/Jadwal";
import Galeri from "./Pages/Galeri";
import Kontak from "./Pages/Kontak";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? (
        <div className="text-white px-[10%]">
          <Navbar />
          <div className="py-10">
            <Routes>
              <Route path="/profil" element={<Profil />} />
              <Route path="/struktur" element={<Struktur />} />
              <Route path="/akademik" element={<Akademik />} />
              <Route path="/jadwal" element={<Jadwal />} />
              <Route path="/galeri" element={<Galeri />} />
              <Route path="/kontak" element={<Kontak />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Beranda />} />
        </Routes>
      )}
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/echologo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white  w-full shadow-md">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-40 sm:w-48" src={logo} alt="ECHO Logo" />
        </Link>

        {/* Desktop Links */}
        {/* <div className="hidden md:flex items-center gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">الرئيسية</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">من نحن</Link>
          <Link to="/services" className="hover:text-yellow-300 transition">الخدمات</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">تواصل</Link>
        </div> */}

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center gap-4 text-2xl">
          <Link to="mailto:echo.company.eg@gmail.com" target="_blank"><SiGmail /></Link>
          <Link to="https://www.facebook.com/share/16uJkByjyA/" target="_blank"><FaFacebook /></Link>
          <Link to="https://www.instagram.com/echo_marketing_agencye?igsh=aTBzaHNiZHpjOTF4" target="_blank"><FaInstagram /></Link>
          <Link to="https://wa.me/201272057110" target="_blank"><FaWhatsapp /></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 flex flex-col gap-4 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>الرئيسية</Link>
          <Link to="/about" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>من نحن</Link>
          <Link to="/services" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>الخدمات</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>تواصل</Link>
          <div className="flex gap-4 text-2xl mt-2">
            <Link to="mailto:yourmail@gmail.com"><SiGmail /></Link>
            <Link to="https://facebook.com" target="_blank"><FaFacebook /></Link>
            <Link to="https://instagram.com" target="_blank"><FaInstagram /></Link>
            <Link to="https://wa.me/201055854777" target="_blank"><FaWhatsapp /></Link>
          </div>
        </div>
      )}
    </nav>
  );
}

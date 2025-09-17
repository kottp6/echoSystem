import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* اللوجو / العنوان */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-400">ECHO 📢</h2>
          <p className="text-sm text-gray-400 mt-2">
            صوتك يوصل أبعد 💡
          </p>
        </div>

        {/* الروابط */}
        

        {/* السوشيال ميديا */}
         <div className="hidden md:flex items-center gap-4 text-2xl">
          <Link to="mailto:echo.company.eg@gmail.com" target="_blank"><SiGmail /></Link>
          <Link to="https://www.facebook.com/share/16uJkByjyA/" target="_blank"><FaFacebook /></Link>
          <Link to="https://www.instagram.com/echo_marketing_agencye?igsh=aTBzaHNiZHpjOTF4" target="_blank"><FaInstagram /></Link>
          <Link to="https://wa.me/201272057110" target="_blank"><FaWhatsapp /></Link>
        </div>
      </div>

      {/* حقوق الملكية */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} ECHO. جميع الحقوق محفوظة
      </div>
    </footer>
  );
}

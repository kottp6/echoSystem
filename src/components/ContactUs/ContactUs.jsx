import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const contacts = [
    {
      icon: <FaPhoneAlt className="text-pink-500 text-3xl" />,
      title: "موبايل",
      info: "01272057110",
      link: "tel:01272057110",
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-3xl" />,
      title: "واتساب",
      info: "ابدأ محادثة",
      link: "https://wa.me/01101785597",
    },
    {
      icon: <FaEnvelope className="text-yellow-400 text-3xl" />,
      title: "إيميل",
      info: "echo.company.eg@gmail.com",
      link: "mailto:echo.company.eg@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-500 text-3xl" />,
      title: "العنوان",
      info: "بني سويف",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20  text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* العنوان */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          📞 تواصل معنا
        </motion.h2>

        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          👇 محتاج نبدأ معاك حملة تسويقية أو عندك فكرة عايز تنفذها؟  
          كلمنا وإحنا جاهزين نساعدك
        </motion.p>

        {/* بطاقات التواصل */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-slate-900 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Overlay عند hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-30 transition duration-500 rounded-xl"></div>

              {/* الأيقونة مع حركة */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                {item.icon}
              </motion.div>

              {/* النصوص */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-300">{item.info}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/201101785597"
          target="_blank"
          className="inline-block mt-12 bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          اتواصل معنا ECHO دلوقتي وخلي صوتك يوصل 🎯
        </motion.a>
      </div>
    </section>
  );
}

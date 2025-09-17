import { motion } from "framer-motion";
import { FaCamera, FaPaintBrush, FaBullhorn, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCamera className="text-pink-500 text-4xl mb-4" />,
      title: "تصوير احترافي",
      desc: "صور وفيديوز تدي البراند بتاعك هوية",
    },
    {
      icon: <FaPaintBrush className="text-indigo-500 text-4xl mb-4" />,
      title: "تصاميم إبداعية",
      desc: "بوستات وبانرات تخطف العين",
    },
    {
      icon: <FaBullhorn className="text-yellow-500 text-4xl mb-4" />,
      title: "إعلانات ممولة",
      desc: "نوصل جمهورك الصح بأقل تكلفة",
    },
    {
      icon: <FaMobileAlt className="text-green-500 text-4xl mb-4" />,
      title: "إدارة صفحات",
      desc: "محتوى + تفاعل + متابعة 24/7",
    },
    {
      icon: <FaProjectDiagram className="text-blue-500 text-4xl mb-4" />,
      title: "خطة تسويقية كاملة",
      desc: "من A لـ Z علشان تبقى واثق إنك ماشي صح",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* العنوان */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          💼 خدماتنا
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
         <span className="font-semibold text-yellow-300">ECHO </span>  
         اهتلاقي كل اللي محتاجه علشان تسوّق نفسك اونلاين مع 
        </motion.p>

        {/* البطاقات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-900 shadow-md rounded-xl p-8 flex flex-col items-center text-center group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* خلفية متدرجة تظهر عند Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-500 rounded-xl"></div>

              {/* الأيقونة مع حركة */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              {/* النصوص */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white transition">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
export default function Testimonials() {
  const testimonials = [
    {
      text: "ECHO ساعدتني أوصل لطلاب أكتر بطريقة بسيطة جدًا.",
      name: "أ/ ربيع",
      role: "مدرس ثانوي",
      img: "https://res.cloudinary.com/dojghbhxq/image/upload/v1758147623/rabie_ikxhtn.webp",
    },
    {
      text: "الحملة اللي عملوها للمكتب جابتلي عملاء جداد في أول أسبوع.",
      name: "م. أحمد",
      role: "محامي",
      img: "https://res.cloudinary.com/dojghbhxq/image/upload/v1758147624/ahmed_zogfyh.webp",
    },
    {
      text: "التسويق عبر السوشيال ميديا غير حياتي المهنية.",
      name: "أ. علاء",
      role: "مدرس فيزياء   ",
      img: "https://res.cloudinary.com/dojghbhxq/image/upload/v1758146934/alaa_auru9k.webp",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* العنوان */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          📝 آراء العملاء
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          الناس اللي اشتغلنا معاهم قالوا عننا:
        </motion.p>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 rounded-xl p-8 text-right shadow-lg relative overflow-hidden group flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              dir="rtl"
            >
              {/* أيقونة الاقتباس */}
              <FaQuoteLeft className="absolute top-4 left-4 text-yellow-300 text-2xl opacity-30 group-hover:opacity-60 transition" />

              {/* نص التقييم */}
              <p className="text-gray-200 leading-relaxed mb-6">{item.text}</p>

              {/* صورة وبيانات الشخص */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-300"
                />
                <div>
                  <h3 className="font-semibold text-yellow-300">{item.name}</h3>
                  <span className="text-sm text-gray-400">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

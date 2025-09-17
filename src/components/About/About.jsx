import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaCheckCircle, FaLeaf } from "react-icons/fa";


export default function About() {
  const images = ["https://res.cloudinary.com/dojghbhxq/image/upload/v1758146933/about1_fqeqgv.webp",
     "https://res.cloudinary.com/dojghbhxq/image/upload/v1758146936/about2_uhnjcy.webp",
      "https://res.cloudinary.com/dojghbhxq/image/upload/v1758146933/about3_c95xsd.webp"];
  const [current, setCurrent] = useState(0);

  // تغيير تلقائي كل 4 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* السلايدر */}
        <motion.div
          className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-80 sm:w-96 lg:w-[28rem] h-[20rem] sm:h-[24rem] lg:h-[28rem] relative overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                loading="lazy"
                src={images[current]}
                alt="About ECHO"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* النصوص */}
        <motion.div
          className="lg:w-1/2 text-right"
          dir="rtl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-6">
            من نحن
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed tracking-wide max-w-xl">
            <span className="font-semibold text-yellow-300 text-3xl">إحنا ECHO</span> ، 
            فريق شباب شغال <span className="text-indigo-400 font-medium">بشغف </span> 
            في عالم <span className="text-pink-400 font-medium">التسويق الإلكتروني</span>.  
            بنؤمن إن أي مشروع – سواء <span className="font-semibold text-white">مدرس</span>، 
            <span className="font-semibold text-white"> دكتور</span>، أو 
            <span className="font-semibold text-white"> مكتب محاماة</span> <br /> 
            يستاهل يوصل صوته للناس.  
            <br /><br />
            هدفنا نخلي حضورك على 
            <span className="text-green-400 font-semibold"> السوشيال ميديا </span> 
            أقوى، أذكى، وأكثر <span className="text-yellow-300">تأثيرًا</span>.
          </p>

          {/* القيم */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="text-green-500 text-3xl mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">البساطة</h3>
              <p className="text-sm text-gray-600 text-center">
                نوصل المعلومة بشكل سهل وواضح.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaLightbulb className="text-yellow-500 text-3xl mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">الإبداع</h3>
              <p className="text-sm text-gray-600 text-center">
                أفكار جديدة ومختلفة في كل حملة.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="text-indigo-600 text-3xl mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">النتيجة</h3>
              <p className="text-sm text-gray-600 text-center">
                هدفنا الأول إن شغلك يكبر ويبان.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

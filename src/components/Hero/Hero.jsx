import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // أيقونة للسهم


export default function Hero() {
  return (
    <section className="relative text-white lg:mt-20" id="hero">
      <div className="container mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* صورة/إلستريشن */}
        <motion.div
          className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="https://res.cloudinary.com/dojghbhxq/image/upload/v1758146933/hero_vyw3lu.webp"
            loading="lazy"
            alt="Digital Marketing"
            className="w-90 sm:w-96 lg:w-[28rem] drop-shadow-2xl rounded-2xl"
            animate={{
              y: [0, -15, 0], // حركة لأعلى وأسفل
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
         {/* النصوص */}
        <motion.div
          className="max-w-xl text-center lg:text-right"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            
            <span className="text-yellow-300">ECHO </span>
            خلي صوتك يوصل مع{" "}
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            إحنا شركة تسويق إلكتروني في بني سويف، بنساعدك تكبر وتوصل لعملاء أكتر عن
            طريق التصوير، التصاميم، الإعلانات الممولة، وإدارة الصفحات… يعني كل اللي
            محتاجه علشان تبقى اونلاين
            بقوة 
            
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-300 transition"
          >
            <FiArrowLeft className="text-xl" />
            ابدا حملتك الان
            
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

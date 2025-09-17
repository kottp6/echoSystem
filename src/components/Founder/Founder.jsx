import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="founder" className="py-20 ">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* الصورة */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dojghbhxq/image/upload/v1758133808/founder_j4xy8v.jpg"
            alt="Founder of ECHO"
            className="rounded-2xl shadow-xl w-80 sm:w-96 lg:w-[28rem] object-cover"
          />
        </motion.div>

        {/* النصوص */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-right"
          dir="rtl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            👨💼 مين ورا <span className="text-yellow-400">ECHO؟</span>
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed tracking-wide mb-6 max-w-xl mx-auto lg:mx-0">
            أنا <span className="font-semibold text-indigo-600">محمد هشام</span>، 
            مؤسس <span className="font-semibold text-yellow-400">ECHO</span>.  
            بدأت الشركة علشان أوفر للمدرسين، الدكاترة، والمحامين 
            فرصة يظهروا أونلاين بطريقة مختلفة وجذابة.  
            <br /><br />
            بحب أجمع بين <span className="text-pink-500 font-medium">  الإبداع </span> 
             و <span className="text-green-500 font-medium">النتائج الملموسة</span>، 
            وهدفي دايمًا إن صوتك يوصل أبعد 
          </p>

          {/* CTA */}
          <motion.a
            href="https://wa.me/0127257110" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-green-400 transition"
          >
            تواصل مع المؤسس عبر واتساب 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

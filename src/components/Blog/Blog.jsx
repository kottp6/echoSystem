import { motion } from "framer-motion";

export default function Blog() {
  const blogs = [
    {
      title: "أهمية الإعلانات الممولة 🚀",
      desc: "تعرف إزاي الإعلانات الممولة ممكن توصلك لجمهورك الصح بأقل تكلفة.",
      img: "https://res.cloudinary.com/dojghbhxq/image/upload/v1758133333/blog1_ympipj.jpg",
    },
    {
      title: "التصميم سر الجاذبية 🎨",
      desc: "إزاي التصميم الإبداعي يخلي البراند بتاعك مميز ويجذب العملاء.",
      img: "https://res.cloudinary.com/dojghbhxq/image/upload/v1758133266/blog2_kca1hm.jpg",
    },
    {
      title: "خطة تسويقية ناجحة 📊",
      desc: "تعلم خطوات وضع خطة تسويقية من A لـ Z تخلي شغلك ماشي صح.",
      img: "https://res.cloudinary.com/dojghbhxq/image/upload/v1758133190/blog3_l9fsox.jpg",
    },
  ];

  return (
    <section id="blog" className="py-20 ">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* العنوان */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          📚 المدونة
        </motion.h2>

        <motion.p
          className="text-lg text-white mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          بنشارك نصايح وأفكار عن التسويق الإلكتروني تقدر تطبقها بسهولة على شغلك
          <br /> 
        خليك متابع وخد أفكار تساعدك تسبق منافسينك
        </motion.p>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* الصورة */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* النص */}
              <div className="p-6 flex flex-col flex-grow text-right" dir="rtl">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">{blog.desc}</p>
                
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

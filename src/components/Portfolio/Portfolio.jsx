import { motion } from "framer-motion";

export default function Portfolio() {
  const videos = [
    { id: 1, src: "https://res.cloudinary.com/dojghbhxq/video/upload/v1758128357/video3_qrilbk.mp4" },
    { id: 2, src: "https://res.cloudinary.com/dojghbhxq/video/upload/v1758128930/video1_al6g0v.mp4" },
    { id: 3, src: "https://res.cloudinary.com/dojghbhxq/video/upload/v1758128998/video4_ve9lvc.mp4" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* العنوان */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          📸 شغلنا
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          هنا هتلاقي جزء من الشغل اللي عملناه لمدرسين، دكاترة، ومحامين.  
          صور، فيديوهات، وإعلانات حققت نتائج حقيقية ✨
        </motion.p>

        {/* شبكة الفيديوهات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative rounded-xl overflow-hidden shadow-lg bg-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <video
                src={video.src}
                controls
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                preload="metadata"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA زرار drive */}
        <motion.a
          href="https://drive.google.com/drive/folders/11NwpD-eNfJJDyq2bUFfhe-EcoDU5eIvv?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        Google Drive 📂  شوف كل الشغل على 
        </motion.a>
      </div>
    </section>
  );
}

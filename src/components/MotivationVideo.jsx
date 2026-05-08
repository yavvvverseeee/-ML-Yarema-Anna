import { motion } from "framer-motion";

const MotivationVideo = () => {
  return (
    <section
      id="video"
      // Зробили секцію на весь екран, щоб відео було рівно по центру
      className="min-h-screen bg-black w-full flex flex-col items-center justify-center py-20 relative z-30 border-t border-cyber-red/30 overflow-hidden px-4"
    >
      {/* ========================================== */}
      {/* ФОН: Тільки Кібер-сітка */}
      {/* ========================================== */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(transparent 95%, #ff003c 100%), linear-gradient(90deg, transparent 95%, #ff003c 100%)",
          backgroundSize: "50px 50px",
          backgroundPosition: "center center",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-red/5 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" />
      {/* ========================================== */}

      <h2
        className="text-4xl md:text-5xl text-white font-bold font-mono tracking-widest mb-10 md:mb-16 relative z-10 animate-glitch text-center"
        style={{ textShadow: "0 0 10px #ff003c, 0 0 20px #ff003c" }}
      >
        MOTIVATION VIDEO
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        // ФІКС 1: Зменшили ширину з 900px до 750px
        className="w-full max-w-[750px] relative z-10 bg-[#0a0a0a]/90 backdrop-blur-md rounded-lg border-2 border-cyber-red/50 shadow-[0_0_30px_rgba(255,0,60,0.3)] overflow-hidden flex flex-col"
      >
        {/* Шапка медіаплеєра */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-cyber-red/30 bg-[#1a0505]">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#27c93f]/50 shadow-[0_0_5px_#27c93f]" />
          </div>
          <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">
            media_player.exe // decrypted
          </span>
          <div className="w-12"></div>
        </div>

        {/* Контейнер для відео */}
        <div className="relative w-full bg-black flex items-center justify-center">
          <video
            controls
            // ФІКС 2: Обмежили висоту (max-h-[60vh]) і змінили на object-contain
            className="w-full max-h-[60vh] object-contain"
          >
            <source src="/motivation.mp4" type="video/mp4" />
            Ваш браузер не підтримує тег відео.
          </video>
        </div>

        {/* Підвал плеєра */}
        <div className="px-4 py-2 bg-[#1a0505] border-t border-cyber-red/30 flex justify-between items-center text-[10px] md:text-xs font-mono text-gray-500">
          <span>&gt; PLAYING SECURE_FILE...</span>
          <span className="text-cyber-red">100% SECURE</span>
        </div>
      </motion.div>
    </section>
  );
};

export default MotivationVideo;

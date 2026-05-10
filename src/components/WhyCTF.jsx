import { motion } from "framer-motion";

const WhyCTF = () => {
  return (
    <section
      id="why-ctf"
      className="min-h-[80vh] bg-black w-full flex flex-col items-center py-20 relative z-30 border-t border-cyber-red/30 overflow-hidden"
    >
      {/* ================= ФОН: РАДАР CTF ================= */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-cyan-500/20 rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[250px] md:h-[250px] border border-cyan-500/10 rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[1px] bg-cyan-500/10 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[100vh] bg-cyan-500/10 z-0 pointer-events-none" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[1500px] md:h-[1500px] rounded-full z-0 pointer-events-none opacity-40 origin-center"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 70%, rgba(0, 240, 255, 0.3) 98%, rgba(0, 240, 255, 0.8) 100%)",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_10%,#000000_80%)]" />
      {/* ==================================================== */}

      <h2
        className="text-4xl md:text-5xl font-bold font-mono text-cyan-400 tracking-widest mb-16 text-center animate-glitch relative z-10"
        style={{
          textShadow:
            "0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5)",
        }}
      >
        ЧОМУ CTF?
      </h2>

      <div className="w-full max-w-[900px] px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="border border-cyan-500/50 bg-[#050505]/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.1)] rounded-lg overflow-hidden relative"
        >
          {/* Шапка терміналу */}
          <div className="bg-[#0a1520] border-b border-cyan-500/30 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f0ff]" />
              <span className="font-mono text-cyan-500 text-xs md:text-sm tracking-widest font-bold">
                MESSAGE_INTERCEPTED
              </span>
            </div>
            <span className="font-mono text-gray-500 text-xs hidden sm:block">
              SOURCE: YAREMA_A
            </span>
          </div>

          <div className="p-6 md:p-10">
            {/* Фейкові логи для візуального наповнення */}
            <div className="font-mono text-xs text-cyan-700/70 mb-6 space-y-1">
              <p>&gt; ESTABLISHING SECURE CONNECTION... OK</p>
              <p>&gt; EXTRACTING TARGET_MOTIVATION... OK</p>
              <p>&gt; DECRYPTING CONTENTS...</p>
            </div>

            {/* Основний текст повідомлення */}
            <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-500/50 bg-cyan-900/5 py-2">
              <p className="font-mono text-cyan-400 text-xs mb-4 tracking-widest uppercase opacity-80">
                [ BEGIN DECRYPTED LOG ]
              </p>

              <div className="space-y-5 font-mono text-gray-300 text-[14px] md:text-[16px] leading-relaxed">
                <p>
                  Хоча мій шлях у{" "}
                  <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                    BEST-і
                  </span>{" "}
                  ще не дуже довгий, я вже встигла перейнятися духом кортіми{" "}
                  <span className="text-cyber-red font-bold drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]">
                    CTF
                  </span>{" "}
                  і зрозуміти, що саме цей івент найбільше мені відгукується і
                  це те місце, де я хочу бути!
                </p>

                <p>
                  На{" "}
                  <span className="text-white font-bold tracking-wider">
                    MW
                  </span>{" "}
                  на симуляції івентів я потрапила саме в кортіму CTF, думаю{" "}
                  <span className="text-cyan-400 font-bold italic drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                    це доля!
                  </span>{" "}
                  Тоді я побачила, як це виглядає зсередини, і в мене зʼявилася
                  чітка мета потрапити саме в цю команду!
                </p>

                <p>
                  Я переконана, що в CTF знайду саме той простір для розвитку,
                  який мені потрібен зараз, і готова{" "}
                  <span className="text-[#27c93f] font-bold uppercase drop-shadow-[0_0_8px_rgba(39,201,63,0.5)]">
                    викладатися на максимум
                  </span>
                  , щоб допомогти команді створити незабутній івент разом!
                  <span className="inline-block w-2.5 h-4 md:h-5 bg-cyan-400 animate-pulse ml-2 align-middle" />
                </p>
              </div>
            </div>

            {/* Підвал терміналу */}
            <div className="mt-8 pt-4 border-t border-cyan-900/30 flex justify-between items-center text-[10px] md:text-xs font-mono">
              <span className="text-gray-600">&gt; EOF_REACHED</span>
              <span className="text-cyan-600 animate-pulse">
                STATUS: HIGHLY_MOTIVATED
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCTF;

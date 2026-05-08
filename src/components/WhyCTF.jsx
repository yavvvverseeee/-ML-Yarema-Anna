import { motion } from "framer-motion";

const WhyCTF = () => {
  // Анімація для послідовного завантаження абзаців
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 }, // Затримка між появою абзаців
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <section
      id="why-ctf"
      className="min-h-[80vh] bg-black w-full flex flex-col items-center py-20 relative z-30 border-t border-cyber-red/30 overflow-hidden"
    >
      {/* ================= ФОН: РАДАР CTF ================= */}

      {/* 1. Блакитна координатна сітка */}
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

      {/* 2. Кільця радару (перехрестя) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-cyan-500/20 rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[250px] md:h-[250px] border border-cyan-500/10 rounded-full z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[1px] bg-cyan-500/10 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[100vh] bg-cyan-500/10 z-0 pointer-events-none" />

      {/* 3. Анімований промінь сканера, що крутиться */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[1500px] md:h-[1500px] rounded-full z-0 pointer-events-none opacity-40 origin-center"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 70%, rgba(0, 240, 255, 0.3) 98%, rgba(0, 240, 255, 0.8) 100%)",
        }}
      />

      {/* 4. Затемнення по краях (Віньєтка), щоб радар плавно зникав у темряву */}
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
        {/* ГОЛОВНИЙ ТЕРМІНАЛ */}
        <div className="border border-cyan-500/50 bg-[#050505]/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.1)] rounded-lg overflow-hidden relative">
          {/* Шапка терміналу (Декор) */}
          <div className="bg-[#0a1520] border-b border-cyan-500/30 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f0ff]" />
              <span className="font-mono text-cyan-500 text-xs md:text-sm tracking-widest font-bold">
                SECURE_CHANNEL_OPEN
              </span>
            </div>
            <span className="font-mono text-gray-500 text-xs hidden sm:block">
              ENCRYPTION: BYPASSED
            </span>
          </div>

          {/* Контент з історією */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Запускається, коли секція на 30% в екрані
            className="p-6 md:p-10 flex flex-col gap-8"
          >
            {/* АБЗАЦ 1: Дух кортіми (Червоний маркер) */}
            <motion.div
              variants={itemVariants}
              className="relative pl-6 md:pl-8 border-l-2 border-cyber-red/60"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-cyber-red shadow-[0_0_8px_#ff003c]" />
              <span className="absolute -left-10 top-0 text-cyber-red/40 font-mono text-xs hidden md:block">
                01
              </span>
              <p className="font-mono text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Хоч мій шлях у{" "}
                <span className="text-white font-bold">BEST</span> ще не дуже
                довгий, я вже встигла перейнятися духом кортіми{" "}
                <span className="text-cyber-red font-bold">CTF</span> і
                зрозуміти, що саме цей напрям найбільше мені відгукується. У
                CTF-івцях є той особливий вайб, який відчувається на будь-яких
                зборах чи підготовці до івенту — це поєднання драйву,
                відповідальності і живої командної взаємодії, де кожен реально
                включений у процес. І саме це мене надихає та ще раз
                підтверджує, що CTF — це те середовище, де я хочу бути.
              </p>
            </motion.div>

            {/* АБЗАЦ 2: Симуляція MW (Блакитний маркер) */}
            <motion.div
              variants={itemVariants}
              className="relative pl-6 md:pl-8 border-l-2 border-cyan-500/60"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-cyan-500 shadow-[0_0_8px_#00f0ff]" />
              <span className="absolute -left-10 top-0 text-cyan-500/40 font-mono text-xs hidden md:block">
                02
              </span>
              <p className="font-mono text-gray-300 text-sm md:text-[15px] leading-relaxed">
                На{" "}
                <span className="text-white font-bold tracking-wider">MW</span>{" "}
                під час симуляції івентів я потрапила саме в CTF, думаю{" "}
                <span className="text-cyan-400 font-bold italic">це доля!</span>{" "}
                Тоді я реально відчула, як це виглядає зсередини, і в мене
                з’явилась чітка думка, що я хочу бути частиною цієї кортіми. Це
                відчуття стало для мене не просто емоцією, а метою.
              </p>
            </motion.div>

            {/* АБЗАЦ 3: Максимум (Неоново-зелений маркер) */}
            <motion.div
              variants={itemVariants}
              className="relative pl-6 md:pl-8 border-l-2 border-[#27c93f]/60"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#27c93f] shadow-[0_0_8px_#27c93f]" />
              <span className="absolute -left-10 top-0 text-[#27c93f]/40 font-mono text-xs hidden md:block">
                03
              </span>
              <p className="font-mono text-gray-300 text-sm md:text-[15px] leading-relaxed">
                Я переконана, що в CTF я знайду саме той простір для розвитку,
                який мені потрібен зараз, і готова{" "}
                <span className="text-white font-bold uppercase drop-shadow-md border-b border-gray-600">
                  вкладати свій максимум
                </span>
                , щоб допомагати команді створювати сильний, продуманий і
                незабутній івент разом.
              </p>
            </motion.div>

            {/* Підвал терміналу */}
            <motion.div
              variants={itemVariants}
              className="mt-4 pt-4 border-t border-cyan-900/30 flex justify-between items-center text-xs font-mono"
            >
              <span className="text-gray-600">&gt; SIGNAL_END</span>
              <span className="text-cyan-600 animate-pulse">
                CONNECTION_STABLE
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCTF;

/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frontImg from "../assets/hacker1.png";
import backImg from "../assets/anna-photo.png";

// ==========================================
// 1. АНІМАЦІЯ ДОЩУ З ТЕКСТУ (MATRIX RAIN)
// ==========================================
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement; // Беремо секцію, в якій лежить canvas

    let drops = [];
    let columns = 0;
    const columnWidth = 240;
    const fontSize = 16;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      // ФІКС: Тепер висота береться динамічно. Якщо термінал розсунув секцію — canvas тягнеться за ним!
      canvas.height = parent.scrollHeight;

      const newColumns = Math.max(Math.floor(canvas.width / columnWidth), 1);
      if (newColumns > columns) {
        // Додаємо нові краплі, якщо екран став ширшим
        for (let x = columns; x < newColumns; x++)
          drops[x] = Math.random() * -50;
        columns = newColumns;
      }
    };

    // ФІКС: ResizeObserver автоматично викликає resizeCanvas(), коли змінюється висота сторінки
    const observer = new ResizeObserver(() => resizeCanvas());
    if (parent) observer.observe(parent);

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const phrases = [
      "CTF 2026 KING OF THE HILL",
      "SOFTWARE ENGINEERING",
      "LVIV POLYTECHNIC",
      "PZ-12 SECURE NODE",
      "C++_KERNEL_PANIC",
      "ACCESS_GRANTED",
      "SYSTEM_OVERRIDE",
    ];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff003c";
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = phrases[Math.floor(Math.random() * phrases.length)];
        ctx.fillText(text, i * columnWidth + 20, drops[i] * 24);

        if (drops[i] * 24 > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
      if (parent) observer.unobserve(parent); // Вимикаємо спостерігач при виході
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20 pointer-events-none"
    />
  );
};

// ==========================================
// 2. КОМПОНЕНТ ШВИДКОГО ДРУКУ (ТЕРМІНАЛ)
// ==========================================
const TerminalTyping = ({ text, delay = 0, speed = 5 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout;
    let interval;

    timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return <span>{displayed}</span>;
};

// ==========================================
// 3. ГОЛОВНИЙ КОМПОНЕНТ WHO AM I
// ==========================================
const WhoAmI = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [step, setStep] = useState(0);
  const [isLogExpanded, setIsLogExpanded] = useState(false);

  const terminalRef = useRef(null);

  // Анімація MATCH FOUND
  useEffect(() => {
    let t1, t2, t3, t4;

    if (isFlipped) {
      setStep(1);
      t1 = setTimeout(() => setStep(2), 1000);
      t2 = setTimeout(() => setStep(3), 2000);
      t3 = setTimeout(() => setStep(4), 3000);
      t4 = setTimeout(() => setStep(5), 4500);
    } else {
      setStep(0);
      setIsLogExpanded(false);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isFlipped]);

  return (
    <section
      id="whoami"
      className="min-h-screen bg-black w-full flex flex-col items-center py-20 relative z-30 border-t border-cyber-red/30 overflow-hidden"
    >
      <MatrixRain />

      <h2
        className="text-4xl md:text-5xl font-bold font-mono text-white tracking-widest mb-16 text-center animate-glitch relative z-10"
        style={{ textShadow: "0 0 10px #ff003c, 0 0 20px #ff003c" }}
      >
        ХТО Я?
      </h2>

      <div className="w-full max-w-[1200px] px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16 relative z-10">
        {/* КАРТКА */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: "1000px" }}
          className="w-[250px] h-[350px] lg:w-[280px] lg:h-[390px] cursor-pointer flex-shrink-0"
        >
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full relative"
          >
            {/* ПЕРЕДНЯ СТОРОНА (ЧЕРВОНА) */}
            <div
              className="absolute inset-0 bg-[#0a0a0a] rounded-2xl border-2 border-cyber-red shadow-[0_0_30px_rgba(255,0,60,0.3)] overflow-hidden flex flex-col items-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={frontImg}
                alt="Hacker"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-0" />

              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-8">
                <div className="text-center">
                  <p className="text-gray-300 font-mono text-sm tracking-widest">
                    IDENTITY
                  </p>
                  <p className="text-cyber-red font-bold font-mono text-lg drop-shadow-md">
                    NOT RECOGNIZED
                  </p>
                </div>
                <p className="text-cyber-red font-mono text-sm animate-pulse tracking-widest bg-black/50 px-2 rounded">
                  CLICK TO IDENTIFY
                </p>
              </div>
            </div>

            {/* ЗАДНЯ СТОРОНА (СИНЯ) */}
            <div
              className="absolute inset-0 bg-[#050505] rounded-2xl border-2 border-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.4)] overflow-hidden flex flex-col items-center justify-end pb-8"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={backImg}
                alt="Anna"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />

              <div className="relative z-10 flex flex-col items-center">
                <h3
                  className="text-cyan-500 font-bold font-mono text-2xl tracking-widest mb-1"
                  style={{ textShadow: "0 0 10px rgba(0, 240, 255, 0.8)" }}
                >
                  IDENTIFIED
                </h3>
                <div className="flex items-center gap-2 text-white font-mono text-lg tracking-wider">
                  <p>Anna</p>
                  <svg
                    className="w-5 h-5 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ТЕРМІНАЛ */}
        <motion.div
          layout
          className={`w-full max-w-[850px] flex-1 min-h-[350px] lg:min-h-[390px] h-auto bg-[#0a0a0a]/90 backdrop-blur-md rounded-lg border-2 flex flex-col shadow-[0_0_20px_rgba(255,0,60,0.1)] transition-colors duration-700 overflow-hidden ${isFlipped ? "border-cyan-500/50" : "border-cyber-red/50"}`}
        >
          <motion.div
            layout
            className={`flex-shrink-0 flex items-center justify-between px-4 py-3 border-b transition-colors duration-700 bg-[#1a0505] ${isFlipped ? "border-cyan-500/30" : "border-cyber-red/30"}`}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-gray-400 font-mono text-xs">
              terminal - whoami
            </span>
            <div className="w-12"></div>
          </motion.div>

          <motion.div
            layout
            ref={terminalRef}
            className="p-6 font-mono text-sm space-y-4 flex-1 relative"
          >
            {step === 0 && (
              <p className="text-gray-500">
                Waiting for identity verification...
              </p>
            )}

            {step >= 1 && (
              <p className="text-gray-300">
                root@best-lviv:~# ./analyze_identity.sh
              </p>
            )}
            {step >= 2 && (
              <p className="text-white">&gt; ANALYZING BIOMETRICS...</p>
            )}
            {step >= 3 && (
              <p className="text-cyan-400 font-bold">&gt; MATCH FOUND.</p>
            )}
            {step >= 4 && (
              <p className="text-white">&gt; DECRYPTING PROFILE DATA...</p>
            )}

            {step >= 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 pl-4 border-l-2 border-cyan-500 space-y-2 mt-4 text-xs md:text-sm bg-cyan-900/10 py-2"
              >
                <p>
                  <span className="text-cyan-400">NAME:</span> Anna Yarema
                </p>
                <p>
                  <span className="text-cyan-400">NODE:</span> Lviv Polytechnic
                  (PZ-12)
                </p>
                <p>
                  <span className="text-cyan-400">ROLE:</span> Software
                  Engineering Core
                </p>
                <p>
                  <span className="text-cyan-400">MINDSET:</span> Logical over
                  rote learning
                </p>
              </motion.div>
            )}

            {step >= 5 && (
              <motion.div layout className="mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLogExpanded(!isLogExpanded);
                  }}
                  className="text-cyber-red hover:text-cyan-400 font-bold tracking-[0.2em] text-xs transition-colors cursor-pointer flex items-center gap-2"
                >
                  {isLogExpanded
                    ? "[-] CLOSE DETAILED LOG"
                    : "[+] DECRYPT BACKGROUND STORY"}
                </button>

                <AnimatePresence>
                  {isLogExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-4 text-gray-300 text-[13px] md:text-[15px] leading-relaxed border-l-2 border-cyan-500/30 pl-4 overflow-hidden"
                    >
                      <p className="text-cyan-500/80 uppercase text-xs mb-2 tracking-widest">
                        <TerminalTyping
                          text="[ FILE: motivation_core.txt ]"
                          delay={0.5}
                          speed={2}
                        />
                      </p>
                      <p>
                        <TerminalTyping
                          text="> Якщо чесно, моя історія з IT почалась ще задовго до того, як я зрозуміла, що це таке. Вже в дитинстві мене цікавило, як працюють речі навколо — техніка, комп’ютери і все, що можна було “покрутити і розібрати”. У 2-му класі я вперше відчула, що хочу пов’язати життя з IT, а в 4-му на Scratch це переросло в реальний інтерес."
                          delay={0.5}
                          speed={5}
                        />
                      </p>
                      <p>
                        <TerminalTyping
                          text="> Далі все розвивалось послідовно: у 9 класі я почала вивчати Python, у 10-му пройшла курс з веб-розробки (HTML/CSS). Вступивши на ПЗ, я вивчила C/C++, а потрапивши в BEST, остаточно зрозуміла, що хочу розвиватися тут як айтівиця."
                          delay={2.3}
                          speed={5}
                        />
                      </p>
                      <p>
                        <TerminalTyping
                          text="> Розуміючи, що моїх знань недостатньо для крутих проєктів BEST-у, я почала вивчати React, Tailwind, Next.js, Redux, БД та Telegram-боти. В процесі я зрозуміла: мне важливо не просто “щоб працювало”, а щоб це виглядало вау, було живим і мало свій стиль."
                          delay={3.7}
                          speed={5}
                        />
                      </p>
                      <p>
                        <TerminalTyping
                          text="> У роботі я стараюся спочатку глибоко розібратись у задачі. У команді я проактивна: люблю структурувати роботу і покращувати те, що вже є. Під час самого івенту готова максимально допомагати кортімі з будь-якими задачами на 100%."
                          delay={5.2}
                          speed={5}
                        />
                      </p>
                      <p>
                        <TerminalTyping
                          text="> Фідбек я сприймаю як інструмент для росту, якщо він конструктивний. Дуже ціную командну взаємодію, бо результат будується разом."
                          delay={6.6}
                          speed={5}
                        />
                      </p>
                      <p>
                        <TerminalTyping
                          text="> Окремо я проходила KT у Олексія Татарчинського, який пояснив загальну роль IT responsible, та у Лізи Ясіньської, яка детально розклала мої обов’язки в команді CTF. Це мене не налякало, а навпаки — змотивувало зробити цей CTF справді незабутнім."
                          delay={7.5}
                          speed={5}
                        />
                      </p>
                      <p className="text-cyan-500 font-bold mt-4">
                        <TerminalTyping
                          text="> END OF FILE."
                          delay={9.2}
                          speed={20}
                        />
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            <div className="w-2 h-4 bg-white animate-pulse mt-4 inline-block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAmI;

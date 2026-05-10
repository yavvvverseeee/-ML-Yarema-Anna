import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import WhoAmI from "./components/WhoAmI";
import WhyMe from "./components/WhyMe";
import WhyCTF from "./components/WhyCTF";
import Skills from "./components/Skills";
import Answers from "./components/Answers";


import heroBg from "./assets/hero-bg.svg";
import hackerImg from "./assets/hacker.png";

const TypewriterText = ({ text, delay = 0, speed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);
  return <span>{displayedText}</span>;
};

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleKeyPress = () => {
      if (step === 2) setStep(3);
    };
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleKeyPress);
    };
  }, [step]);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden z-0">
      <Navbar />

      <header
        id="welcome"
        className="min-h-screen w-full relative flex flex-col items-center pt-[12vh] pb-20 overflow-x-hidden"
      >
        <img
          src={heroBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />

        {/* 1. ЗАГОЛОВОК (z-30 щоб бути поверх усього) */}
        <div className="relative z-30 w-full max-w-[1100px] flex flex-col px-6 font-bold text-[32px] md:text-[56px] leading-tight mt-10 md:mt-0">
          <h1 className="text-left text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            <TypewriterText
              text="CONQUERING THE DIGITAL PEAK."
              speed={40}
              onComplete={() => setStep(1)}
            />
          </h1>
          <h1 className="text-right text-cyber-red drop-shadow-[0_0_15px_#ff003c] mt-2">
            {step >= 1 && (
              <TypewriterText
                text="JOINING THE CORE TEAM."
                speed={40}
                delay={0.1}
              />
            )}
          </h1>
        </div>

        {/* СПІЛЬНИЙ КОНТЕЙНЕР ДЛЯ ХАКЕРА І ТЕРМІНАЛУ */}
        <div className="relative w-full max-w-[1200px] px-4 md:px-6 mx-auto flex flex-col items-center mt-20 md:mt-32 z-10">
          {/* ХАКЕР */}
          <AnimatePresence>
            {step === 3 && (
              <motion.div
                initial={{ y: 150, x: -50, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                // ФІКС: Твоя ідеальна математика! На ПК висота 250px, а топ -200px (50px ховається).
                // На мобілці висота 160px, а топ -130px (30px ховається).
                // z-0 ховає його ПІД термінал. ЖОДНИХ ПРОМІЖКІВ!
                className="absolute -top-[130px] sm:-top-[160px] md:-top-[200px] left-[5%] md:left-[10%] lg:left-[15%] z-0 pointer-events-none"
              >
                <img
                  src={hackerImg}
                  alt="Hacker"
                  // Розміри з твого старого коду, 100% непрозорість, без підсвітки
                  className="h-[160px] sm:h-[200px] md:h-[250px] object-contain opacity-100"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ТЕРМІНАЛ */}
          {step >= 1 && (
            <motion.div
              initial={{ width: "80px", height: "40px", opacity: 0 }}
              animate={{
                width: "100%",
                maxWidth: "1200px",
                height: "auto",
                opacity: 1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              onAnimationComplete={() => {
                if (step === 1) setStep(2);
              }}
              // ФІКС: z-20 гарантує, що термінал ПЕРЕКРИВАЄ хакера
              className="relative rounded-md overflow-hidden p-[2px] bg-cyber-red/20 shadow-[0_0_50px_rgba(255,0,60,0.3)] z-20 w-full"
            >
              <div
                className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 animate-spin bg-[conic-gradient(from_90deg,transparent_0_50%,#ff003c_100%)] opacity-100"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative z-10 w-full h-full bg-[#0a0a0a]/95 backdrop-blur-xl rounded-md flex flex-col min-h-[320px]">
                <div className="flex items-center justify-between bg-[#1a0505] px-4 py-2 border-b border-cyber-red/40">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[10px] text-cyber-red/60 tracking-widest uppercase font-mono hidden sm:block">
                    core_terminal_session
                  </span>
                </div>

                <div className="p-4 md:p-6 font-mono text-sm md:text-base">
                  {step === 2 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-white text-center mt-20 tracking-[0.3em]"
                    >
                      [ PRESS ANY KEY TO BOOT SYSTEM ]
                    </motion.p>
                  )}

                  {step === 3 && (
                    <div className="space-y-1 text-gray-300 mt-2 pb-6">
                      <p className="opacity-60">
                        root@best-lviv:~#{" "}
                        <TypewriterText
                          text="./run_motivation.sh"
                          speed={30}
                          delay={0.5}
                        />
                      </p>
                      <p className="text-cyber-red font-bold mt-4">
                        <TypewriterText
                          text="> INITIATING SYSTEM BREACH..."
                          speed={35}
                          delay={1.0}
                        />
                      </p>
                      <p className="text-cyber-red mt-2">
                        <TypewriterText
                          text="> BYPASSING PZ-12 SECURE NODE... 100%"
                          speed={30}
                          delay={2.3}
                        />
                      </p>
                      <p className="text-white font-bold mt-4 border-l-2 border-cyber-red pl-3 bg-cyber-red/5 py-1">
                        <TypewriterText
                          text="> STATUS: SUCCESS. PROFILE LOADED: ANNA."
                          speed={20}
                          delay={3.9}
                        />
                      </p>

                      <div className="mt-8 border-l-2 border-cyan-500 pl-4 bg-cyan-900/10 py-4 relative shadow-[0_0_15px_rgba(0,255,255,0.05)]">
                        <p className="text-cyan-400 font-bold mb-3 text-xs md:text-sm uppercase tracking-[0.2em] drop-shadow-md">
                          <TypewriterText
                            text="[ INCOMING SECURE MESSAGE // DECRYPTED ]"
                            speed={30}
                            delay={4.8}
                          />
                        </p>
                        <p
                          className="text-gray-100 leading-relaxed text-sm md:text-base font-medium"
                          style={{
                            textShadow: "0 0 5px rgba(255,255,255,0.3)",
                          }}
                        >
                          <TypewriterText
                            text="Хейкааа, Юра! Мене звати Аня, і це моя мотивашка на посаду IT responsible CTF-у, через яку я хочу показати не тільки свої технічні скіли, а й те, як я відчуваю цей івент і яку атмосферу хочу в нього принести."
                            speed={30}
                            delay={6.4}
                          />
                          <span className="w-2.5 h-4 bg-white animate-pulse inline-block ml-1 align-middle" />
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      <WhoAmI />
      <WhyMe />
      <WhyCTF />
      <Skills />
      <Answers />
     
    </div>
  );
}

export default App;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyMe = () => {
  const [expandedLog, setExpandedLog] = useState(null);

  const toggleLog = (id) => {
    if (expandedLog === id) {
      setExpandedLog(null);
    } else {
      setExpandedLog(id);
    }
  };

  const logs = [
    {
      id: 1,
      title: "CODE_ADDICTED",
      severity: "CRITICAL",
      date: "2026-05-01",
      content:
        "Я не хочу обмежуватись лише кодингом макетів чи створенням ботів, бо для мене важливо реально впливати на те, як виглядає і відчувається проєкт з перших секунд взаємодії з ним. Тому готова викладатись на всі 100%, щоб сайт, брошури, бот були вражаючими і незабутніми!",
    },
    {
      id: 2,
      title: "FAST_LEARNER_MODE",
      severity: "HIGH",
      date: "2026-05-01",
      content:
        "Я дуже швидко вчусь через практику: використовую курси на Udemy, YouTube і одразу переношу це в код. Після того як потрапила в BEST, мені довелось з нуля опанувати React, і я досить швидко вийшла на рівень, де вже можу самостійно збирати проєкти. Я не боюсь помилок і “костилів” — через них і навчаюсь.",
    },
    {
      id: 3,
      title: "TEAM_ENERGY_CORE",
      severity: "HIGH",
      date: "2026-05-01",
      content:
        "Для мене важливо завжди знаходити позитив у будь-якій ситуації. Моя сильна сторона, яку я вважаю важливою не лише для розбудови команди, а й для підтримки її духу на всіх етапах. Навіть якщо ситуація складна або щось йде не за планом, я не зациклююсь на негативі, а швидко переключаюсь на пошук рішення і допомагаю іншим подивитись на задачу більш раціонально.",
    },
    {
      id: 4,
      title: "RESPONSIBILITY_ENGINE",
      severity: "CRITICAL",
      date: "2026-05-01",
      content:
        "Я відповідальна за те, що роблю, і не боюсь брати відповідальність за свої рішення. Якщо щось йде не так — я не перекладаю це на інших, а швидко включаюсь і розрулюю ситуацію сама. Для мене важливо доводити задачі до кінця, а не залишати їх “на потім”.",
    },
    {
      id: 5,
      title: "PARTY_HARD_MODE_ON",
      severity: "MEDIUM",
      date: "2026-05-01",
      content:
        "Свято дотримуюсь правила WORK HARD, PARTY HARDER, тому для мене CTF — це не тільки про код, а й про команду, підтримку і спільний вайб. Я хочу бути частиною кортіми, з якою можна не тільки працювати, а й проживати цей досвід разом, створюючи незабутні емоції на таких же незабутніх афтерах.",
    },
  ];

  return (
    <section
      id="whyme"
      className="min-h-screen bg-black w-full flex flex-col items-center py-20 relative z-30 overflow-hidden border-t border-cyber-red/30"
    >
      {/* 1. М'яке червоне неонове світіння по центру */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-red/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 2. Кібер-сітка (горизонтальні та вертикальні лінії) */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 60, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 60, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />

      {/* 3. Градієнтне затемнення зверху і знизу, щоб сітка плавно зникала */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black" />

      <h2
        className="text-4xl md:text-5xl font-bold font-mono text-cyber-red tracking-widest mb-16 text-center animate-glitch relative z-10 px-4"
        style={{ textShadow: "0 0 10px #ff003c, 0 0 20px #ff003c" }}
      >
        ЧОМУ Я?
      </h2>

      {/* Контейнер з логами (z-10 гарантує, що він поверх сітки) */}
      <div className="w-full max-w-[900px] px-6 flex flex-col gap-4 relative z-10">
        {logs.map((log) => {
          const isExpanded = expandedLog === log.id;

          return (
            <div
              key={log.id}
              className={`w-full border-2 rounded-md overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                isExpanded
                  ? "border-cyber-red bg-[#1a0505]/90 shadow-[0_0_20px_rgba(255,0,60,0.3)]"
                  : "border-cyber-red/30 bg-[#0a0a0a]/80 hover:border-cyber-red/80"
              }`}
            >
              {/* Шапка логу */}
              <div
                className="w-full px-4 md:px-6 py-4 flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleLog(log.id)}
              >
                <div className="flex items-center gap-4">
                  {/* Індикатор-квадратик */}
                  <div
                    className={`w-3 h-3 rounded-sm shadow-[0_0_10px_#ff003c] ${
                      log.severity === "CRITICAL"
                        ? "bg-cyber-red animate-pulse"
                        : log.severity === "HIGH"
                          ? "bg-orange-500"
                          : "bg-yellow-500"
                    }`}
                  />

                  {/* Заголовок */}
                  <span
                    className={`font-mono font-bold text-sm md:text-base tracking-widest transition-colors ${
                      isExpanded
                        ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                        : "text-gray-300"
                    }`}
                  >
                    {isExpanded ? "[-] " : "[+] "}LOG: {log.title}
                  </span>
                </div>

                <div className="flex items-center gap-4 md:gap-8 opacity-80">
                  {/* Тег важливості */}
                  <span
                    className={`hidden md:block font-mono text-xs px-2 py-0.5 border ${
                      log.severity === "CRITICAL"
                        ? "border-cyber-red text-cyber-red"
                        : log.severity === "HIGH"
                          ? "border-orange-500 text-orange-500"
                          : "border-yellow-500 text-yellow-500"
                    }`}
                  >
                    {log.severity}
                  </span>

                  <span className="font-mono text-gray-500 text-xs hidden sm:block">
                    {log.date}
                  </span>

                  {/* Стрілочка */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    className="text-cyber-red"
                  >
                    ▶
                  </motion.div>
                </div>
              </div>

              {/* Розгорнутий контент */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-4 border-l-2 border-cyber-red/50">
                        <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                          &gt; {log.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyMe;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Answers = () => {
  const qaList = [
    {
      id: 1,
      q: "На скільки ти оцінюєш свій вільний час по шкалі від 1 до 10?",
      a: "Оскільки зовсім скоро закінчується навчання і починаються канікули, і часу буде купаа, тому 10000/10!",
    },
    {
      id: 2,
      q: "В який пріоритет поставиш Івент, якщо потрапиш в команду?",
      a: "Однозначно 1-й! Нема більше варіантів!",
    },
    {
      id: 3,
      q: "Твої плани на найближчі 6 місяців (чи будеш у Львові постійно, курси, робота, сім'я, навчання)?",
      a: "До кінця сесії я однозначно буду у Львові, а на літо я їду додому у своє село, але воно в львівській області і в будь-який час я зможу приїхати до Львова.",
    },
  ];

  return (
    <section
      id="answers"
      className="min-h-[80vh] bg-black w-full flex flex-col items-center justify-center py-20 relative z-30 border-t border-cyber-red/30 overflow-hidden"
    >
      <style>{`
        .answers-swiper {
          --swiper-navigation-size: 20px; 
        }
        @media (min-width: 768px) {
          .answers-swiper {
            --swiper-navigation-size: 40px; 
          }
        }
        
        /* ФІКС: Притискаємо стрілки до абсолютних країв контейнера */
        .answers-swiper .swiper-button-prev {
          left: 0 !important;
        }
        .answers-swiper .swiper-button-next {
          right: 0 !important;
        }

        .answers-swiper .swiper-button-next, .answers-swiper .swiper-button-prev {
          color: #ffffff !important;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
          transition: all 0.3s;
        }
        .answers-swiper .swiper-button-next:hover, .answers-swiper .swiper-button-prev:hover {
          color: #ff003c !important;
          text-shadow: 0 0 15px #ff003c, 0 0 30px #ff003c;
          transform: scale(1.1);
        }
      `}</style>

      {/* Фоновий декор */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-red/5 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 120px, #ff003c 121px)",
          backgroundSize: "121px 100%",
        }}
      />

      <h2
        className="text-4xl md:text-5xl text-cyber-red font-bold font-mono tracking-widest mb-16 relative z-10 animate-glitch text-center px-4"
        style={{ textShadow: "0 0 10px #ff003c, 0 0 20px #ff003c" }}
      >
        ВІДПОВІДІ НА ПИТАННЯ
      </h2>

      {/* ФІКС: Зменшили px-10 до px-2 на мобілці, щоб дати максимум ширини для слайдера */}
      <div className="w-full max-w-[1000px] relative z-10 px-2 md:px-10">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="py-12 answers-swiper"
        >
          {qaList.map((item) => (
            <SwiperSlide key={item.id}>
              {/* ФІКС: Замість w-full поставили w-[82%] на мобілці. 
                  Тепер бокс вужчий за екран, і стрілки будуть висіти в порожньому просторі збоку! */}
              <div className="w-[82%] sm:w-[85%] md:w-[90%] max-w-[700px] mx-auto bg-[#0a0a0a]/90 backdrop-blur-md rounded-[2rem] border-2 border-cyber-red/80 shadow-[0_0_40px_rgba(255,0,60,0.4)] p-6 md:p-12 flex flex-col items-center justify-start min-h-[350px] md:min-h-[400px]">
                {/* Питання */}
                <h3
                  className="w-full font-mono font-bold text-lg md:text-3xl text-center mb-8 md:mb-10 text-white leading-snug"
                  style={{
                    textShadow:
                      "0 0 5px #ff003c, 0 0 15px #ff003c, 0 0 30px #ff003c",
                  }}
                >
                  {item.q}
                </h3>

                {/* Відповідь */}
                <p
                  className="w-full text-[#e1e1e1] font-mono text-sm md:text-lg text-left leading-relaxed"
                  style={{ textShadow: "0 0 8px rgba(225, 225, 225, 0.4)" }}
                >
                  {item.a}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Answers;

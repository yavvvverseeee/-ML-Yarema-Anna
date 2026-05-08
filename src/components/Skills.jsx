import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Обов'язкові стилі Swiper
import "swiper/css";
import "swiper/css/free-mode";

const Skills = () => {
  const skillsList = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JAVASCRIPT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "PYTHON",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "REACT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "NEXT.JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      invert: true,
    },
    {
      name: "TAILWIND",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "MONGODB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-[60vh] bg-black w-full flex flex-col items-center py-20 relative z-30 border-t border-cyber-red/30 overflow-hidden px-4 md:px-0"
    >
      {/* Декоративні вертикальні лінії на фоні */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 99px, #ff003c 100px)",
          backgroundSize: "100px 100%",
        }}
      />

      <h2
        className="text-4xl md:text-5xl text-white font-bold font-mono tracking-widest mb-16 relative z-10 animate-glitch"
        style={{ textShadow: "0 0 10px #ff003c, 0 0 20px #ff003c" }}
      >
        SKILLS
      </h2>

      {/* ФІКС: Контейнер, який відцентрує Свайпер на великих екранах */}
      <div className="w-full flex justify-center relative z-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView="auto"
          freeMode={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // ФІКС: max-w-[1200px] обмежує його ширину, а mx-auto ставить по центру
          className="w-full max-w-[1200px] mx-auto py-10 px-4"
        >
          {skillsList.map((skill, index) => (
            <SwiperSlide key={index} className="!w-auto">
              {/* КАРТКА СКІЛУ */}
              <div className="w-[160px] h-[180px] bg-[#0a0a0a]/90 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center gap-4 border border-cyber-red/50 shadow-[0_0_20px_rgba(255,0,60,0.3)] hover:shadow-[0_0_30px_rgba(255,0,60,0.7)] transition-all duration-300 cursor-grab active:cursor-grabbing group">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 ${
                    skill.invert ? "invert" : ""
                  }`}
                />

                <span className="text-white font-mono font-bold tracking-widest text-sm drop-shadow-md">
                  {skill.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;

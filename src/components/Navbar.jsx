import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const navLinks = [
    "welcome",
    "whoami",
    "whyme",
    "why-ctf",
    "skills",
    "answers",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
    if (!showEasterEgg) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-5 transition-all duration-300 z-[100] ${
          isScrolled || isOpen
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-cyber-red/80 shadow-[0_4px_20px_rgba(255,0,60,0.4)]"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <a
          href="#welcome"
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform relative z-[110]"
        >
          <img
            src={logoImg}
            alt="CTF Logo"
            className="h-8 md:h-10 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]"
          />
          <span className="text-[#F3EFE3] tracking-widest font-bold text-lg md:text-xl drop-shadow-md">
            CTF | <span className="text-cyber-red">BEST</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-mono tracking-widest relative z-[110]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-300 hover:text-cyber-red hover:drop-shadow-[0_0_10px_rgba(255,0,60,0.8)] transition-all"
            >
              &gt;{link}
            </a>
          ))}
        </div>

        <div className="md:hidden z-[110]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 justify-center items-center w-10 h-10 border border-cyber-red/50 rounded-sm bg-cyber-red/5"
          >
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 8, backgroundColor: "#ff003c" }
                  : { rotate: 0, y: 0 }
              }
              className="w-6 h-[2px] bg-cyber-red block shadow-[0_0_8px_#ff003c]"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-4 h-[2px] bg-cyber-red block self-end mr-2"
            />
            <motion.span
              animate={
                isOpen
                  ? {
                      rotate: -45,
                      y: -8,
                      width: "24px",
                      backgroundColor: "#ff003c",
                    }
                  : { rotate: 0, y: 0 }
              }
              className="w-6 h-[2px] bg-cyber-red block shadow-[0_0_8px_#ff003c]"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-[90] flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 text-center relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link}
                  href={`#${link}`}
                  onClick={closeMenu}
                  className="text-2xl font-mono tracking-[0.3em] text-[#F3EFE3] hover:text-cyber-red transition-colors uppercase"
                >
                  <span className="text-cyber-red mr-2">//</span>
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-black/95 border border-cyber-red px-6 py-4 rounded-md shadow-[0_0_40px_rgba(255,0,60,0.8)] backdrop-blur-xl flex items-center gap-4 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-full border-[3px] border-t-cyber-red border-r-cyber-red border-b-transparent border-l-transparent animate-spin" />
            <div className="flex flex-col">
              <p className="text-cyber-red font-mono font-bold tracking-widest">
                ADMIN PRIVILEGES GRANTED
              </p>
              <p className="text-[#F3EFE3] font-mono text-xs opacity-80 mt-1">
                &gt; Bypassing PZ-12 secure node... Success.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

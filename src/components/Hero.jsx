// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import TerminalWindow from "./TerminalWindow";
import hacker from "../assets/hacker.png";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section className="hero" id="welcome" ref={heroRef}>
      {/* Анімований фон */}
      <div className="hero-background">
        <div className="cyber-grid"></div>
        <div className="glow-lines"></div>
      </div>

      {/* Контент */}
      <div className="hero-content">
        <h1 className="hero-title glowing-text">
          CONQUERING THE DIGITAL PEAK.
        </h1>
        <h2 className="hero-subtitle glowing-text">JOINING THE CORE TEAM.</h2>

        {/* Персонаж з неоновою обводкою */}
        <div className="hero-character">
          <div className="character-glow"></div>
          <img src={hacker} alt="Hacker" className="character-image" />
        </div>

        {/* Термінал */}
        <TerminalWindow />
      </div>

      {/* SVG гора на фоні */}
      <div className="hero-mountain">
        <svg viewBox="0 0 1440 400" className="mountain-svg">
          <defs>
            <linearGradient
              id="mountainGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ff0040" stopOpacity="0.8">
                <animate
                  attributeName="stop-opacity"
                  values="0.8;0.4;0.8"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#ff0040" stopOpacity="0.5">
                <animate
                  attributeName="stop-opacity"
                  values="0.5;0.8;0.5"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#ff0040" stopOpacity="0.8">
                <animate
                  attributeName="stop-opacity"
                  values="0.8;0.4;0.8"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,400 L0,300 L200,250 L400,320 L600,200 L720,280 L800,150 L900,220 L1000,100 L1100,180 L1200,120 L1300,200 L1440,150 L1440,400 Z"
            fill="url(#mountainGradient)"
            filter="url(#glow)"
            className="mountain-path"
          />
          {/* Лінії сітки на горі */}
          <g stroke="#ff0040" strokeOpacity="0.3" strokeWidth="1">
            <line x1="200" y1="250" x2="200" y2="400" />
            <line x1="400" y1="320" x2="400" y2="400" />
            <line x1="600" y1="200" x2="600" y2="400" />
            <line x1="800" y1="150" x2="800" y2="400" />
            <line x1="1000" y1="100" x2="1000" y2="400" />
            <line x1="1200" y1="120" x2="1200" y2="400" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

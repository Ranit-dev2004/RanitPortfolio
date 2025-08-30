import React, { useState, useEffect } from "react";
import DecoderText from "../Components/decoder-text";

// Active skills (main)
const activeSkills = [
  { name: "React", level: 85, category: "Frontend" },
  { name: "Next.js", level: 70, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 72, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "MySQL", level: 65, category: "Database" },
  { name: "Java", level: 80, category: "Language" },
  { name: "Python", level: 75, category: "Language" },
  { name: "JavaScript (ES6+)", level: 85, category: "Language" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "Cyber Security", level: 65, category: "Security" },
  { name: "Ethical Hacking", level: 55, category: "Security" },
];


// Passive skills (background)
const passiveSkills = [
  "Git", 
  "GitHub", 
  "Linux", 
  "Firebase", 
  "REST API", 
  "GraphQL", 
  "Docker", 
  "Kubernetes", 
  "CI/CD", 
  "JWT", 
  "Redux", 
  "Postman", 
  "VS Code", 
  "Figma", 
  "Nginx", 
  "Webpack"
];


// Languages
const languages = [
  { name: "English", level: 80, flag: "🇺🇸" },
  { name: "Hindi", level: 85, flag: "🇮🇳" },
  { name: "Bengali", level: 90, flag: "🇧🇩" },
];

const SkillCard = ({ skill, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-700 hover:scale-105 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cyan glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl bg-cyan-400" />
      
      {/* Category badge */}
      <div className="absolute top-4 right-4 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-gray-400 border border-white/10">
        {skill.category}
      </div>
      
      {/* Skill name */}
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-50 transition-colors">
        {skill.name}
      </h3>
      
      {/* Progress container */}
      <div className="space-y-3">
        {/* Level percentage */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Proficiency</span>
          <span className="text-sm font-semibold text-cyan-400">
            {skill.level}%
          </span>
        </div>
        
        {/* Animated progress bar */}
        <div className="relative h-2 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/5">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
          />
          {/* Animated shine effect */}
          <div
            className={`absolute top-0 h-full w-6 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${
              isHovered ? 'translate-x-full' : '-translate-x-full'
            }`}
            style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
          />
        </div>
        
        {/* Skill level indicators */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i < Math.floor(skill.level / 20) 
                  ? 'bg-cyan-400 opacity-100' 
                  : 'bg-white/20 opacity-30'
              }`}
              style={{ transitionDelay: `${(i * 100) + 800}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingParticle = ({ delay }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}
    />
  );
};

export default function Skills() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [passiveVisible, setPassiveVisible] = useState(false);
  const [languagesVisible, setLanguagesVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setSkillsVisible(true), 300);
    const timer2 = setTimeout(() => setPassiveVisible(true), 1500);
    const timer3 = setTimeout(() => setLanguagesVisible(true), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 space-y-24">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            My <span className="text-cyan-400">Skills</span>
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Active Skills Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Core <span className="text-cyan-400">Technologies</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isVisible={skillsVisible} />
            ))}
          </div>
        </section>

        {/* Passive Skills */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Tools & <span className="text-cyan-400">Technologies</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {passiveSkills.map((skill, index) => (
              <div
                key={skill}
                className={`relative px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:bg-white/10 transition-all duration-500 hover:scale-110 ${
                  passiveVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-0 hover:opacity-5 transition-opacity duration-300" />
                <span className="relative z-10">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="text-cyan-400">Languages</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className={`relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 hover:scale-105 hover:bg-white/10 group ${
                  languagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-cyan-400 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center space-y-4">
                  {/* Flag/Icon */}
                  <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{lang.flag}</div>
                  
                  {/* Language name */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-50">{lang.name}</h3>
                  
                  {/* Circular progress */}
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="transform -rotate-90 w-20 h-20" viewBox="0 0 36 36">
                      <path
                        className="text-white/20"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-cyan-400"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${lang.level}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        style={{
                          strokeDasharray: languagesVisible ? `${lang.level}, 100` : '0, 100',
                          transition: 'stroke-dasharray 1s ease-out',
                          transitionDelay: `${index * 200 + 500}ms`,
                          filter: 'drop-shadow(0 0 6px rgba(6,182,212,0.3))'
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-cyan-400">{lang.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Skills Matrix */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Skill <span className="text-cyan-400">Matrix</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto" />
          </div>
          
          {/* Hexagonal grid visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
              {[...activeSkills, ...passiveSkills.slice(0, 5).map(skill => ({ 
                name: skill, 
                level: Math.floor(Math.random() * 30) + 40
              }))].map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hexagon */}
                  <div className="w-20 h-20 flex items-center justify-center text-xs font-semibold text-center leading-tight transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400/40 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                    }}
                  >
                    <span className="text-white group-hover:text-cyan-100 transition-colors drop-shadow-lg">
                      {skill.name.length > 8 ? skill.name.slice(0, 6) + '..' : skill.name}
                    </span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-black/80 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/20 shadow-xl">
                    {skill.name} {skill.level && `- ${skill.level}%`}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating network nodes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 8}s infinite linear`,
                animationDelay: `${Math.random() * 8}s`,
                boxShadow: '0 0 4px rgba(6,182,212,0.5)'
              }}
            />
          ))}
        </div>

        {/* Subtle connecting lines */}
        <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: -1 }}>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(6,182,212,0.2)"
              strokeWidth="0.5"
              style={{
                animation: `pulse ${4 + Math.random() * 4}s infinite ease-in-out alternate`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) translateX(10px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-10vh) translateX(90px) scale(1);
          }
          100% {
            transform: translateY(-100vh) translateX(100px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
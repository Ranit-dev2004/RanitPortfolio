import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const clickCursor = () => setClicked(true);
    const releaseCursor = () => setClicked(false);

    const handleHover = (e) => {
      const target = e.target;
      if (target.matches('a, button, [data-cursor="pointer"]')) {
        setHovering(true);
        setCursorType('pointer');
      } else if (target.matches('h1, h2, h3, h4, h5, h6')) {
        setHovering(true);
        setCursorType('heading');
      } else if (target.matches('input, textarea, [contenteditable]')) {
        setHovering(true);
        setCursorType('text');
      } else {
        setHovering(false);
        setCursorType('default');
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", clickCursor);
    document.addEventListener("mouseup", releaseCursor);
    document.addEventListener("mouseover", handleHover);

    // Hide default cursor globally
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", clickCursor);
      document.removeEventListener("mouseup", releaseCursor);
      document.removeEventListener("mouseover", handleHover);
      document.head.removeChild(style);
    };
  }, []);

  const getMainCursor = () => {
    switch (cursorType) {
      case 'pointer':
        return (
          <div className="relative">
            {/* Hexagon shape */}
            <div 
              className="w-6 h-6 bg-white rotate-45 animate-spin"
              style={{ 
                animationDuration: '3s',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }} 
            />
            <div className="absolute inset-0 w-6 h-6 bg-white/20 rotate-45 animate-pulse" 
              style={{ 
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            />
          </div>
        );
      case 'heading':
        return (
          <div className="relative">
            {/* Triangle */}
            <div 
              className="w-5 h-5 bg-white animate-bounce"
              style={{ 
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }} 
            />
            <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/80 rounded-full" />
          </div>
        );
      case 'text':
        return (
          <div className="w-1 h-7 bg-white animate-pulse" />
        );
      default:
        return (
          <div className="relative">
            {/* Main dot with orbiting elements */}
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
            <div 
              className="absolute -top-1.5 -left-1.5 w-5 h-5 border border-white/30 rounded-full animate-spin"
              style={{ animationDuration: '4s' }}
            >
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full" />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out
          ${clicked ? "scale-150" : "scale-100"}
        `}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          filter: hovering 
            ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4))' 
            : 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))'
        }}
      >
        {getMainCursor()}
      </div>

      {/* Magnetic field effect */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out
          ${hovering ? "opacity-100" : "opacity-30"}
        `}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute border border-white/10 rounded-full animate-ping
              ${i === 0 ? 'w-12 h-12' : i === 1 ? 'w-16 h-16' : 'w-20 h-20'}
            `}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      {/* Trailing particles */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997] transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.5 : 1})`,
        }}
      >
        <div className="relative">
          <div className="w-3 h-3 bg-white/10 rounded-full animate-pulse" />
          <div 
            className="absolute -top-1.5 -left-1.5 w-6 h-6 border border-white/5 rounded-full animate-spin"
            style={{ animationDuration: '6s', animationDirection: 'reverse' }}
          />
        </div>
      </div>

      {/* Long-distance follower */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9996] w-8 h-8 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border border-white/5 rounded-full" />
          <div 
            className="absolute inset-1 border-t border-white/10 rounded-full animate-spin"
            style={{ animationDuration: '8s' }}
          />
        </div>
      </div>
    </>
  );
}
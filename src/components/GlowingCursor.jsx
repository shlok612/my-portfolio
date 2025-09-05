import { useEffect, useState } from 'react';

export const GlowingCursor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = e => {
      const isDark = document.documentElement.classList.contains('dark');

      const glowColor = isDark ? '#a78bfa' : '#6b7280';      // Purple for dark, gray for light
      const shadowColor = isDark ? '#a78bfa' : '#9ca3af';

      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4,
        opacity: 1,
        glowColor,
        shadowColor,
        isDark,
      };
      setParticles(particles => [...particles.slice(-30), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(particles =>
        particles
          .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter(p => p.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map(particle => (
        <span
          key={particle.id}
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            pointerEvents: 'none',
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.glowColor}, transparent)`,
            borderRadius: '50%',
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            filter: `drop-shadow(0 0 10px ${particle.shadowColor})`,
            zIndex: 9999,
            mixBlendMode: particle.isDark ? 'screen' : 'multiply',
          }}
        />
      ))}
    </>
  );
};

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Connection {
  from: Particle;
  to: Particle;
  alpha: number;
}

export default function CanvasBackground({ theme }: { theme: 'dark' | 'light' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions setup with ResizeObserver
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    // Particle pool setup
    const particleCount = Math.min(width < 768 ? 40 : 120, 150);
    const particles: Particle[] = [];
    
    // Choose theme colors
    const isDark = theme === 'dark';
    const primaryColor = isDark ? '0, 229, 255' : '10, 31, 68'; // Electric Cyan (#00E5FF) vs Royal Blue
    const accentColor = isDark ? '255, 215, 0' : '0, 168, 204'; // Luxury Gold (#FFD700)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.85 ? accentColor : primaryColor
      });
    }

    // Grid coordinates for holographic background
    const gridCols = 15;
    const gridRows = 15;

    // Keep track of animation request
    let animationFrameId: number;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Cyber Grid (Subtle Background)
      ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.03)' : 'rgba(10, 31, 68, 0.02)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      const colStep = width / gridCols;
      for (let i = 0; i <= gridCols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * colStep, 0);
        ctx.lineTo(i * colStep, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      const rowStep = height / gridRows;
      for (let i = 0; i <= gridRows; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * rowStep);
        ctx.lineTo(width, i * rowStep);
        ctx.stroke();
      }

      // 2. Render and Connect Particles (Holographic Neural Net)
      particles.forEach((p, index) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.75)`;
        ctx.fill();

        // Connect particles near mouse cursor
        const dxMouse = p.x - mouseRef.current.x;
        const dyMouse = p.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(${primaryColor}, ${0.12 * (1 - distMouse / 180)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Connect neighbours
        for (let j = index + 1; j < particles.length; j++) {
          const neighbor = particles[j];
          const dx = p.x - neighbor.x;
          const dy = p.y - neighbor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            
            // Connect lines stronger near mouse for responsiveness
            const maxAlpha = p.color === accentColor || neighbor.color === accentColor ? 0.18 : 0.08;
            const mouseEffect = distMouse < 185 ? 1.5 : 1.0;
            const alpha = maxAlpha * (1 - dist / 110) * mouseEffect;
            
            ctx.strokeStyle = `rgba(${p.color}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      // 3. Render 3D Rotating Sphere Hologram (Middle Top) to mimic Future Brain Globe
      const sphereX = width * 0.85;
      const sphereY = height * 0.25;
      const sphereRadius = Math.min(width * 0.1, 120);

      if (width > 768 && sphereY < height) {
        ctx.save();
        ctx.translate(sphereX, sphereY);

        const time = Date.now() * 0.0004;
        
        ctx.strokeStyle = isDark ? 'rgba(0, 229, 255, 0.09)' : 'rgba(10, 31, 68, 0.06)';
        ctx.lineWidth = 1;

        // Draw longitudinal wireframe lines
        for (let j = 0; j < 8; j++) {
          ctx.beginPath();
          const angle = time + (j * Math.PI) / 8;
          ctx.ellipse(0, 0, sphereRadius, sphereRadius * Math.abs(Math.sin(angle)), 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw horizontal slices
        const slices = 5;
        for (let k = -slices; k <= slices; k++) {
          const ratio = k / (slices + 1);
          const yOffset = sphereRadius * ratio;
          const xRadius = sphereRadius * Math.cos(Math.asin(ratio));
          
          ctx.beginPath();
          ctx.ellipse(0, yOffset, xRadius, xRadius * 0.25, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Rotating hub core node
        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#00E5FF' : '#0A1F44';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00E5FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse tracking event
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}

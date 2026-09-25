const COLORS = ["255, 241, 184", "233, 196, 106", "196, 160, 255"];

type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  wobble: number;
  phase: number;
  alpha: number;
  color: string;
};

export function emberCanvas(canvas: HTMLCanvasElement, density = 0.00012) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let particles: Particle[] = [];
  let frame = 0;
  let running = false;

  const spawn = (y?: number): Particle => ({
    x: Math.random() * width,
    y: y ?? Math.random() * height,
    r: Math.random() * 1.8 + 0.4,
    vy: Math.random() * 0.45 + 0.12,
    wobble: Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    alpha: Math.random() * 0.6 + 0.25,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  });

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(Math.round(width * height * density), 220);
    particles = Array.from({ length: count }, () => spawn());
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.vy;
      p.phase += 0.01;
      p.x += Math.sin(p.phase) * p.wobble * 0.3;
      if (p.y < -10) Object.assign(p, spawn(height + 10));
      const flicker = p.alpha * (0.75 + Math.sin(p.phase * 3) * 0.25);
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color}, ${flicker})`;
      ctx.shadowColor = `rgba(${p.color}, 0.9)`;
      ctx.shadowBlur = p.r * 6;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    frame = requestAnimationFrame(draw);
  };

  const start = () => {
    if (running) return;
    running = true;
    frame = requestAnimationFrame(draw);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(frame);
  };

  resize();
  const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
  visibility.observe(canvas);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  return () => {
    stop();
    visibility.disconnect();
    resizeObserver.disconnect();
  };
}

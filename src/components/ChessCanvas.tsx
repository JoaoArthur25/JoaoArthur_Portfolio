import { useEffect, useRef } from "react";

const CELL = 64;
const BRASS = { r: 201, g: 163, b: 92 };
const KNIGHT_MOVES = [
  [1, 2], [2, 1], [-1, 2], [-2, 1],
  [1, -2], [2, -1], [-1, -2], [-2, -1],
];

/**
 * Assinatura do hero: um tabuleiro apagado onde as casas acendem em latão
 * perto do cursor, enquanto um "cavalo" invisível passeia sozinho pelo
 * tabuleiro deixando um rastro que esmaece.
 */
export default function ChessCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols = 0;
    let rows = 0;
    let cells = new Float32Array(0);
    let width = 0;
    let height = 0;

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(232, 230, 223, 0.045)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 1; c < cols; c++) {
        ctx.moveTo(c * CELL + 0.5, 0);
        ctx.lineTo(c * CELL + 0.5, height);
      }
      for (let r = 1; r < rows; r++) {
        ctx.moveTo(0, r * CELL + 0.5);
        ctx.lineTo(width, r * CELL + 0.5);
      }
      ctx.stroke();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      cells = new Float32Array(cols * rows);
      if (reduced) {
        ctx.clearRect(0, 0, width, height);
        drawGrid();
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      return () => window.removeEventListener("resize", resize);
    }

    const light = (col: number, row: number, amount: number) => {
      if (col < 0 || row < 0 || col >= cols || row >= rows) return;
      const i = row * cols + col;
      cells[i] = Math.min(1, Math.max(cells[i], amount));
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > width || y > height) return;
      const col = Math.floor(x / CELL);
      const row = Math.floor(y / CELL);
      for (let dc = -2; dc <= 2; dc++) {
        for (let dr = -2; dr <= 2; dr++) {
          const dist = Math.hypot(dc, dr);
          if (dist > 2.4) continue;
          light(col + dc, row + dr, 0.85 * (1 - dist / 2.8));
        }
      }
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Cavalo errante: salta em L a cada batida, rastro esmaece sozinho
    let knightCol = 2;
    let knightRow = 2;
    const hopKnight = () => {
      const options = KNIGHT_MOVES.map(([dc, dr]) => [
        knightCol + dc,
        knightRow + dr,
      ]).filter(([c, r]) => c >= 0 && r >= 0 && c < cols && r < rows);
      if (options.length > 0) {
        const [c, r] = options[Math.floor(Math.random() * options.length)];
        knightCol = c;
        knightRow = r;
        light(c, r, 0.6);
      }
    };
    const knightTimer = window.setInterval(hopKnight, 1600);

    let rafId = 0;
    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      for (let i = 0; i < cells.length; i++) {
        const v = cells[i];
        if (v < 0.01) {
          cells[i] = 0;
          continue;
        }
        cells[i] = v * 0.958;
        const col = i % cols;
        const row = Math.floor(i / cols);
        ctx.fillStyle = `rgba(${BRASS.r}, ${BRASS.g}, ${BRASS.b}, ${(v * 0.16).toFixed(3)})`;
        ctx.fillRect(col * CELL, row * CELL, CELL, CELL);
      }
      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.clearInterval(knightTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__board" aria-hidden="true" />;
}

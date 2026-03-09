"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './GameLab.module.css';

const COLORS = ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981'];

interface Bubble {
    x: number;
    y: number;
    color: string;
    radius: number;
    active: boolean;
}

interface Projectile {
    x: number;
    y: number;
    dx: number;
    dy: number;
    color: string;
}

const GameLab = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    const [nextColor, setNextColor] = useState(COLORS[0]);
    const nextColorRef = useRef(COLORS[0]);

    useEffect(() => {
        if (!gameActive || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let bubbles: Bubble[] = [];
        let projectiles: Projectile[] = [];
        let particles: any[] = [];
        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;
        let shake = 0;

        const initBubbles = () => {
            bubbles = [];
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 8; j++) {
                    bubbles.push({
                        x: j * 60 + 40,
                        y: i * 50 + 40,
                        color: COLORS[Math.floor(Math.random() * COLORS.length)],
                        radius: 20,
                        active: true
                    });
                }
            }
        };

        initBubbles();

        const createExplosion = (x: number, y: number, color: string) => {
            for (let i = 0; i < 15; i++) {
                particles.push({
                    x, y,
                    dx: (Math.random() - 0.5) * 10,
                    dy: (Math.random() - 0.5) * 10,
                    life: 1.0,
                    size: Math.random() * 4 + 2,
                    color
                });
            }
            shake = 12;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const startX = canvas.width / 2;
            const startY = canvas.height - 20;
            const dx = clickX - startX;
            const dy = clickY - startY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 18;

            const colorToShoot = nextColorRef.current;

            projectiles.push({
                x: startX,
                y: startY,
                dx: (dx / distance) * speed,
                dy: (dy / distance) * speed,
                color: colorToShoot
            });

            // Muzzle flash particles
            for (let i = 0; i < 8; i++) {
                particles.push({
                    x: startX + (dx / distance) * 30,
                    y: startY + (dy / distance) * 30,
                    dx: (dx / distance) * 5 + (Math.random() - 0.5) * 5,
                    dy: (dy / distance) * 5 + (Math.random() - 0.5) * 5,
                    life: 0.5,
                    size: 3,
                    color: colorToShoot
                });
            }

            const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            nextColorRef.current = newColor;
            setNextColor(newColor);
        };

        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mousedown', handleClick);

        const update = () => {
            ctx.save();
            if (shake > 0) {
                ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
                shake *= 0.85;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Grid with Pulsing Alpha
            const gridAlpha = 0.05 + Math.sin(Date.now() / 800) * 0.03;
            ctx.strokeStyle = `rgba(59, 130, 246, ${gridAlpha})`;
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 40) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
            }
            for (let i = 0; i < canvas.height; i += 40) {
                ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
            }

            // Draw Aiming Guide with Glow
            ctx.setLineDash([5, 8]);
            ctx.strokeStyle = nextColorRef.current;
            ctx.shadowBlur = 15;
            ctx.shadowColor = nextColorRef.current;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height - 20);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.shadowBlur = 0;

            // Update & Draw Particles
            particles.forEach((p, i) => {
                p.x += p.dx;
                p.y += p.dy;
                p.life -= 0.015;
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    return;
                }

                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size || 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
                ctx.shadowBlur = 0;
            });

            // Cannon Core
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height, 30, Math.PI, Math.PI * 2);
            ctx.fillStyle = nextColor;
            ctx.shadowBlur = 20;
            ctx.shadowColor = nextColor;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Update Projectiles
            projectiles.forEach((p, pIdx) => {
                p.x += p.dx;
                p.y += p.dy;

                // Projectile Tail
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - p.dx * 2, p.y - p.dy * 2);
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 6;
                ctx.lineCap = 'round';
                ctx.globalAlpha = 0.4;
                ctx.stroke();
                ctx.globalAlpha = 1.0;

                ctx.shadowBlur = 25;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                // Highlight
                ctx.beginPath();
                ctx.arc(p.x - 4, p.y - 4, 5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
                ctx.shadowBlur = 0;

                // Check collisions
                bubbles.forEach((b) => {
                    if (b.active) {
                        const dist = Math.sqrt((p.x - b.x) ** 2 + (p.y - b.y) ** 2);
                        if (dist < b.radius + 14) {
                            if (p.color === b.color) {
                                b.active = false;
                                setScore(s => s + 10);
                                createExplosion(b.x, b.y, b.color);
                            } else {
                                shake = 6;
                            }
                            projectiles.splice(pIdx, 1);
                        }
                    }
                });

                if (p.y < -50 || p.x < -50 || p.x > canvas.width + 50 || p.y > canvas.height + 50)
                    projectiles.splice(pIdx, 1);
            });

            // Draw Bubbles
            bubbles.forEach(b => {
                if (b.active) {
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = b.color;
                    ctx.beginPath();
                    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                    const grad = ctx.createRadialGradient(b.x - 6, b.y - 6, 2, b.x, b.y, b.radius);
                    grad.addColorStop(0, '#fff');
                    grad.addColorStop(0.2, b.color);
                    grad.addColorStop(1, b.color);
                    ctx.fillStyle = grad;
                    ctx.fill();

                    // Bubble border
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }
            });

            // Cannon Base Glow
            ctx.shadowBlur = 30;
            ctx.shadowColor = nextColorRef.current;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height, 40, Math.PI, Math.PI * 2);
            ctx.fillStyle = nextColorRef.current;
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.restore();
            if (bubbles.every(b => !b.active)) initBubbles();
            animationFrameId = requestAnimationFrame(update);
        };

        update();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mousedown', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gameActive]);

    return (
        <section id="lab" className={styles.lab}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Developer Mini-Lab</h2>
                <p className={styles.subtitle}>Un pequeño patio de juegos interactivo para demostrar lógica de colisiones y animaciones.</p>

                <div className={`${styles.gameContainer} glass-effect`}>
                    {!gameActive ? (
                        <div className={styles.startOverlay}>
                            <h3>Bubble Tech Lab</h3>
                            <p>Dispara burbujas del mismo color para eliminarlas.</p>
                            <button className={styles.startBtn} onClick={() => setGameActive(true)}>Comenzar Juego</button>
                        </div>
                    ) : (
                        <>
                            <div className={styles.gameHeader}>
                                <div className={styles.nextBadge}>
                                    <span>Próximo:</span>
                                    <div className={styles.colorPreview} style={{ backgroundColor: nextColor }} />
                                </div>
                                <span className={styles.score}>{score} pts</span>
                                <button className={styles.resetBtn} onClick={() => setGameActive(false)}>Salir</button>
                            </div>
                            <canvas ref={canvasRef} width={500} height={400} className={styles.canvas} />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GameLab;

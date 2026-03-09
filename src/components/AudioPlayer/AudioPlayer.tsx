"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Persist audio state across potential reloads if needed, 
    // but for simple portfolio, we'll just handle the session.

    const handleStartExperience = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setShowIntro(false);
                })
                .catch(err => {
                    console.error("Playback failed:", err);
                    setShowIntro(false); // Still hide even if it fails to not block user
                });
        }
    };

    const togglePlay = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.error("Playback failed:", err));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            {showIntro && (
                <div className={styles.introOverlay}>
                    <div className={`${styles.introCard} glass-effect`}>
                        <div className={styles.introContent}>
                            <span className={styles.badge}>Experiencia Inmersiva</span>
                            <h1>Explora el Futuro</h1>
                            <p>Bienvenido al portafolio de <strong>Christian Arturo Estrada Valencia</strong>.</p>
                            <div className={styles.attributionBox}>
                                <span className={styles.composerLabel}>Música Original por:</span>
                                <span className={styles.composerName}>Arturo Estrada</span>
                            </div>
                            <button className={styles.startButton} onClick={handleStartExperience}>
                                ENTRAR A LA EXPERIENCIA
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`${styles.audioContainer} ${isPlaying ? styles.isPlaying : ''}`}>
                <audio
                    ref={audioRef}
                    src="/mimetro.mp3.mp3"
                    loop
                    preload="auto"
                />
                <button
                    className={`${styles.audioButton} glass-effect`}
                    onClick={togglePlay}
                    title={isPlaying ? "Pausar mi melodía" : "Escuchar mi composición"}
                >
                    <div className={styles.iconContainer}>
                        {isPlaying ? (
                            <div className={styles.playingBars}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        ) : (
                            <span className={styles.muteIcon}>▶</span>
                        )}
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.statusLabel}>
                            {isPlaying ? 'SONANDO' : 'SILENCIO'}
                        </span>
                        <span className={styles.titleLabel}>Arturo Estrada</span>
                        <span className={styles.subLabel}>Compositor</span>
                    </div>
                </button>
            </div>
        </>
    );
};

export default AudioPlayer;

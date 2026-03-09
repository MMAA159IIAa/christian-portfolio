"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const startAudio = () => {
            if (!hasInteracted && audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        setHasInteracted(true);
                        console.log("Autoplay successful");
                    })
                    .catch(() => {
                        console.log("Autoplay blocked, waiting for more interactions");
                    });
            }
        };

        // Listen for ANY interaction to trigger audio
        const events = ['click', 'touchstart', 'scroll', 'keydown'];
        events.forEach(event => window.addEventListener(event, startAudio, { once: true }));

        return () => {
            events.forEach(event => window.removeEventListener(event, startAudio));
        };
    }, [hasInteracted]);

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
        setHasInteracted(true);
    };

    return (
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
                        {isPlaying ? 'SONANDO AHORA' : 'REPRODUCIR MÚSICA'}
                    </span>
                    <span className={styles.titleLabel}>Composición Original</span>
                    <span className={styles.authorLabel}>por Arturo Estrada</span>
                </div>
            </button>
        </div>
    );
};

export default AudioPlayer;

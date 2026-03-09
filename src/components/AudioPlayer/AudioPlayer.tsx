"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.log("Autoplay blocked or error:", err));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={styles.audioContainer}>
            <audio
                ref={audioRef}
                src="https://cdn.pixabay.com/audio/2022/03/10/audio_c36190696c.mp3" // Ambient Tech/Space Track
                loop
                preload="auto"
            />
            <button
                className={`${styles.audioButton} ${isPlaying ? styles.playing : ''} glass-effect`}
                onClick={togglePlay}
                title={isPlaying ? "Pausar música" : "Reproducir música ambiental"}
            >
                <div className={styles.iconContainer}>
                    {isPlaying ? (
                        <div className={styles.playingBars}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    ) : (
                        <span className={styles.muteIcon}>♪</span>
                    )}
                </div>
                <span className={styles.label}>
                    {isPlaying ? 'Ambiente ON' : 'Música'}
                </span>
            </button>
        </div>
    );
};

export default AudioPlayer;

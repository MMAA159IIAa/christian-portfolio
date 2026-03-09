import styles from './Videos.module.css';

const videos = [
    {
        title: 'Automatización con AI Builder',
        platform: 'YouTube',
        embedId: 'dQw4w9WgXcQ', // Placeholder, user will replace with real IDs
        description: 'Explorando cómo automatizar procesos complejos usando IA.'
    },
    {
        title: 'Rapid Prototyping en Acción',
        platform: 'TikTok',
        embedId: 'example-tiktok-id',
        description: 'De 0 a producto funcional en tiempo récord.'
    }
];

const Videos = () => {
    return (
        <section id="videos" className={styles.videos}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Contenido en Video</h2>
                <p className={styles.subtitle}>Compartiendo conocimientos sobre IA, automatización e innovación tecnológica.</p>

                <div className={styles.grid}>
                    {videos.map((video, index) => (
                        <div key={index} className={`${styles.videoCard} glass-effect`}>
                            <div className={styles.videoWrapper}>
                                {/* Simplified embed placeholder - user can put actual iframe here */}
                                <div className={styles.placeholder}>
                                    <span>Reproductor de {video.platform}</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                                <div className={styles.shareActions}>
                                    <button className={styles.shareBtn}>Compartir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;

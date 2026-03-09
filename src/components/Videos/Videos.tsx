import styles from './Videos.module.css';

const videos = [
    {
        title: 'Desde Hermosillo Para El Mundo - Mi Historia',
        platform: 'TikTok',
        embedId: '7515950139605830920',
        description: 'Compartiendo mi visión y el inicio de este gran proyecto de comunicación y tecnología.'
    },
    {
        title: 'Tecnología + Comunicación',
        platform: 'YouTube',
        embedId: 'dQw4w9WgXcQ', // Placeholder, user will replace when ready
        description: 'Cómo la inteligencia artificial está potenciando la creación de contenido digital.'
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
                                {video.platform === 'TikTok' ? (
                                    <iframe
                                        src={`https://www.tiktok.com/embed/v2/${video.embedId}`}
                                        className={styles.iframe}
                                        allowFullScreen
                                        allow="autoplay; encrypted-media"
                                    ></iframe>
                                ) : (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.embedId}`}
                                        className={styles.iframe}
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                )}
                            </div>
                            <div className={styles.content}>
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;

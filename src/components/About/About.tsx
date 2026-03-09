import styles from './About.module.css';

const About = () => {
    const pillars = [
        { title: 'Innovación', description: 'Tecnología moderna para problemas reales.', icon: '💡' },
        { title: 'Automatización', description: 'Reducción de procesos manuales.', icon: '⚙️' },
        { title: 'Desarrollo IA', description: 'Aceleración asistida por inteligencia artificial.', icon: '🤖' },
    ];

    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Filosofía del Constructor</h2>
                        <p className={styles.philosophy}>
                            Creatividad Humana + Aceleración IA = <span className="gradient-text">Innovación Rápida</span>
                        </p>
                        <p className={styles.text}>
                            Mi trabajo se basa en el modelo <strong>Human + AI Collaboration</strong>.
                            Además de mi enfoque en desarrollo tecnológico, cuento con experiencia en comunicación digital
                            y creación de contenido frente a cámara mediante mi proyecto <strong>Desde Hermosillo Para El Mundo</strong>.
                        </p>
                        <div className={styles.pillars}>
                            {pillars.map((item, index) => (
                                <div key={index} className={`${styles.pillarCard} glass-effect`}>
                                    <span className={styles.pillarIcon}>{item.icon}</span>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.visual}>
                        <div className={`${styles.card} glass-effect`}>
                            <div className={styles.cardHighlight}></div>
                            <h3>Objetivo: Impacto Real</h3>
                            <p>Crear tecnología que optimice procesos, mejore la productividad y genere valor real.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

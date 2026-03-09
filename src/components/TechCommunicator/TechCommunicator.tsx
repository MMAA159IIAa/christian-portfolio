import styles from './TechCommunicator.module.css';

const TechCommunicator = () => {
    return (
        <section id="communicator" className={styles.communicator}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.sectionTitle}>Tech Communicator</h2>
                        <h3 className={styles.projectTitle}>Desde Hermosillo Para El Mundo</h3>
                        <p className={styles.description}>
                            Proyecto de contenido digital enfocado en comunicación, interacción con audiencia
                            y creación de comunidad en plataformas sociales.
                        </p>
                        <p className={styles.details}>
                            El proyecto consiste en la producción de contenido y transmisiones en vivo donde se comparten
                            ideas, reflexiones y temas de interés social y tecnológico desde una perspectiva local con alcance global.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={`${styles.statCard} glass-effect`}>
                                <span className={styles.statIcon}>🎥</span>
                                <div>
                                    <h4>Contenido</h4>
                                    <p>Producción audiovisual</p>
                                </div>
                            </div>
                            <div className={`${styles.statCard} glass-effect`}>
                                <span className={styles.statIcon}>🎙</span>
                                <div>
                                    <h4>Comunicación</h4>
                                    <p>Transmisiones en vivo</p>
                                </div>
                            </div>
                            <div className={`${styles.statCard} glass-effect`}>
                                <span className={styles.statIcon}>🌎</span>
                                <div>
                                    <h4>Comunidad</h4>
                                    <p>Engagement global</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.skillsBox}>
                        <div className={`${styles.skillsCard} glass-effect`}>
                            <h3>Habilidades Desarrolladas</h3>
                            <ul>
                                <li>Comunicación frente a cámara 🎥</li>
                                <li>Storytelling digital 📱</li>
                                <li>Creación de contenido para redes 🌎</li>
                                <li>Engagement con audiencia</li>
                            </ul>
                            <div className={styles.badge}>Tech + Communication</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechCommunicator;

"use client";
import Image from 'next/image';
import styles from './CV.module.css';

const CV = () => {
    return (
        <section id="cv" className={styles.cv}>
            <div className="container">
                <div className={`${styles.paper} glass-effect`}>
                    <div className={styles.header}>
                        <div className={styles.headerContent}>
                            <div className={styles.cvPhotoContainer}>
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Christian Arturo Estrada Valencia"
                                    width={150}
                                    height={150}
                                    className={styles.cvPhoto}
                                />
                            </div>
                            <div className={styles.headerText}>
                                <h1>Christian Arturo Estrada Valencia</h1>
                                <p>AI Builder | Automation Developer | Innovación Tecnológica</p>
                                <div className={styles.contactInfo}>
                                    <span>📍 Hermosillo, Sonora, México</span>
                                    <span>📧 leechrslg5@gmail.com</span>
                                    <span>📞 +52 662 172 8838</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Perfil Profesional</h2>
                        <p>
                            Desarrollador enfocado en inteligencia artificial aplicada, automatización de procesos y
                            comunicación digital. Especializado en combinar creatividad humana con herramientas de IA
                            para construir productos funcionales. Además, soy creador de contenido y comunicador digital
                            a través del proyecto "Desde Hermosillo Para El Mundo".
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.leftCol}>
                            <div className={styles.section}>
                                <h2>Habilidades Técnicas</h2>
                                <div className={styles.skillGroup}>
                                    <h4>Inteligencia Artificial</h4>
                                    <p>ChatGPT, Google Antigravity, MS 365 Copilot, AI-assisted development.</p>
                                </div>
                                <div className={styles.skillGroup}>
                                    <h4>Automatización</h4>
                                    <p>MS Power Automate, AI Builder.</p>
                                </div>
                                <div className={styles.skillGroup}>
                                    <h4>Desarrollo</h4>
                                    <p>Python, SQLite, Tkinter, Desarrollo Web.</p>
                                </div>
                            </div>
                            <div className={styles.section}>
                                <h2>Idiomas</h2>
                                <p>Español — Nativo</p>
                                <p>Inglés — Intermedio Técnico</p>
                            </div>
                        </div>

                        <div className={styles.rightCol}>
                            <div className={styles.section}>
                                <h2>Experiencia Profesional</h2>
                                <div className={styles.item}>
                                    <h3>Fundador y Desarrollador Tecnológico</h3>
                                    <p className={styles.company}>Es Tu Mundo Tech</p>
                                    <p className={styles.date}>2024 – Actualidad</p>
                                    <ul>
                                        <li>Automatización de procesos empresariales y transformación digital.</li>
                                        <li>Implementación de herramientas de IA y análisis de datos con Power BI.</li>
                                    </ul>
                                </div>
                                <div className={styles.item}>
                                    <h3>Creador de Contenido Digital</h3>
                                    <p className={styles.company}>Proyecto: Desde Hermosillo Para El Mundo</p>
                                    <p className={styles.date}>2023 – Actualidad</p>
                                    <ul>
                                        <li>Producción de contenido audiovisual y transmisiones en vivo.</li>
                                        <li>Storytelling digital y engagement con audiencias globales.</li>
                                        <li>Desarrollo de comunidad digital y habilidades de presentación.</li>
                                    </ul>
                                </div>
                                <div className={styles.item}>
                                    <h3>Desarrollo Independiente de Software</h3>
                                    <p className={styles.date}>2025 – Actualidad</p>
                                    <ul>
                                        <li>Diseño de soluciones utilizando programación asistida por IA.</li>
                                        <li>Uso de metodologías agile y rapid prototyping.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className={styles.downloadBtn} onClick={() => window.print()}>
                        Descargar CV Profesional (PDF)
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CV;

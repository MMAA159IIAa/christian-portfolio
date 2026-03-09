import styles from './Projects.module.css';

const projects = [
    {
        title: 'Plataforma de Participación Ciudadana',
        link: 'https://congreso-ciudadano.vercel.app/votaciones',
        description: 'Plataforma digital diseñada para facilitar el voto ciudadano y la participación pública mediante tecnología web accesible.',
        meta: 'Desarrollado con asistencia de IA (ChatGPT & Antigravity)',
        tech: ['React', 'Next.js', 'Asistencia IA'],
    },
    {
        title: 'Sistema de Automatización Administrativa',
        description: 'Solución de software de escritorio diseñada para automatizar la gestión de servicios administrativos para empresas.',
        tech: ['Python', 'SQLite', 'Tkinter'],
        features: ['Registro de clientes', 'Seguimiento de servicios', 'Alertas de vencimiento', 'Reportes automáticos'],
    },
    {
        title: 'AMOURA',
        description: 'Concepto de plataforma para matchmaking emocional basado en compatibilidad psicológica mediante inteligencia artificial.',
        tech: ['IA', 'Embeddings Semánticos', 'Algoritmos de Compatibilidad'],
        features: ['Onboarding conversacional IA', 'Análisis de perfil psicológico', 'Emparejamiento emocional'],
    },
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={`${styles.card} glass-effect`}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.title}>{project.title}</h3>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        Demo en Vivo ↗
                                    </a>
                                )}
                            </div>
                            <p className={styles.description}>{project.description}</p>
                            {project.meta && <p className={styles.meta}>{project.meta}</p>}

                            {project.features && (
                                <ul className={styles.features}>
                                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            )}

                            <div className={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i} className={styles.techTag}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

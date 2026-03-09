import styles from './TechStack.module.css';

const techGroups = [
    {
        name: 'Inteligencia Artificial',
        items: ['ChatGPT', 'Google Antigravity', 'MS 365 Copilot'],
    },
    {
        name: 'Automatización',
        items: ['MS Power Automate', 'AI Builder'],
    },
    {
        name: 'Análisis de Datos',
        items: ['MS Power BI', 'Excel Avanzado'],
    },
    {
        name: 'Programación',
        items: ['Python', 'SQLite', 'Tkinter'],
    },
    {
        name: 'Desarrollo Web',
        items: ['React', 'Next.js', 'Typescript', 'CSS Modules'],
    },
];

const TechStack = () => {
    return (
        <section className={styles.techStack}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Stack Tecnológico</h2>
                <div className={styles.grid}>
                    {techGroups.map((group, index) => (
                        <div key={index} className={`${styles.group} glass-effect`}>
                            <h3>{group.name}</h3>
                            <div className={styles.itemGrid}>
                                {group.items.map((item, i) => (
                                    <div key={i} className={styles.techItem}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

import styles from './Workflow.module.css';

const steps = [
    {
        id: '01',
        title: 'Arquitectura del Proyecto',
        description: 'Definición de la estructura y requisitos técnicos del proyecto.'
    },
    {
        id: '02',
        title: 'Generación Asistida por IA',
        description: 'Uso de ChatGPT y Antigravity para generar código base y lógica central.'
    },
    {
        id: '03',
        title: 'Iteración Rápida',
        description: 'Ciclos continuos de feedback para refinar funcionalidades.'
    },
    {
        id: '04',
        title: 'Pruebas y Refinamiento',
        description: 'Control de calidad humano para asegurar precisión y fiabilidad.'
    },
    {
        id: '05',
        title: 'Despliegue Funcional',
        description: 'Lanzamiento de soluciones robustas en entornos como Vercel.'
    }
];

const Workflow = () => {
    return (
        <section className={styles.workflow}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Flujo de Trabajo Asistido por IA</h2>
                <p className={styles.subtitle}>Creatividad humana + multiplicadores de fuerza IA para un desarrollo acelerado.</p>

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepId}>{step.id}</span>
                                <div className={styles.line}></div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;

import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroGrid}>
                    <div className={styles.photoContainer}>
                        <Image
                            src="/images/profile.jpg"
                            alt="Christian Arturo Estrada Valencia"
                            width={350}
                            height={350}
                            className={styles.profilePhoto}
                            priority
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <span>Creatividad Humana + IA</span>
                        </div>
                        <h1 className={styles.title}>
                            Christian Arturo <br />
                            <span className="gradient-text">Estrada Valencia</span>
                        </h1>
                        <p className={styles.role}>AI Builder | Automation Developer | Innovador Tecnológico</p>
                        <p className={styles.description}>
                            Desarrollador enfocado en construir plataformas digitales, sistemas automatizados y
                            soluciones tecnológicas utilizando inteligencia artificial de vanguardia.
                        </p>
                        <div className={styles.actions}>
                            <a href="#projects" className={styles.primaryBtn}>Ver Proyectos</a>
                            <a href="#cv" className={styles.secondaryBtn}>Ver CV Profesional</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

"use client";
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Vamos a Colaborar</h2>
                        <p className={styles.text}>
                            ¿Listo para acelerar tu próximo proyecto con IA y automatización?
                            Ponte en contacto y construyamos algo excepcional.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Email</span>
                                <a href="mailto:leechrslg5@gmail.com">leechrslg5@gmail.com</a>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Teléfono</span>
                                <a href="tel:+526621728838">+52 662 172 8838</a>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Ubicación</span>
                                <span>Hermosillo, Sonora, México</span>
                            </div>
                        </div>
                    </div>

                    <form className={`${styles.form} glass-effect`}>
                        <div className={styles.inputGroup}>
                            <label>Nombre</label>
                            <input type="text" placeholder="Tu Nombre" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Email</label>
                            <input type="email" placeholder="email@ejemplo.com" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Mensaje</label>
                            <textarea placeholder="Cuéntame sobre tu proyecto" rows={5} required></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

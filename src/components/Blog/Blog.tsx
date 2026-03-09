"use client";
import { useState } from 'react';
import styles from './Blog.module.css';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    content: string[];
}

const posts: BlogPost[] = [
    {
        title: 'El Futuro del Desarrollo Asistido por IA',
        excerpt: 'Cómo las herramientas como Antigravity y ChatGPT están rediseñando el panorama de la ingeniería.',
        date: 'Marzo 2026',
        category: 'Tecnología',
        content: [
            "Durante décadas, el desarrollo de software ha sido un proceso que depende completamente del conocimiento humano. Los programadores escriben código, prueban funcionalidades y corrigen errores manualmente. Sin embargo, la aparición de herramientas de inteligencia artificial ha comenzado a transformar profundamente este proceso.",
            "Hoy en día, el desarrollo de software ya no es solamente una actividad humana. Es una colaboración entre humanos y sistemas de inteligencia artificial.",
            "Herramientas como ChatGPT y Google Antigravity están redefiniendo la forma en que los desarrolladores diseñan, construyen y despliegan aplicaciones.",
            "El modelo emergente de desarrollo se basa en un principio simple: **Human creativity + Artificial Intelligence = Accelerated Innovation**.",
            "Los desarrolladores ahora pueden utilizar IA para generar código base, resolver problemas complejos, crear prototipos rápidamente, optimizar algoritmos y depurar errores.",
            "Esto permite que los equipos tecnológicos se enfoquen más en arquitectura, diseño y estrategia, mientras que la inteligencia artificial ayuda a acelerar tareas repetitivas.",
            "Plataformas como Google Antigravity introducen un concepto muy interesante: agentes de desarrollo que pueden ejecutar múltiples tareas dentro de un entorno de programación.",
            "El desarrollo asistido por IA no significa que los programadores desaparezcan. Al contrario. Significa que los desarrolladores ahora se convierten en arquitectos de soluciones, capaces de construir sistemas más complejos en menos tiempo."
        ]
    },
    {
        title: 'Automatización de Procesos con Python',
        excerpt: 'Ejemplos prácticos del uso de Python para optimizar cargas de trabajo administrativas pesadas.',
        date: 'Febrero 2026',
        category: 'Automatización',
        content: [
            "Muchas empresas todavía dependen de procesos manuales para gestionar información, generar reportes o administrar datos de clientes. Estas tareas consumen tiempo valioso que podría utilizarse para actividades más estratégicas.",
            "Aquí es donde entra la automatización.",
            "Lenguajes como Python permiten crear soluciones simples pero poderosas para optimizar tareas administrativas repetitivas.",
            "Python se ha convertido en uno de los lenguajes más utilizados para automatización debido a su simplicidad y versatilidad. Con Python es posible automatizar reportes, procesar archivos, organizar bases de datos y crear scripts de administración.",
            "Un ejemplo común es la automatización de gestión de servicios empresariales. Con un sistema desarrollado en Python se puede registrar clientes, monitorear servicios activos, generar alertas de vencimiento y producir reportes automáticos.",
            "Este tipo de sistema puede utilizar tecnologías como SQLite para almacenamiento de datos, Tkinter para interfaces gráficas y PyInstaller para generar aplicaciones ejecutables.",
            "Implementar automatización con Python genera reducción de errores humanos, ahorro de tiempo, mayor eficiencia operativa y mejor organización de datos."
        ]
    },
    {
        title: 'Prototipado Rápido: De la Idea a Vercel en Horas',
        excerpt: 'La metodología detrás del desarrollo de productos digitales a alta velocidad.',
        date: 'Enero 2026',
        category: 'Flujo de Trabajo',
        content: [
            "En el pasado, desarrollar un producto digital podía tomar meses antes de que existiera una primera versión funcional.",
            "Hoy en día, gracias a herramientas modernas y desarrollo asistido por inteligencia artificial, es posible pasar de una idea a un producto desplegado en cuestión de horas. Este proceso se conoce como Rapid Prototyping.",
            "El prototipado rápido consiste en construir versiones funcionales de un producto digital en el menor tiempo posible. El objetivo no es crear un producto perfecto desde el inicio, sino crear algo funcional que permita probar ideas, validar conceptos y obtener retroalimentación.",
            "Un flujo de trabajo moderno puede verse así: Definir la idea, diseñar la arquitectura básica, generar código con herramientas de IA, probar funcionalidades y desplegar rápidamente.",
            "Herramientas como Vercel permiten desplegar aplicaciones web en minutos.",
            "El prototipado rápido permite experimentar con nuevas ideas, validar proyectos antes de invertir demasiado tiempo y lanzar productos digitales más rápido.",
            "El futuro del desarrollo tecnológico pertenece a quienes pueden convertir ideas en productos reales rápidamente."
        ]
    },
    {
        title: 'IA Generativa en el Mundo Real',
        excerpt: 'Más allá del código: cómo la IA generativa impacta el contenido y la estrategia digital.',
        date: 'Diciembre 2025',
        category: 'Innovación',
        content: [
            "La IA generativa no se limita a escribir código. Su impacto se extiende a la creación de contenido visual, auditivo y estratégico.",
            "Estamos viendo una explosión de herramientas que permiten a creativos y estrategas iterar en segundos lo que antes tomaba días.",
            "La clave está en saber curar y dirigir a la IA para obtener resultados que resuenen con audiencias reales."
        ]
    },
    {
        title: 'Arquitecturas Modernas con Next.js 15',
        excerpt: 'Explorando las novedades de Next.js para aplicaciones escalables y ultra-rápidas.',
        date: 'Noviembre 2025',
        category: 'Frontend',
        content: [
            "Next.js sigue liderando el camino en el ecosistema React. Con la versión 15, el enfoque en Server Components y optimización automática ha llegado a un nuevo nivel.",
            "La arquitectura orientada al servidor permite manejar datos sensibles con mayor seguridad y mejorar significativamente el SEO por defecto.",
            "Dominar estas herramientas es esencial para cualquier desarrollador que aspire a construir la web del futuro."
        ]
    },
    {
        title: 'Ciberseguridad en la Era de la IA',
        excerpt: 'Nuevos retos y soluciones para proteger infraestructuras digitales inteligentes.',
        date: 'Octubre 2025',
        category: 'Seguridad',
        content: [
            "A medida que los sistemas se vuelven más inteligentes, también lo hacen las amenazas. La ciberseguridad asistida por IA es ahora una necesidad, no un lujo.",
            "Desde la detección de anomalías hasta la respuesta automática ante incidentes, la IA es nuestro mejor aliado y, a veces, un reto formidable.",
            "Proteger la privacidad de los datos en modelos de lenguaje es uno de los debates técnicos más importantes de nuestra década."
        ]
    }
];

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    return (
        <section id="blog" className={styles.blog}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Ideas y Perspectivas</h2>
                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <article key={index} className={`${styles.postCard} glass-effect`}>
                            <span className={styles.category}>{post.category}</span>
                            <h3 className={styles.title}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.footer}>
                                <span className={styles.date}>{post.date}</span>
                                <button
                                    className={styles.readMore}
                                    onClick={() => setSelectedPost(post)}
                                >
                                    Leer Más →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {selectedPost && (
                <div className={styles.modalOverlay} onClick={() => setSelectedPost(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedPost(null)}>×</button>
                        <span className={styles.modalCategory}>{selectedPost.category}</span>
                        <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
                        <span className={styles.modalDate}>{selectedPost.date}</span>
                        <div className={styles.modalBody}>
                            {selectedPost.content.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;

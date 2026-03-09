"use client";
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} glass-effect`}>
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo}>
                    <span className="gradient-text">Arturo Valencia</span>
                </Link>
                <div className={styles.links}>
                    <Link href="#about">About</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#cv">CV</Link>
                    <Link href="#blog">Blog</Link>
                    <Link href="#contact" className={styles.contactBtn}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

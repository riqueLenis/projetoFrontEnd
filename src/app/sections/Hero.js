import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.heroContent} container`}>
        <h1 className={styles.title}>Barra View</h1>
        <p className={styles.subtitle}>
          Apartamentos de 2 e 3 quartos em uma localização privilegiada
        </p>
        <Link href="#saiba-mais" className={styles.ctaLink}>
          Saiba mais <span>&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
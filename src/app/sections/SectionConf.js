import Image from 'next/image';
import styles from '../styles/SectionConf.module.css';

const TrustSection = () => {
  return (
    <section className={styles.trustSection}>
      <div className={`${styles.container} container`}>
        {}
        <div className={styles.imageContainer} style={{ backgroundImage: `url(/imagens/paiFilho.png)` }}>
        {}
        </div>

        {}
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Construímos confiança e realizamos sonhos!
          </h2>
          <p className={styles.description}>
            A Liva se destaca no mercado imobiliário por sua dedicação em criar lares que inspiram e oferecem qualidade de vida. Cada projeto é pensado nos mínimos detalhes, desde a escolha da localização até o acabamento final, garantindo a satisfação e a realização dos nossos clientes.
          </p>
          <button className={styles.ctaButton}>Sobre nós</button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
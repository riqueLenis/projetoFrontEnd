import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        {}
        <div className={styles.footerColumn}>
          <Image src="/imagens/livaLogo.png" alt="Liva Logo" width={100} height={50} />
          <p className={styles.description}>
            Construindo confiança e realizando sonhos através de empreendimentos que inspiram.
          </p>
        </div>

        {}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Navegação</h4>
          <Link href="#empreendimentos">Empreendimentos</Link>
          <Link href="#sobre-nos">Sobre nós</Link>
          <Link href="#contato">Contato</Link>
        </div>

        {}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Contato</h4>
          <p>contato@liva.com.br</p>
          <p>(11) 99909-9091</p>
        </div>

        {}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Siga-nos</h4>
          <div className={styles.socialIcons}>
            {}
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyrightBar}>
        <div className="container">
          <p>© 2025 Liva Empreendimentos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
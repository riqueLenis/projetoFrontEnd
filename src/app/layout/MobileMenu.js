import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import styles from '../styles/MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.header}>
        <Image src="/imagens/livaLogo.png" alt="Liva Logo" width={80} height={40} />
        <button onClick={onClose} className={styles.closeButton}>
          <IoMdClose />
        </button>
      </div>

      <nav className={styles.nav}>
        <Link href="/" onClick={onClose}>HOME</Link>
        <Link href="#sobre-nos" onClick={onClose}>SOBRE A LIVA</Link>
        <Link href="#empreendimentos" onClick={onClose}>EMPREENDIMENTOS</Link>
        <Link href="#contato" onClick={onClose}>CONTATO</Link>
      </nav>

      <div className={styles.footer}>
        <p>Acompanhe nas redes</p>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <button className={styles.whatsappButton}>
          <FaWhatsapp /> WHATSAPP
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
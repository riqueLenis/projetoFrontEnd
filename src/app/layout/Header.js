'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
import MobileMenu from '../layout/MobileMenu';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContainer} container`}>
          <Link href="/">
            <Image
              src="/imagens/livaLogo.png"
              alt="Liva Logo"
              width={80}
              height={40}
              className={styles.logo}
            />
          </Link>
          <nav className={styles.nav}>
            <Link href="#empreendimentos">Empreendimentos</Link>
            <Link href="#sobre-nos">Sobre nós</Link>
            <Link href="#contato">Contato</Link>
          </nav>
          {}
          <div className={styles.desktopActions}>
            {}
            <div className={styles.socialIconsHeader}>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
            {}
            <div className={styles.contactButton}>
             <button>
                <FaWhatsapp /> WhatsApp
             </button> 
            </div>
          </div>
          <div className={styles.menuIcon} onClick={openMenu}>
            <FiMenu />
          </div>
        </div>
      </header>
      {}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
import Image from 'next/image';
import styles from '../styles/ProjetoCard.module.css';

const ProjectCard = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={`Imagem do projeto ${title}`}
        width={400}
        height={500}
        className={styles.image}
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
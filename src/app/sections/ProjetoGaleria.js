import ProjectCard from '../ui/ProjetoCard';
import styles from '../styles/ProjetoGaleria.module.css';

const projects = [
  { id: 1, title: 'Sala de Estar', image: '/imagens/salaDeEstar.png' },
  { id: 2, title: 'De Frente para o Oceano', image: '/imagens/Rectangle_1.png' },
  { id: 3, title: 'Sala Master', image: '/imagens/Rectangle_2.png' },
  { id: 4, title: 'Com Piscina', image: '/imagens/Rectangle_3.png' },
  { id: 5, title: 'Sala Gourmet', image: '/imagens/Rectangle_4.png' },
  { id: 6, title: 'Orla Residência', image: '/imagens/Rectangle_5.png' },
];

const ProjectsGallery = () => {
  return (
    <section className={styles.gallerySection} id="empreendimentos">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Confira todos os empreendimentos da Liva</h2>
          {}
          <div className={styles.filter}>
            <button className={styles.active}>Capital</button>
          </div>
        </div>
        <div className={styles.grid}>
          {}
          {projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} image={project.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
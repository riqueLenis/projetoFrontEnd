'use client';

import { useState } from 'react';
import styles from '../styles/ContatoForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Formulário:', formData);
    alert(`Obrigado, ${formData.name}! Seus dados foram registrados no console.`);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection} id="contato">
      <div className={`${styles.container} container`}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Fale agora com um consultor de vendas</h2>
          <p className={styles.subtitle}>
            Estamos prontos para te ajudar a encontrar o imóvel dos seus sonhos. Preencha o formulário e entraremos em contato.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" name="name" placeholder="Nome" required value={formData.name} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Telefone" required value={formData.phone} onChange={handleChange} />
          </div>
          <input type="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Mensagem" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
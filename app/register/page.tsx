'use client';
import React from 'react';
import styles from './register.module.css'; 

const RegisterPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Logica de registro aqui - -
  };

  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Cadastre-se</h1>
        <div className={styles.formInputBox}>
          <input className={styles.formInput} type="text" required id="name" />
          <label className={styles.formLabel} htmlFor="name">Nome</label>
        </div>
        <div className={styles.formInputBox}>
          <input className={styles.formInput} type="email" required id="email" />
          <label className={styles.formLabel} htmlFor="email">Email</label>
        </div>
        <div className={styles.formInputBox}>
          <input className={styles.formInput} type="password" required id="password" />
          <label className={styles.formLabel} htmlFor="password">Senha</label>
        </div>
        <button className={styles.submitButton} type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;

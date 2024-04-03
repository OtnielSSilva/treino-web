'use client';
import React from 'react';
import styles from './login.module.css';

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Authentication logic goes here
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Login</h2>
        <div className={styles.formInputBox}>
          <input className={styles.formInput} type='email' required id='email' />
          <label className={styles.formLabel} htmlFor='email'>Email</label>
        </div>
        <div className={styles.formInputBox}>
          <input className={styles.formInput} type='password' required id='password' />
          <label className={styles.formLabel} htmlFor='password'>Senha</label>
        </div>
        <button className={styles.submitButton} type='submit'>Entrar</button>
        <div className={styles.registerLink}>
          Não tem uma conta? <a href='#'>Registre-se</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

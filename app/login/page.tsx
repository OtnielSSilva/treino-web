'use client';
import React from 'react';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <form
        className={styles.loginForm}
        // onSubmit={handleSubmit}
        action='http://localhost:8180/login/'
        method='POST'
      >
        <h2 className={styles.formTitle}>Login</h2>
        <div className={styles.formInputBox}>
          <input
            className={styles.formInput}
            type='email'
            required
            id='email'
            name='email'
            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,50}$'
          />
          <label className={styles.formLabel} htmlFor='email'>
            Email
          </label>
        </div>
        <div className={styles.formInputBox}>
          <input
            className={styles.formInput}
            type='password'
            required
            id='senha'
            name='senha'
            pattern='.{8,}'
          />
          <label className={styles.formLabel} htmlFor='senha'>
            Senha
          </label>
        </div>
        <button className={styles.submitButton} type='submit'>
          Entrar
        </button>
        <div className={styles.registerLink}>
          Não tem uma conta? <a href='#'>Registre-se</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

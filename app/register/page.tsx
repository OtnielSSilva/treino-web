import React from 'react';
import styles from './register.module.css';

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.registerContainer}>
      <form
        className={styles.registerForm}
        action='http://localhost:8180/registro/'
        method='POST'
      >
        <h1 className={styles.formTitle}>Cadastre-se</h1>
        <div className={styles.formInputBox}>
          <input
            className={styles.formInput}
            type='text'
            required
            id='name'
            name='nome'
            pattern='[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}'
          />
          <label className={styles.formLabel} htmlFor='name'>
            Nome
          </label>
        </div>
        <div className={styles.formInputBox}>
          <input
            className={styles.formInput}
            type='email'
            required
            id='email'
            name='email'
            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
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
            id='password'
            name='senha'
            pattern='.{8,}'
          />
          <label className={styles.formLabel} htmlFor='password'>
            Senha
          </label>
        </div>
        <button className={styles.submitButton} type='submit'>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

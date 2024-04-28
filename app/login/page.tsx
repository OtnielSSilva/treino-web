'use client';
import React from 'react';
import styles from './login.module.css';
import Form from '@/components/Form/Form';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <Form
        type='login'
        formTitle='Fazer Login'
        buttonText='Entrar'
        url='http://localhost:8180/login/'
        form={[
          {
            type: 'email',
            required: true,
            id: 'email',
            name: 'email',
            label: 'Email',
          },
          {
            type: 'password',
            required: true,
            id: 'senha',
            name: 'senha',
            label: 'Senha',
          },
        ]}
      />
    </div>
  );
};

export default LoginPage;

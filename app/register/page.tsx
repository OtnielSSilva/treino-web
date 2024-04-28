import React from 'react';
import styles from './register.module.css';
import Form from '@/components/Form/Form';

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.registerContainer}>
      <Form
        type='register'
        formTitle='Criar Conta'
        buttonText='Registrar'
        url='http://localhost:8180/registro/'
        form={[
          {
            type: 'text',
            required: true,
            id: 'nome',
            name: 'nome',
            label: 'Nome',
          },
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

export default RegisterPage;

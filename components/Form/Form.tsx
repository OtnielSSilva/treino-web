'use client';

import React, { useState } from 'react';
import styles from './form.module.css';
import { IForm } from '@/types/form';

interface Props {
  form: IForm[];
  buttonText: string;
  url: string;
  formTitle?: string;
  type?: string;
}

interface FormData {
  nome?: string;
  email: string;
  senha: string;
}

const Form = ({ form, buttonText, url, formTitle, type }: Props) => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    senha: '',
  });

  const [formSucess, setFormSucess] = useState(false);
  const [formSucessMessage, setFormSucessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'nome') {
      const namePattern = new RegExp('[A-Za-zÀ-ÖØ-öø-ÿs]{2,50}');
      setValidEmail(namePattern.test(e.target.value));
    }
    if (e.target.name === 'email') {
      const emailPattern = new RegExp(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,50}$'
      );
      setValidEmail(emailPattern.test(e.target.value));
    }
    if (e.target.name === 'senha') {
      const passwordPattern = new RegExp('.{8,}');
      setValidPassword(passwordPattern.test(e.target.value));
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.nome === '' ||
      formData.email === '' ||
      formData.senha === ''
    ) {
      setFormSucess(true);
      setFormSucessMessage('Por favor, preencha o formulário corretamente!');
      return;
    }

    if (validEmail && validPassword) {
      if (type === 'login') {
        setFormData({
          email: formData.email,
          senha: formData.senha,
        });
      }
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSucess(true);
        setFormSucessMessage('Formulário enviado com sucesso!');
      } else {
        setFormSucess(true);
        if (type === 'login') {
          setFormSucessMessage('Email ou senha inválidos!');
        } else {
          setFormSucessMessage('Erro ao enviar o formulário!');
        }
      }
    } else {
      setFormSucess(true);
      setFormSucessMessage('Por favor, preencha o formulário corretamente!');
    }
  };

  return (
    <form
      className={styles.form}
      action={url}
      method='POST'
      onSubmit={handleSubmit}
    >
      <h1 className={styles.formTitle}>{formTitle}</h1>
      {form.map((input) => (
        <div className={styles.formInputBox} key={input.id}>
          <input
            className={styles.formInput}
            type={input.type}
            required={input.required}
            id={input.id}
            name={input.name}
            pattern={input.pattern}
            onChange={handleChange}
          />
          <label className={styles.formLabel} htmlFor={input.id}>
            {input.label}
          </label>
          {input.type === 'email' && !validEmail && (
            <span className={styles.invalid}>Email inválido</span>
          )}
          {input.type === 'password' && !validPassword && (
            <span className={styles.invalid}>Senha inválida</span>
          )}
        </div>
      ))}
      <button className={styles.submitButton} type='submit'>
        {buttonText}
      </button>
      {formSucess && (
        <span className={styles.formSucessMessage}>{formSucessMessage}</span>
      )}
    </form>
  );
};

export default Form;

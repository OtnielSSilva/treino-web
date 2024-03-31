"use client";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('your-background-image-path') no-repeat center center;
  background-size: cover;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const FormTitle = styled.h1`
  color: #333; // Cor do título alterada para preto suave
  margin-bottom: 30px;
  font-size: 2.5em; // Aumentando ligeiramente o tamanho para o título de cadastro
  text-align: center;
`;

const FormInputBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1em;
  background-color: rgba(255, 255, 255, 0.7);
`;

const FormLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
  pointer-events: none;
  transition: all 0.5s;
  font-size: 1em;

  ${FormInput}:focus ~ &,
  ${FormInput}:valid ~ & {
    top: -5px;
    font-size: 0.8em;
    color: #333;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  border-radius: 40px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const RegisterPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic goes here
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <FormTitle>Cadastre-se</FormTitle>
        <FormInputBox>
          <FormInput type="text" required id="name" />
          <FormLabel htmlFor="name">Nome</FormLabel>
        </FormInputBox>
        <FormInputBox>
          <FormInput type="email" required id="email" />
          <FormLabel htmlFor="email">Email</FormLabel>
        </FormInputBox>
        <FormInputBox>
          <FormInput type="password" required id="password" />
          <FormLabel htmlFor="password">Senha</FormLabel>
        </FormInputBox>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterPage;

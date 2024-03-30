// pages/login.tsx
"use client";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('your-background-image-path') no-repeat center center;
  background-size: cover;
`;

const LoginForm = styled.form`
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

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 30px;
  font-size: 2em;
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

const RegisterLink = styled.div`
  margin-top: 25px;
  font-size: 0.9em;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic goes here
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>Login</FormTitle>
        <FormInputBox>
          <FormInput type="email" required id="email" />
          <FormLabel htmlFor="email">Email</FormLabel>
        </FormInputBox>
        <FormInputBox>
          <FormInput type="password" required id="password" />
          <FormLabel htmlFor="password">Senha</FormLabel>
        </FormInputBox>
        <SubmitButton type="submit">Entrar</SubmitButton>
        <RegisterLink>
          Não tem uma conta? <a href="#">Registre-se</a>
        </RegisterLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;

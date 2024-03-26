// pages/login.tsx
"use client";
import styled from "styled-components";

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #ccc;
	padding: 20px;
	border-radius: 5px;
	background-color: #f9f9f9;
`;

const FormLabel = styled.label`
	margin-bottom: 10px;
`;

const FormInput = styled.input`
	padding: 10px;
	margin-bottom: 10px;
	width: 300px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const SubmitButton = styled.button`
	padding: 10px 20px;
	background-color: #333;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const LoginPage: React.FC = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Adicione aqui a lógica de autenticação
	};

	return (
		<LoginContainer>
			<LoginForm onSubmit={handleSubmit}>
				<h2>Faça login</h2>
				<FormLabel htmlFor="username">Nome de usuário:</FormLabel>
				<FormInput type="text" id="username" />
				<FormLabel htmlFor="password">Senha:</FormLabel>
				<FormInput type="password" id="password" />
				<SubmitButton type="submit">Entrar</SubmitButton>
			</LoginForm>
		</LoginContainer>
	);
};

export default LoginPage;

// pages/register.tsx
"use client";
import styled from "styled-components";

const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const RegisterForm = styled.form`
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

const RegisterPage: React.FC = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Adicione aqui a lógica de cadastro
	};

	return (
		<RegisterContainer>
			<h1>Cadastre-se</h1>
			<RegisterForm onSubmit={handleSubmit}>
				<FormLabel htmlFor="name">Nome:</FormLabel>
				<FormInput type="text" id="name" />
				<FormLabel htmlFor="email">Email:</FormLabel>
				<FormInput type="email" id="email" />
				<FormLabel htmlFor="password">Senha:</FormLabel>
				<FormInput type="password" id="password" />
				<SubmitButton type="submit">Cadastrar</SubmitButton>
			</RegisterForm>
		</RegisterContainer>
	);
};

export default RegisterPage;

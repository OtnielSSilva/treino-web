"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
	background-color: #333;
	color: white;
	padding: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 15px;
`;

const StyledLogo = styled.h1`
	font-size: 24px;
	cursor: pointer;
	text-transform: uppercase;
	&:hover {
		text-decoration: underline;
	}
	color: white;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 20%;
`;

const StyledButton = styled.button`
	background-color: #555;
	color: white;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	&:hover {
		background-color: #777;`;

const StyledSearchContainer = styled.div``;

const StyledSearchInput = styled.input`
	padding: 10px;
	margin-right: 15px;
	border: none;
	border-radius: 5px;
	width: 400px;
`;

const StyledSearchButton = styled.button`
	background-color: #555;
	color: white;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	&:hover {
		background-color: #777;
	}
`;

export const Header = () => {
	return (
		<StyledHeader>
			<Link href={"/"} className="logo-link">
				<StyledLogo>Projetão Store</StyledLogo>
			</Link>
			<StyledSearchContainer>
				<StyledSearchInput type="text" placeholder="Pesquise no MyStore..." />
				<StyledSearchButton>Search</StyledSearchButton>
			</StyledSearchContainer>
			<ButtonContainer>
				<Link href={"/login"}>
					<StyledButton>Login</StyledButton>
				</Link>
				<Link href={"/register"}>
					<StyledButton>Register</StyledButton>
				</Link>
				<StyledButton>Cart</StyledButton>
			</ButtonContainer>
		</StyledHeader>
	);
};

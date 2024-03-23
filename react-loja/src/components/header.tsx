import styled from "styled-components";

const StyledHeader = styled.header`
	background-color: #333;
	color: white;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
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

const StyledSearchContainer = styled.div`
	display: flex;
`;

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
			<h1>My Store</h1>
			<StyledSearchContainer>
				<StyledSearchInput type="text" placeholder="Pesquise no MyStore..." />
				<StyledSearchButton>Search</StyledSearchButton>
			</StyledSearchContainer>
			<ButtonContainer>
				<StyledButton>Login</StyledButton>
				<StyledButton>Cart</StyledButton>
			</ButtonContainer>
		</StyledHeader>
	);
};

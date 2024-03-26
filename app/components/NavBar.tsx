// components/NavBar.tsx
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
	background-color: #333;
	color: white;
	padding: 10px 20px;
`;

const NavList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavItem = styled.li`
	margin-right: 20px;
`;

const NavLink = styled.a`
	color: white;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

const NavBar: React.FC = () => {
	return (
		<Nav>
			<NavList>
				<NavItem>
					<Link href="/">
						<NavLink>Home</NavLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link href="/register">
						<NavLink>Cadastro</NavLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link href="/login">
						<NavLink>Login</NavLink>
					</Link>
				</NavItem>
			</NavList>
		</Nav>
	);
};

export default NavBar;

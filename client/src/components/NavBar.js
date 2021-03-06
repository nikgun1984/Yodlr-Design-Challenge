import styled from 'styled-components';
import {useState} from 'react';
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #3b5998;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #3b5998;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const NavBar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<Nav>
				<Logo>
					<Link exact to="/">
						Yodlr Design Challenge
					</Link>
				</Logo>
				<Menu>
					<Item>
            			<Link exact to="/register">
              				Registration Page
            			</Link>
          			</Item>
          			<Item>
            			<Link exact to="/admin">
              				Admin Page
            			</Link>
          			</Item>
				</Menu>
				<NavIcon onClick={() => setToggle(!toggle)}>
          			<Line open={toggle} />
          			<Line open={toggle} />
          			<Line open={toggle} />
        		</NavIcon>
			</Nav>
			<Overlay open={toggle}>
				<OverlayMenu open={toggle}>
					<Logo>
						<Link exact to="/">
							Yodlr Design Challenge
						</Link>
					</Logo>
					<Item>
						<Link exact to="/register">
							Registration Page
						</Link>
					</Item>
					<Item>
						<Link exact to="/admin">
							Admin Page
						</Link>
					</Item>
				</OverlayMenu>
      		</Overlay>
	   </>
	)
}

export default NavBar;
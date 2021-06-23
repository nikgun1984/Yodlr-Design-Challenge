import styled from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from './components/NavBar'

const Section = styled.section`
	height: 800px;
	background: url('https://images.unsplash.com/photo-1596736146509-b468e77527fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80')
	center center/cover no-repeat
`;

const App = () => {
	return (
		<BrowserRouter>
		<Section>
			<NavBar />
			<Routes />
		</Section>
		</BrowserRouter>
	)
}

export default App;
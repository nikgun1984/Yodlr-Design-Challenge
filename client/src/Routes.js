import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Users from './components/Users';

const Routes = () => {

	return (
		<>
			<Switch>
				<Route exact path="/register">
					<RegisterForm />
				</Route>
				<Route exact path="/admin">
					<Users/>
				</Route>
				<Route exact path="/">
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
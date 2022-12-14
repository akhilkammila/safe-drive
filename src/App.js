import { Heading } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nuggets from "./pages/Nuggets";
import Register from "./pages/Register";
import Repos from "./pages/Repos";
import About from "./pages/About";

const NotFound = () => <Heading>Not Found</Heading>;

const Priv = () => <Heading>I'm private</Heading>;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/feed" component={Dashboard} />
        <PrivateRoute path="/create" component={Create} />
        <PrivateRoute path="/repos/:repoid" component={Nuggets} />
        <PrivateRoute path="/repos" component={Repos} />
        <PrivateRoute path="/priv" component={Priv} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

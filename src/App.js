import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/podbox" component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

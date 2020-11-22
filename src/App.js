import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Close } from "./components/Close";
import { Authentication } from "./components/Authenticating";
import { InitPage } from "./components/InitPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/init" component={InitPage} />
        <Route path="/podbox" component={Landing} />
        <Route path="/output" component={Close} />
        <Route path="/authenticating" component={Authentication} />
      </Switch>
    </Router>
  );
}

export default App;

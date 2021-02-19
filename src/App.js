import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary.js";
import { ROUTES } from "./utils/routes.js";
import "./App.scss";
import Home from "./containers/Home.js";
import Search from "./containers/Search.js";
import NotFound from "./containers/NotFound.js";
import NavBar from "./components/Navbar/index.js";

function App() {
  return (
    <ErrorBoundary>
              <NavBar/>

      <Router>
        <Switch>

          <Route component={Home} exact path={ROUTES.index} />
          <Route component={Search} exact path={ROUTES.search} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

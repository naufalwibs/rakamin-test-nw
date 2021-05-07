import "./App.css";
import { Main, Login, Register } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/todos">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

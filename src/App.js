import "./App.css";
import { Main, Login, Register } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;

import "./App.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/Create.js";
import Create from "./components/Create.js";
import Home from "./components/Home.js";
import BlogList from "./components/BlogList.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>{" "}
            <Route path="/Create">
              <Create />
            </Route>{" "}
            <Route path="/BlogList">
              <BlogList />
            </Route>{" "}
          </Switch>{" "}
        </div>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;

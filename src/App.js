import "./App.css";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom/cjs/react-router-dom.min.js";
import "./components/Home.js";
import Home from "./components/Home.js";
import "./components/Create.js";
import Create from "./components/Create.js";

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "content" >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route>{" "} <
        Route path = "/Create" >
        <
        Create / >
        <
        /Route>{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /div>{" "} <
        /Router>
    );
}

export default App;
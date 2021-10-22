import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Podcast from "./components/Podcast";
import Footer from "./components/Footer";
import "./App.css";

//Pages
import Studio from "./pages/Studio";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Studio" component={Studio} />
          </Switch>
        </div>

        <Podcast />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

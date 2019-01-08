import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Prolog from "./components/Prolog";
import Epilog from "./components/Epilog";
import About from "./components/About";
import Portfolios from "./components/Portfolios";
import Blogs from "./components/Blogs";
import Vlogs from "./components/Vlogs";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Prolog />
          <div class="section columns">
            <div class="column" />
            <div class="column is-two-thirds">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/portfolios" component={Portfolios} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/vlogs" component={Vlogs} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
            <div class="column" />
          </div>

          <Epilog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

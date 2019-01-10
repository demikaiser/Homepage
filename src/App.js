import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Prolog from "./components/Prolog";
import Epilog from "./components/Epilog";
import About from "./components/About";
import Contents from "./components/Contents";
import Page from "./components/Page";
import { connect } from "react-redux";
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
                <Route exact path="/" component={About} />
                <Route
                  exact
                  path="/blogs"
                  component={() => (
                    <Contents
                      contentsName="blogs"
                      contents={this.props.achievements.blogs}
                    />
                  )}
                />
                <Route
                  exact
                  path="/portfolios"
                  component={() => (
                    <Contents
                      contentsName="portfolios"
                      contents={this.props.achievements.portfolios}
                    />
                  )}
                />
                <Route
                  exact
                  path="/vlogs"
                  component={() => (
                    <Contents
                      contentsName="vlogs"
                      contents={this.props.achievements.vlogs}
                    />
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path={`/blogs/:id`} component={Page} />
                <Route exact path={`/portfolios/:id`} component={Page} />
                <Route exact path={`/vlogs/:id`} component={Page} />
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

const mapStateToProps = state => {
  return { achievements: state.achievements };
};

export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Prolog from "./components/Prolog";
import Epilog from "./components/Epilog";
import About from "./components/About";
import Contents from "./components/Contents";
import Page from "./components/Page";
import ToTopButton from "./components/ButtonBackToTop"
import { connect } from "react-redux";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Prolog />
          <div class="section columns">
            <div class="column" />
            <div class="column is-two-thirds">
              <Switch>
                <Route 
                  exact 
                  path="/" 
                  component={() => (
                    <Contents
                      contentsName="portfolios"
                      contents={this.props.achievements.portfolios}
                    />
                  )}
                />
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
                <Route exact path="/about" component={About} />
                <Route exact path={`/blogs/:id`} component={Page} />
                <Route exact path={`/portfolios/:id`} component={Page} />
                <Route exact path={`/vlogs/:id`} component={Page} />
              </Switch>
            </div>
            <div class="column" />
          </div>
          <ToTopButton />
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

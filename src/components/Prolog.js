import React, { Component } from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro";

class Prolog extends Component {
  render() {
    return (
      <nav class="columns multiline navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="column">
          <div class="container">
            <Intro />
          </div>
          <div class="container">
            <div class="content has-text-centered">
              <Link to="/" class="button is-medium">
                <span class="icon is-medium">
                  <i class="fa fa-home" />
                </span>
                <span>Home</span>
              </Link>
              <Link to="/blogs" class="button is-medium">
                <span class="icon is-medium">
                  <i class="fa fa-file-alt" />
                </span>
                <span>Blogs</span>
              </Link>
              <Link to="/portfolios" class="button is-medium">
                <span class="icon is-medium">
                  <i class="fa fa-file-image" />
                </span>
                <span>Portfolios</span>
              </Link>
              <Link to="/vlogs" class="button is-medium">
                <span class="icon is-medium">
                  <i class="fa fa-file-video" />
                </span>
                <span>Vlogs</span>
              </Link>
              <Link to="/about" class="button is-medium">
                <span class="icon is-medium">
                  <i class="fa fa-ghost" />
                </span>
                <span>About</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Prolog;

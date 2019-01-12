import React, { Component } from "react";
import "../styles/ButtonBackToTop.css";

class ToTopButton extends Component {
  render() {
    return (
      <div>
        <nav class="columns is-fixed-bottom">
          <div class="column">
            <a href="#top" class="button-back-to-top">
              <i class="fas fa-arrow-up" />
              <br />
              TOP
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default ToTopButton;

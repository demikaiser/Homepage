import React, { Component } from "react";

class Epilog extends Component {
  render() {
    return (
      <div>
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <i class="far fa-copyright" aria-hidden="true" />{" "}
                <span>Copyright ~2019 </span>
                <a href="mailto:demikaiser13@gmail.com">
                  DemiKaiser Da Vinci
                </a>{" "}
                <span>a.k.a Jake J. Choi @ </span>
                <a href="http://www.k-souls.com" target="_blank" rel="noopener noreferrer">K-SOULS</a> Co.
                <br /> <span>Powered by </span>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
                <span>, </span>
                <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">JQuery</a>
                <span>, </span>
                <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">D3</a>
                <span>, </span>
                <a href="http://bulma.io/" target="_blank" rel="noopener noreferrer">Bulma</a>
                <span>, </span>
                <a href="http://fontawesome.io/" target="_blank" rel="noopener noreferrer">FontAwesome</a>
                <span>, and </span>
                <a href="http://phaser.io/" target="_blank" rel="noopener noreferrer">Phaser</a>.
              </p>
              <p>
                <a class="icon" href="https://github.com/demikaiser">
                  <i class="fab fa-github" />
                </a>
                <a
                  class="icon"
                  href="https://www.linkedin.com/in/jakejonghunchoi"
                >
                  <i class="fab fa-linkedin" />
                </a>
                <a
                  class="icon"
                  href="https://plus.google.com/101621585125349004189"
                >
                  <i class="fab fa-google-plus" />
                </a>
                <a class="icon" href="https://www.youtube.com/user/demikaiser">
                  <i class="fab fa-youtube" />
                </a>
                <a
                  class="icon"
                  href="https://stackoverflow.com/users/8590075/jake-choi-jonghun"
                >
                  <i class="fab fa-stack-overflow" />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Epilog;

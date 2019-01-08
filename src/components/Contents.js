import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contents extends Component {
  render() {
    const contents = this.props.contents;
    const contentsName = this.props.contentsName;
    const contentsFirstColumn = [];
    const contentsSecondColumn = [];
    const contentsThirdColumn = [];

    for (let i = 0; i < contents.length; i++) {
      if (i % 3 === 0) {
        contentsFirstColumn.push(contents[i]);
      } else if (i % 3 === 1) {
        contentsSecondColumn.push(contents[i]);
      } else if (i % 3 === 2) {
        contentsThirdColumn.push(contents[i]);
      }
    }

    return (
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          {contentsFirstColumn.map(content => {
            return (
              <article class="tile is-child box" key={content.id}>
                <Link to={`/${contentsName}/${content.id}`}>
                  <p class="title">{content.title}</p>
                  <p class="subtitle">{content.subtitle}</p>
                  <img src={content.pathThumbnail} alt="" />
                </Link>
                <div class="content">
                  <p>{content.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div class="tile is-parent is-vertical">
          {contentsSecondColumn.map(content => {
            return (
              <article class="tile is-child box" key={content.id}>
                <Link to={`/${contentsName}/${content.id}`}>
                  <p class="title">{content.title}</p>
                  <p class="subtitle">{content.subtitle}</p>
                  <img src={content.pathThumbnail} alt="" />
                </Link>
                <div class="content">
                  <p>{content.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div class="tile is-parent is-vertical">
          {contentsThirdColumn.map(content => {
            return (
              <article class="tile is-child box" key={content.id}>
                <Link to={`/${contentsName}/${content.id}`}>
                  <p class="title">{content.title}</p>
                  <p class="subtitle">{content.subtitle}</p>
                  <img src={content.pathThumbnail} alt="" />
                </Link>
                <div class="content">
                  <p>{content.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contents;

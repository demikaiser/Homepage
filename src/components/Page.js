import React, { Component } from "react";
import { connect } from "react-redux";
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css';

class Page extends Component {

  componentDidMount() {
    Prism.highlightAll();
    window.scrollTo(0, 0);
  }

  render() {
    var contentId = this.props.match.params.id;
    var contentUrl = null;

    const achievements = this.props.achievements;

    achievements.blogs.forEach(blog => {
      if (blog.id === contentId) {
        contentUrl = blog.pathHtml;
      }
    });

    achievements.portfolios.forEach(portfolio => {
      if (portfolio.id === contentId) {
        contentUrl = portfolio.pathHtml;
      }
    });

    return (
      <div>
        {contentUrl !== null ? (
          <div class="content" dangerouslySetInnerHTML={{ __html: contentUrl }} />
        ) : (
          <p class="has-text-centered">No Page Content</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { achievements: state.achievements };
};

export default connect(mapStateToProps)(Page);

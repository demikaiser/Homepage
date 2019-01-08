import React, { Component } from "react";
import { connect } from "react-redux";

class Page extends Component {
  render() {
    console.log(this.props.match.params.id);
    console.log(this.props);

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

    achievements.vlogs.forEach(vlog => {
      if (vlog.id === contentId) {
        contentUrl = vlog.pathHtml;
      }
    });

    return (
      <div>
        {contentUrl !== null ? (
          <div dangerouslySetInnerHTML={{ __html: contentUrl }} />
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

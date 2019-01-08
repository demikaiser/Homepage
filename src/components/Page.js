import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {

  render() {

    var contents = [
      this.props.achievements.blogs[2].pathHtml
    ]

    return (
      <div>
{contents.map(content=> {
          return (
           <div dangerouslySetInnerHTML={ {__html: content} } />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { achievements: state.achievements }
};

export default connect(mapStateToProps)(Page);

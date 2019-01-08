import React, { Component } from 'react';
import { connect } from 'react-redux';

class Blogs extends Component {

  render() {

    return (
      <div>
        <h1>Blogs</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { achievements: state.achievements }
};

export default connect(mapStateToProps)(Blogs);

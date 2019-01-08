import React, { Component } from 'react';
import { connect } from 'react-redux';

class Portfolios extends Component {

  render() {

    return (
      <div>
        <h1>Portfolios</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { achievements: state.achievements }
};

export default connect(mapStateToProps)(Portfolios);

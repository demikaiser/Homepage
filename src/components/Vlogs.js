import React, { Component } from 'react';
import { connect } from 'react-redux';

class Vlogs extends Component {

  render() {

    return (
      <div>
        <h1>Vlogs</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { achievements: state.achievements }
};

export default connect(mapStateToProps)(Vlogs);

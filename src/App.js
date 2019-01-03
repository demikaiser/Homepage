import React, { Component } from 'react';

class App extends Component {
  render() {

    var htmlContent = require('./achievement/blogs/(20180521)NVidiaJetsonTX2DevKitsSetup(Jetpack)/index.html');

    return (
      <div className="App">
        <h1>Hello Homepage</h1>
         <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
      </div>
    );
  }
}

export default App;

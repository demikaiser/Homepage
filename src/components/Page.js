import React, { Component } from 'react';

class Page extends Component {


  render() {

    var achievement = require('../achievement.js');

    console.log(achievement);

    var contents = [
      achievement.default.portfolios[0].pathHtml,
      achievement.default.blogs[1].pathHtml
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

export default Page;

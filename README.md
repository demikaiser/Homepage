Code Repository for [My Homepage](http://www.demikaiser.com "DemiKaiser Da Vinci")

# Copyright Notice
### Copyright (C) Jake Jonghun Choi - All Rights Reserved.

This is a public repository, however NOT an open source project.<br>
Unauthorized copying of this file, via any medium is strictly prohibited.<br>
Any malicious attempts will be prosecuted by the copyright law.<br>

# Customized Compilation Instruction

Add the following code to the webpack.config.js file in /node_modules/react-scrips/config folder.
```
module.exports = {
  module: {
    rules: [
      { test: /\.html$/, use: 'html-loader' },
    ]
  }
};
```

# React & GitHub Publishing Instruction

1. Generate the achievements tree: $ node achievementGen.js
2. Push changes to GitHub: $ git add . ; git commit -m "Updates." ; git push
3. Publish to GitHub Pages: $ npm run deploy

##### Written by Jake Jonghun Choi <demikaiser13@gmail.com>

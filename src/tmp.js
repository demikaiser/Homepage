const fs = require('fs');


const currentDir = __dirname;

var achievement = {
  "blogs": [],
  "portfolios": [],
  "vlogs": []
};





getAllEntriesFromOneFolder = (folder) => {

  let dirs = fs.readdirSync(currentDir + '/achievement/' + folder);

  for (let i = 0; i < dirs.length; i++) {
    console.log(dirs[i]);
    var data = fs.readFileSync(currentDir + '/achievement/' + folder + '/' + dirs[i] + '/information.json', 'utf8');
    console.log(data);

  }

}

getAllEntriesFromOneFolder('blogs');

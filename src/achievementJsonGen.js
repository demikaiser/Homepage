const fs = require('fs');

// ######## ######## ######## ######## ######## ######## ######## ########
// #                           Pre-Processing                            #
// ######## ######## ######## ######## ######## ######## ######## ########
console.log("######## achievementJsonGen: Start Processing ########");
const currentDir = __dirname;

// Delete the existing file first.
const fileToDelete = currentDir + '/achievement.json';
fs.statSync(fileToDelete, function (err, stats) {
    if (err) { return console.error(err); }
    fs.unlinkSync(fileToDelete, function (err) {
        if (err) return console.log(err);
        console.log('File deleted successfully!');
    });
});

// ######## ######## ######## ######## ######## ######## ######## ########
// #                      File Structure Scrapping                       #
// ######## ######## ######## ######## ######## ######## ######## ########

// File structure initialization.
var achievement = {
  "blogs": [],
  "portfolios": [],
  "vlogs": []
};

// Search information.json files.
var getAllEntriesFromOneFolder = (folder) => {

  let dirs = fs.readdirSync(currentDir + '/achievement/' + folder);

  for (let i = 0; i < dirs.length; i++) {
    let data = fs.readFileSync(currentDir + '/achievement/' + folder + '/' + dirs[i] + '/information.json', 'utf8');
    let jsonFromData = JSON.parse(data);

    let jsonToPush = {
      "pathHtml": '../achievement/' + folder + '/' + dirs[i] + '/index.html',
      "pathThumbnail": '../achievement/' + folder + '/' + dirs[i] + '/thumbnail.jpg',
      "title": jsonFromData.title,
      "subtitle": jsonFromData.subtitle,
      "description": jsonFromData.description
    };

    achievement[folder].push(jsonToPush);
  }

}

getAllEntriesFromOneFolder('blogs');
getAllEntriesFromOneFolder('portfolios');
getAllEntriesFromOneFolder('vlogs');

// Reverse the elements to get the most latest articles on the top.
achievement.blogs = achievement.blogs.reverse();
achievement.portfolios = achievement.portfolios.reverse();
achievement.vlogs = achievement.vlogs.reverse();

// ######## ######## ######## ######## ######## ######## ######## ########
// #                          Finalize & Store                           #
// ######## ######## ######## ######## ######## ######## ######## ########
var fileToStore = JSON.stringify(achievement);
fs.writeFile (currentDir + "/achievement.json", fileToStore, function(err) {
    if (err) throw err;
    console.log('File saved successfully!');
});

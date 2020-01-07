const fs = require('fs');

// ######## ######## ######## ######## ######## ######## ######## ########
// #                           Pre-Processing                            #
// ######## ######## ######## ######## ######## ######## ######## ########
console.log("######## achievementsJsonGen: Start Processing ########");
const currentDir = __dirname;

// Delete the existing file first.
const fileToDelete = currentDir + '/achievements.js';
fs.statSync(fileToDelete, function (err, stats) {
    if (err) { return console.error(err); }
    fs.unlinkSync(fileToDelete, function (err) {
        if (err) return console.log(err);
        console.log('File deleted successfully!');
    });
});

// ######## ######## ######## ######## ######## ######## ######## ########
// #                              Preamble                               #
// ######## ######## ######## ######## ######## ######## ######## ########

var stringToStore = "";

// ######## ######## ######## ######## ######## ######## ######## ########
// #                      File Structure Scrapping                       #
// ######## ######## ######## ######## ######## ######## ######## ########

// File structure initialization.
var achievements = {
  "blogs": [],
  "portfolios": [],
};

// Search information.json files.
var getAllEntriesFromOneFolder = (folder) => {

  let dirs = fs.readdirSync(currentDir + '/achievements/' + folder);

  for (let i = 0; i < dirs.length; i++) {
    let data = fs.readFileSync(currentDir + '/achievements/' + folder + '/' + dirs[i] + '/information.json', 'utf8');
    let jsonFromData = JSON.parse(data);

    let jsonToPush = {
      'id': dirs[i],
      "pathHtml": './achievements/' + folder + '/' + dirs[i] + '/index.html',
      "pathThumbnail": './achievements/' + folder + '/' + dirs[i] + '/thumbnail.jpg',
      "title": jsonFromData.title,
      "subtitle": jsonFromData.subtitle,
      "description": jsonFromData.description
    };

    achievements[folder].push(jsonToPush);
  }

}

getAllEntriesFromOneFolder('blogs');
getAllEntriesFromOneFolder('portfolios');
// getAllEntriesFromOneFolder('vlogs');

// Reverse the elements to get the most latest articles on the top.
achievements.blogs = achievements.blogs.reverse();
achievements.portfolios = achievements.portfolios.reverse();

// ######## ######## ######## ######## ######## ######## ######## ########
// #                       JSON String Processing                        #
// ######## ######## ######## ######## ######## ######## ######## ########
var jsonToStore = 'const achievements = { blogs: [';

for (let i = 0; i < achievements.blogs.length; i++) {
  if (i !== 0) { jsonToStore += ','}
  jsonToStore += '{';

  jsonToStore += 'id:' + '\"' + achievements.blogs[i].id+ '\"';
  jsonToStore += ',';
  jsonToStore += 'pathHtml: require(\"' + achievements.blogs[i].pathHtml + '\")';
  jsonToStore += ',';
  jsonToStore += 'pathThumbnail: require(\"' + achievements.blogs[i].pathThumbnail+ '\")';
  jsonToStore += ',';
  jsonToStore += 'title:' + '\"' + achievements.blogs[i].title + '\"';
  jsonToStore += ',';
  jsonToStore += 'subtitle:' + '\"' + achievements.blogs[i].subtitle + '\"';
  jsonToStore += ',';
  jsonToStore += 'description:' + '\"' + achievements.blogs[i].description + '\"';

  jsonToStore += '}';
}

jsonToStore += '], portfolios: [';

for (let i = 0; i < achievements.portfolios.length; i++) {
  if (i !== 0) { jsonToStore += ','}
  jsonToStore += '{';

  jsonToStore += 'id:' + '\"' + achievements.portfolios[i].id+ '\"';
  jsonToStore += ',';
  jsonToStore += 'pathHtml: require(\"' + achievements.portfolios[i].pathHtml + '\")';
  jsonToStore += ',';
  jsonToStore += 'pathThumbnail: require(\"' + achievements.portfolios[i].pathThumbnail+ '\")';
  jsonToStore += ',';
  jsonToStore += 'title:' + '\"' + achievements.portfolios[i].title + '\"';
  jsonToStore += ',';
  jsonToStore += 'subtitle:' + '\"' + achievements.portfolios[i].subtitle + '\"';
  jsonToStore += ',';
  jsonToStore += 'description:' + '\"' + achievements.portfolios[i].description + '\"';

  jsonToStore += '}';
}

jsonToStore += ']};';

// ######## ######## ######## ######## ######## ######## ######## ########
// #                          Finalize & Store                           #
// ######## ######## ######## ######## ######## ######## ######## ########
stringToStore += jsonToStore;
stringToStore += "export default achievements;"

fs.writeFile (currentDir + "/achievements.js", stringToStore, function(err) {
    if (err) throw err;
    console.log('File saved successfully!');
});

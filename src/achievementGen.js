const fs = require('fs');

// ######## ######## ######## ######## ######## ######## ######## ########
// #                           Pre-Processing                            #
// ######## ######## ######## ######## ######## ######## ######## ########
console.log("######## achievementJsonGen: Start Processing ########");
const currentDir = __dirname;

// Delete the existing file first.
const fileToDelete = currentDir + '/achievement.js';
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
      'id': dirs[i],
      "pathHtml": './achievement/' + folder + '/' + dirs[i] + '/index.html',
      "pathThumbnail": './achievement/' + folder + '/' + dirs[i] + '/thumbnail.jpg',
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
// #                       JSON String Processing                        #
// ######## ######## ######## ######## ######## ######## ######## ########
var jsonToStore = 'const achievement = { blogs: [';

for (let i = 0; i < achievement.blogs.length; i++) {
  if (i !== 0) { jsonToStore += ','}
  jsonToStore += '{';

  jsonToStore += 'id:' + '\"' + achievement.blogs[i].id+ '\"';
  jsonToStore += ',';
  jsonToStore += 'pathHtml: require(\"' + achievement.blogs[i].pathHtml + '\")';
  jsonToStore += ',';
  jsonToStore += 'pathThumbnail: require(\"' + achievement.blogs[i].pathThumbnail+ '\")';
  jsonToStore += ',';
  jsonToStore += 'title:' + '\"' + achievement.blogs[i].title + '\"';
  jsonToStore += ',';
  jsonToStore += 'subtitle:' + '\"' + achievement.blogs[i].subtitle + '\"';
  jsonToStore += ',';
  jsonToStore += 'description:' + '\"' + achievement.blogs[i].description + '\"';

  jsonToStore += '}';
}

jsonToStore += '], portfolios: [';

for (let i = 0; i < achievement.portfolios.length; i++) {
  if (i !== 0) { jsonToStore += ','}
  jsonToStore += '{';

  jsonToStore += 'id:' + '\"' + achievement.portfolios[i].id+ '\"';
  jsonToStore += ',';
  jsonToStore += 'pathHtml: require(\"' + achievement.portfolios[i].pathHtml + '\")';
  jsonToStore += ',';
  jsonToStore += 'pathThumbnail: require(\"' + achievement.portfolios[i].pathThumbnail+ '\")';
  jsonToStore += ',';
  jsonToStore += 'title:' + '\"' + achievement.portfolios[i].title + '\"';
  jsonToStore += ',';
  jsonToStore += 'subtitle:' + '\"' + achievement.portfolios[i].subtitle + '\"';
  jsonToStore += ',';
  jsonToStore += 'description:' + '\"' + achievement.portfolios[i].description + '\"';

  jsonToStore += '}';
}

jsonToStore += '], vlogs: [';

for (let i = 0; i < achievement.vlogs.length; i++) {
  if (i !== 0) { jsonToStore += ','}
  jsonToStore += '{';

  jsonToStore += 'id:' + '\"' + achievement.vlogs[i].id+ '\"';
  jsonToStore += ',';
  jsonToStore += 'pathHtml: require(\"' + achievement.vlogs[i].pathHtml + '\")';
  jsonToStore += ',';
  jsonToStore += 'pathThumbnail: require(\"' + achievement.vlogs[i].pathThumbnail+ '\")';
  jsonToStore += ',';
  jsonToStore += 'title:' + '\"' + achievement.vlogs[i].title + '\"';
  jsonToStore += ',';
  jsonToStore += 'subtitle:' + '\"' + achievement.vlogs[i].subtitle + '\"';
  jsonToStore += ',';
  jsonToStore += 'description:' + '\"' + achievement.vlogs[i].description + '\"';

  jsonToStore += '}';
}

jsonToStore += ']};';

// ######## ######## ######## ######## ######## ######## ######## ########
// #                          Finalize & Store                           #
// ######## ######## ######## ######## ######## ######## ######## ########
stringToStore += jsonToStore;
stringToStore += "export default achievement;"

fs.writeFile (currentDir + "/achievement.js", stringToStore, function(err) {
    if (err) throw err;
    console.log('File saved successfully!');
});

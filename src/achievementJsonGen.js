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




// ######## ######## ######## ######## ######## ######## ######## ########
// #                          Finalize & Store                           #
// ######## ######## ######## ######## ######## ######## ######## ########
var fileToStore = JSON.stringify(achievement);
fs.writeFile (currentDir + "/achievement.json", fileToStore, function(err) {
    if (err) throw err;
    console.log('File saved successfully!');
});

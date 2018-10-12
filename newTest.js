// Dependencies
const messenger = require("facebook-chat-api"); // Chat API
const fs = require("fs"); // File system
const exec = require("child_process").exec; // For command line access
const request = require("request"); // For HTTP requests
const jimp = require("jimp"); // For image processing
const config = require("./config"); // Config file
const utils = require("./configutils"); // Utility functions
const commands = require("./commands"); // Command documentation/configuration
const server = require("./server"); // Server configuration
const easter = require("./easter"); // Easter eggs
var credentials;



function Loss() {
  request.get(`https://www.reddit.com/r/kpics/search.json?q=${encodeURIComponent('lisa')}&restrict_sr=on&sort=relevance&t=all`, (err, res, body) => {
      if (!err) {
          const results = JSON.parse(body);
          if (results) {
              // const chosen = co["space"].m[1] ? Math.floor(Math.random() * results.length) : 0; // If rand not specified, use top result
              const posts = results.data.children;
              const chosen = posts[[Math.floor(Math.random() * posts.length)]]
              const data = chosen.data;
              const url = data.url;
              console.log(data.permalink);
              console.log(url);
              request(url).pipe(fs.createWriteStream("loss.jpg")).on('close', (err, data) => {});
              return;

            } else {
              console.log("error here");
            };
        };
      });
};



function sendFileFromDir(dir) {
  fs.readdir(dir, (err, filenames) => {
    if (!err) {
      sendFile(() => {
        const chosen = filenames[Math.floor(Math.random() * filenames.length)];
        return `${chosen}`;
      })
    } else {
      console.log("error here");
    }
  });
}

function sendFile(file) {
  console.log(file.toString());
  console.log('here');
  return;
}
sendFileFromDir("media/yiyi");





// Sends file(s) where each filename is a relative path to the file from root
// Accepts a string filename or an array of filename strings, an optional message body parameter, and a callback
function sendFile(filenames, threadId, message = "", callback = () => { }, api = gapi) {
    if (typeof (filenames) == "string") { // If only one is passed
        filenames = [filenames];
    }
    for (let i = 0; i < filenames.length; i++) {
        filenames[i] = fs.createReadStream(`${__dirname}/${filenames[i]}`);
    }
    const msg = {
        "body": message,
        "attachment": filenames
    }
    sendMessage(msg, threadId, callback);
}
exports.sendFile = sendFile;


else if (co["show"].m) { // Check before regular search to prevent clashes
    if (co["show"].m[1].lowercase == 'akh') { // Parameter specified
        sendFileFromDir("media/AKH");
    } else if (co["show"].m[1].lowercase == 'ah') {
      sendFileFromDir("media/AH");
    } else if (co["show"].m[1].lowercase == 'ahp') {
      sendFileFromDir("media/AHP");
    } else if (co["show"].m[1].lowercase == 'athk') {
      sendFileFromDir("media/ATHK");
    } else if (co["show"].m[1].lowercase == 'gay') {
      sendFileFromDir("media/Gay");
    } else if (co["show"].m[1].lowercase == 'pete') {
      sendFileFromDir("media/Pete");
    } else if (co["show"].m[1].lowercase == 'skb') {
      sendFileFromDir("media/SKB");
    } else if (co["show"].m[1].lowercase == 'tha') {
      sendFileFromDir("media/THA");
    } else { // No parameter passed; send random xkcd
        // Get info of most current xkcd to find out the number of existing xkcd (i.e. the rand ceiling)
        sendMessage({"Give a parameter. Example: bot show akh", threadId)};
    }
}


else if (co["announce"].m) {
   const msg = co["announce"].m[1];
   const members = groupInfo.members; // Save in case it changes
   members.map((member) => {
     sendMessage(msg, member);
   });
   sendMessage("Messaged to every member of the group", threadId);
}

else if (co["announce"].m) {
   const msg = co["announce"].m[1];
   const members = groupInfo.members; // Save in case it changes
   members.map((member) => {
     sendMessage(msg, member);
   });
   sendMessage("Messaged to every member of the group", threadId);
}

else if (co["remind"].m) {
  const member = co["remind"].m[1];
  const msg = co["remind"].m[2];
  
}

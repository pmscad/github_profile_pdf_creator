const prompt = require("prompt");

prompt.start();

prompt.get(["favColor", "username"], function(err, result) {
  if (err) {
    return onErr(err);
  }
  console.log("Command-line input received:");
  console.log("  Favourite Color: " + result.favColor);
  console.log("  Username: " + result.username);
});

// function onErr(err) {
//     console.log(err);
//     return 1;

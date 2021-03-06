const fs = require("fs");
// Store file data chunks in this array
let chunks = [];
// We can use this variable to store the final data
let fileBuffer;
// Read file into stream.Readable
let fileStream = fs.createReadStream("./tmp/node.txt");
// An error occurred with the stream
fileStream.once("error", (err) => {
  // Be sure to handle this properly!
  console.error(err);
});
// File is done being read
fileStream.once("end", () => {
  // create the final data Buffer from data chunks;
  fileBuffer = Buffer.concat(chunks);
  // Of course, you can do anything else you need to here, like emit an event!
});
// Data is flushed from fileStream in chunks,
// this callback will be executed for each chunk
fileStream.on("data", (chunk) => {
  chunks.push(chunk); // push data chunk to array
  console.log(chunk);
  // We can perform actions on the partial data we have so far!
});

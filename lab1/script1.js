// Create a new text file that contains a paragraph of any contents (6 to 8 lines)
//  ./lab1/test.txt

// Import the non-blocking method from fs
const { readFile } = require("node:fs");

// 2. Create a JavaScript file to use the Node.JS built-in function to read text file contents.
// Use the function that supports non-blocking operation (not the blocking one)
readFile("./lab1/test.txt", "utf8", (err, data) =>
  //3. Output the content (the paragraph) to the terminal
  err ? console.log(err) : console.log(data)
);

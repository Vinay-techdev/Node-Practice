const fs = require("fs/promises");
const path = require("path");

// async with promises

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// Why .then() and .catch()?
//? .then() ensures clear chaining of multiple asynchronous operations.
//? .catch() centralizes error handling, making it easy to debug and manage failures.

const filePath1 = __dirname;

fs.promises
  .readdir(filePath1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err)
);

//! Create (Write a File):fs.promises.writeFile
//! syntax: fs.promises.writeFile(path, data, options).then().catch();

     //? path: Path to the file.
     //? data: Content to write.
     //? options: Encoding ('utf8'), flags, etc. (optional).

fs.writeFile(filePath, "this is the initial data", "utf-8")
  .then(console.log("File created successfully!"))
  .catch((err) => console.log(err)
);

//* Read (Read a File): readFile()
//! syntax: fs.promises.readFile(path, options).then(data => ...).catch(err => ...);

fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.error("Error reading file:", err)
);

//* Update (Append Content to a File): appendFile()
//! syntax: fs.promises.appendFile(path, data, options).then().catch();

fs.promises
  .appendFile(filePath, "\nthis is the updated data", "utf-8")
  .then(console.log("File updated successfully!"))
  .catch((err) => console.log(err)
);

//* Delete (Remove a File): unlink()
//! syntax: fs.promises.unlink(path).then().catch();

fs.promises
  .unlink(filePath)
  .then(console.log("File Deleted successfully!"))
  .catch((err) => console.error("Error deleting file:", err)
);
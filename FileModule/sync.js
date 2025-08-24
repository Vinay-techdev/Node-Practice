const fs = require("fs");
const path = require("path");

//! Sync way
const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

//! fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! syntax: fs.writeFileSync(filePath, data, options);
// utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.

const writeFile = fs.writeFileSync(
    filePath,
    "This is the initial Data",
    "utf-8"
);
console.log(writeFile);

//! fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//! syntax: const data = fs.readFileSync(filePath, options);

const readFile = fs.readFileSync(filePath, "utf-8");
//console.log(readFile.toString()); instead of "utf-8"
console.log(readFile);

//! fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options);

const appendFile = fs.appendFileSync(
   filePath,
   "\nThis is the updated Data",
   "utf-8"
);

console.log(appendFile);

//! Delete File (fs.unlinkSync()) : Deletes a file by its path.
//! syntax: fs.unlinkSync(filePath);

const fileDelete = fs.unlinkSync(filePath);
console.log(fileDelete);

//! Rename File (fs.renameSync) : Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath, newPath);

const newUpdatedFileName = "updateTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);

const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);
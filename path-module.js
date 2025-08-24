//import module

const path =  require("path");

// Special Node.js Constants :- __filename & __dirname (only for common js)

console.log(__dirname);
console.log(__filename);

// Methods

//path.join()
const filepath = path.join("folder","school","studentData.txt")
console.log(filepath)

// path.resolve()
const resloveData =path.resolve(filepath);

// path.parse()
const parseData =path.parse(filepath);
// path.extname()
const extName =path.extname(filepath);

// path.basename()
const baseName =path.basename(filepath);

// path.dirname()
const dirName =path.dirname(filepath);

console.log({resloveData,parseData,extName,baseName,dirName});

/*  
 More method

 path.normalize()
 path.isAbsolute()
 path.format()
 path.relative()
 path.sep
 path.delimiter
*/
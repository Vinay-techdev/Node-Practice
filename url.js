const url = require('url');
const address = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(address, true);

console.log("Host: ",q.host);
console.log("Path Name: ",q.pathname);
console.log("Search: ",q.search);

const qdata = q.query;
console.log("month: ",qdata.month);
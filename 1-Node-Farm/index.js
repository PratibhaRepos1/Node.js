const hello = 'Hello world';
console.log(hello);

const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);

//write to file
const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now.toString()} `;

fs.writeFileSync('./txt/output.txt', textIn);

console.log('File Written');





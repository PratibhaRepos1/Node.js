// const hello = 'Hello world';
// console.log(hello);

//Blocking, Synchronous way
 const fs = require('fs');
 const http = require('http');
 
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// //write to file
// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now.toString()} `;
// fs.writeFileSync('./txt/output.txt', textIn);
// console.log('File Written');

//Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('ERROR! 🌋');

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
        console.log(data3);

        fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
            console.log('Your file has been written 😊');
        })
        });
    });    
});

console.log('will read file');




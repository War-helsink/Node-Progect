const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'test', 'text.txt');

fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err;
    }
    else
        console.log('Папка создана');
});


fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
    if (err) {
        throw err;
    } else
        console.log('Файл создан');
});

fs.appendFile(filePath, '\nHello Again!', (err) => {
    if (err) {
        throw err;
    } else
        console.log('Файл создан');
});


fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err;
    } else {
        const data = Buffer.from(content); 
        console.log('Content: \n',data.toString());
    }
});

fs.readFile(filePath,'utf-8', (err, content) => {
    if (err) {
        throw err;
    } else {
         
        console.log(content);
    }
});
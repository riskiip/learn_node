const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const firstFile = readFileSync('./content_dummy/first_file.txt', 'utf-8');
const secondFile = readFileSync('./content_dummy/second_file.txt', 'utf-8');

console.log('selesai baca file pertama')

writeFileSync('./content_dummy/first_file.txt', 'File nya sekarang isinya begini hahaha');

console.log('selesai ganti isi dari file pertama');

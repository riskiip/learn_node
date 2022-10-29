const {readFile, writeFile} = require('fs');

console.log('Mulai');

readFile('./content_dummy/first_file.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstFile = result;
    readFile('./content_dummy/second_file.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const secondFile = result;
    })
    writeFile('./content_dummy/second_file.txt', 'File kedua juga udah berubah nih', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('sudah selesai ganti file kedua')
    })
})

console.log('selesai tugas ini, bisa ganti tugas dari thread yang berbeda');

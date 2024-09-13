const fs = require('fs');

// Create and write to "welcome.txt"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" has been created and written to.');

    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Content of "welcome.txt":', data);
    });
});

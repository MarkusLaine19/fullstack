var fs = require('fs');

console.log("Program started");

// Read the first file
fs.readFile('example.txt1', function (err, data1) {
    if (err) return console.error(err);
    
    // Output the contents of the first file
    console.log("Contents of example1.txt:");
    console.log(data1.toString());
    
    // Read the second file after the first file has been read
    fs.readFile('example2.txt', function (err, data2) {
        if (err) return console.error(err);
        
        // Output the contents of the second file
        console.log("Contents of example2.txt:");
        console.log(data2.toString());

        // Program ends after both files have been read
        console.log("Program Ended");
    });
});






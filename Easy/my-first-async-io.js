const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        // Handle file read error
        console.error(`Error reading the file: ${err.message}`);
        return;
    }

    // Count the number of newlines in the file
    const newlineCount = data.split('\n').length - 1;

    // Print the result
    console.log(newlineCount);
});

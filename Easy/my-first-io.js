const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file synchronously
try {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Count the number of newlines in the file
    const newlineCount = fileContent.split('\n').length - 1;

    // Print the result
    console.log(newlineCount);
} catch (err) {
    // Handle file read error
    console.error(`Error reading the file: ${err.message}`);
}

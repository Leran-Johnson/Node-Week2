const fs = require('fs');
const path = require('path');

// Get directory path and file extension from command-line arguments
const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

// Ensure both arguments are provided
if (!directoryPath || !fileExtension) {
    console.log('Usage: node filtered-ls.js <directory-path> <file-extension>');
    process.exit(1); // Exit with an error code
}

// Read the contents of the directory asynchronously
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        // Handle directory read error
        console.error(`Error reading directory: ${err.message}`);
        return;
    }

    // Filter files by extension
    const filteredFiles = files.filter(file => path.extname(file) === `.${fileExtension}`);

    // Print the filtered file list
    filteredFiles.forEach(file => console.log(file));
});

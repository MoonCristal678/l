const fs = require('fs');
const readline = require('readline');

// Function to write content to a file asynchronously.
function writeFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
    } else {
      console.log(`File '${filePath}' successfully written.`);
    }
  });
}

// Function to read and display the content of a file asynchronously.
function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
    } else {
      console.log(`File content of '${filePath}':`);
      console.log(data);
    }
  });
}

// Function to delete a file asynchronously.
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
    } else {
      console.log(`File '${filePath}' successfully deleted.`);
    }
  });
}

// Function to take user input for file operations.
function performFileOperations() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter 1 to read a file, 2 to create a file, 3 to delete a file: ', (choice) => {
    if (choice === '1') {
      rl.question('Enter the file name to read: ', (fileName) => {
        rl.close();
        readFile(fileName); // Read and display the content of the file.
      });
    } else if (choice === '2') {
      rl.question('Enter the file name: ', (fileName) => {
        rl.question('Enter content for the file: ', (content) => {
          rl.close();
          writeFile(fileName, content); // Create a new file with user-provided content and name.
        });
      });
    } else if (choice === '3') {
      rl.question('Enter the file name to delete: ', (fileName) => {
        rl.close();
        deleteFile(fileName); // Delete the specified file.
      });
    } else {
      console.log('Invalid choice.');
      rl.close();
    }
  });
}

// Example usage:
performFileOperations();

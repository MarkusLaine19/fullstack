const fs = require('fs').promises;

async function combineFiles() {
    try {
        // Read the contents of both files
        const [data1, data2] = await Promise.all([
            fs.readFile('example1.txt', 'utf8'),
            fs.readFile('example2.txt', 'utf8')
        ]);

        // Combine the contents of the two files
        const combinedData = `${data1}\n${data2}`;

        // Write the initial string and content to the new file
        await fs.writeFile('combined.txt', `I wrote this!\n${combinedData}`);

        // Append the final string to the new file
        await fs.appendFile('combined.txt', `\nI wrote this!`);

        console.log("Files have been combined successfully with 'I wrote this!' added at both the top and bottom!");
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

combineFiles();


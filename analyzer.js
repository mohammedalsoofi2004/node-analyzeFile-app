import fs from 'fs';


const FILE_TO_ANALYZE = 'data.txt';

function analyzeFile(){
    if(!fs.existsSync(FILE_TO_ANALYZE)){
        console.log(`File ${FILE_TO_ANALYZE} does not exist.`);
        return;
    }

    const text = fs.readFileSync(FILE_TO_ANALYZE, 'utf-8');

    const totalCharacters = text.length;

    const totalWords = text.split(/\s+/).filter(word => word.length > 0).length;
    
    const totalLines = text.split('\n').filter(line => line.trim() !== '').length;

    console.log('\n -------- File Analysis ----');
    console.log(`Name file: ${FILE_TO_ANALYZE}`);
    console.log(`Total characters: ${totalCharacters}`);
    console.log(`Total words: ${totalWords}`);
    console.log(`Total lines: ${totalLines}`);
    console.log('-----------------------------\n');
}

analyzeFile();

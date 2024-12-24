// import fs from 'fs';    //THIS  IS IMPRT FOR THE FIRST VERSION

//IMPORT FOR PROMISE VERSION
import fs from 'fs/promises';

//readFile() -callback
// fs.readFile('./test.txt', 'utf8',(err, data) => { 
//     if(err) throw err;
//     console.log(data);
// });
//first version the above one

//readFileSync() -Synchronous version 
// const data = fs.readFileSync('.test.txt', 'utf8');
// console.log(data);

//readFile() -Promise .then()  //using promise version
// fs.readFile('./test.txt', 'utf8')
// .then((data)=> console.log(data))
// .catch((err) => console.log(err));

//readFile() - async/await  // Async function to read a file
const readFile = async ()=>{
    try{
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

//writeFile()
// Async function to write to a file
const writeFile = async () => {
    try{
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
        console.log('File written to...');
    }
    catch(error){
        console.log(error);
    }
};

//appendFile()
// Async function to append text to a file
const appendFile = async () => {
    try{
        await fs.appendFile('./test.txt','\nThis is appended text');
        console.log('File appended to...');
    }catch(error){
        console.log(error);
    }
};

await writeFile(); // overwrite what we have in file
 //append file ka text gets in the file 
await appendFile();
await readFile();


const readline = require('readline');

const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

function answer(answer){
    read.write("you typed:"+answer);
    read.close();
}
read.question('type any words:',answer);
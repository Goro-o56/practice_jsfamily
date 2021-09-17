const readline = require('readline');

var counter = 0;

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.on('line',(line)=>{
    counter++;
    console.log('(' + counter + ':' + line.length + 'chars)');
});

var content = ["--begin",
"これは長文のコンテンツ",
"長い文章を出力させる例",
"どのように表示されるか",
"--end--"].join('\n');

read.write(content);
read.close();
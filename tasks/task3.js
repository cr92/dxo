process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;

    if (data === '~\n')
    {
        input_stdin_array = input_stdin.split("\n");
        main();
        process.exit();
    }
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var cases = parseInt(readLine());
    
    for(var i=0;i<cases;i++)
    {
        var instr = readLine();
        var cmd = parseInt(instr.split('.')[1].substring(9,instr.split('.')[1].length-1))
        var str= instr.split('.')[0].replace(/'/g,'');
        
        
        if(cmd%2===0)
            console.log(str.toUpperCase());
        else
            console.log(str.toLowerCase());
    }

}

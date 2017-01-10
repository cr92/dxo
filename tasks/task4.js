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
        
        if((instr.indexOf(',') > 0))
        {
            var norm=instr.replace('add','').replace(/\(/g,'').replace(/\)/g,'');
            console.log(add(parseInt(norm.split(',')[0]),parseInt(norm.split(',')[1])));
        }
        
        else
        {
            var modf=instr.replace('add','').split(')(');
            console.log(add(parseInt(modf[0].replace('(','')),parseInt(modf[1].replace(')',''))));
        }
    }

}

function add(arg1,arg2)
{
    return arg1+arg2;
}

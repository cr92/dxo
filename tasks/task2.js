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
    var card_map={4929:'Mastercard',
                  5045:'VISA',
                  3456:'RUPAY'};
    
    for(var i=0;i<cases;i++)
    {
        var str = readLine();
        var c_id = str.split(' ')[0];
        
        if((card_map[c_id]))
            console.log(card_map[c_id]);
        else
            console.log('Invalid');
    }

}

function rainbowLog(string){
    var reset = "\x1b[0m",
    black = "\x1b[30m",
    red = "\x1b[31m",
    green = "\x1b[32m",
    yellow = "\x1b[33m",
    blue = "\x1b[34m",
    magenta = "\x1b[35m",
    cyan = "\x1b[36m",
    white = "\x1b[37m",
    colors = [black, red, green, yellow, blue, magenta, cyan, white],
    output = "";

    for(let i=0; i<string.length; i++){
        output += colors[i % colors.length] + string[i] + reset;
    }
    console.log(output);
}

module.exports = rainbowLog;
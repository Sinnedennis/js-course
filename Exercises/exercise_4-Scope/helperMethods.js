function logFactory () {
    let logNum = 1;
    let haveClearedLogs = false;

    return function (x, guess) {

        if (!haveClearedLogs) {
            clearLogs();
            haveClearedLogs = true;
        };

        console.log(`----------- Log ${logNum} -----------`);
        
        let message = "";
        if (x == guess) {
            message = `Woohoo, you're correct! "${guess}" does equal ${x}!`;
        } else {
            message = `Uh-oh! That's not quite right... "${guess}" doesn't equal ${x}...`;
        };

        console.log(message);
        logNum++;
    };
};

function clearLogs(n = 10) {
    for (i = 0; i < n; i++) {
        console.log();        
    };
};

module.exports = logFactory;

var targetObj = {
    key: "hello_world_1"
};

//Log out the value "hello_world_1";
console.log();






targetObj = {
    key : {
        banana : {
            onePlus7Pro : "hello_world_2"
        }
    }
};

//Log out the value "hello_world_2";
console.log();






targetObj = {
    orange : {
        pancake : function () {
            return "hello_world_3";
        }
    }
};

//Log out the value "hello_world_3";
console.log();






targetObj = {
    key : ["hello_world_4"]
};

//Log out the value "hello_world_4";
console.log();






var targetObj = {
    option1: {
        banana : function (isCorrect) {
            return isCorrect ? "ha ha" : {
                andAnotherOne : {
                    key: "hello_world_5"
                }
            };
        }
    }
};

//Log out the value "hello_world_5";
console.log();
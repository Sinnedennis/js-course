
var targetArr = ["hello_world_1"];

//Log out the value "hello_world_1";
console.log(targetArr[0]);





targetArr = [0, 1, 2, "hello_world_2"];

//Log out the value "hello_world_2";
console.log(targetArr[3]);





targetArr = [0, 1, 2, "hello_world_3", 4, 5, 6];

//Log out the value "hello_world_3";
console.log(targetArr[3]);





targetArr = [0, [1, "hello_world_4"]];

//Log out the value "hello_world_4";
console.log(targetArr[1][1]);





targetArr = [0, 1, { key: "hello_world_5"}];

//Log out the value "hello_world_5";
console.log(targetArr[2].key);





targetArr = [0, 1, 3, function () { return "hello_world_6"}];

//Log out the value "hello_world_6";
console.log(targetArr[3]());





targetArr = [ 
    { 
        key : [  
                { anotherKey : 
                    function () { 
                        return [ "hello_world_7" ] 
                    } 
                } 
            ]
    } 
];

//Log out the value "hello_world_7";
console.log(targetArr[0].key[0].anotherKey()[0]);
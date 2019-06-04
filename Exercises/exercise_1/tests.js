const { findDataType } = require("./main.js");

[200, "hello world", 50, true, undefined, 0.00001, null, "", false, NaN, "stop", () => {return;} ].forEach(a => {
    findDataType(a);
});
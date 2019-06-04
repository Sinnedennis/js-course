const { findDataType } = require("./exercise_1.js");

[200, "hello world", 50, true, undefined, 0.00001, null, "", false, NaN, "stop"].forEach(a => {
    findDataType(a);
});
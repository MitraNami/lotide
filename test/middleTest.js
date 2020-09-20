const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//Test code
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, "hi", 3, 4]), ["hi"]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([2]), []);
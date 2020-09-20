const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
const assertEqual = require("../assertEqual");
const tail = require("../tail");


// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
const expected = ['Lighthouse', 'Labs'];
assertEqual(result.length, expected.length);
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], expected[i]);
}

const output = tail([]);
assertEqual(output.length, 0);

const single = tail(['Hi']);
assertEqual(single.length, 0);


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
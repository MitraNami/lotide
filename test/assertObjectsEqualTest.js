const assertObjectsEqual = require('../assertObjectsEqual');


//Test code
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectsEqual({names: ['John', 'Dan'], class: 12}, {names: ['John','Dan']});
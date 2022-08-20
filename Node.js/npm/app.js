var _ = require("underscore");

// Require functions works as
// 1) Looks for  a core module
// 2) Looks if this is a file or folder.
// 3) Searcches in a node_modules folder.

const result = _.contains([1, 2, 3, 4, 5, 7], 4);
console.log(result);

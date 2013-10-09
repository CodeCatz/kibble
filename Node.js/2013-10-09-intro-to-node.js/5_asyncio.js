var fs = require("fs");
var sys = require("sys");
fs.readFile("5_test.txt", function(err, data) {
	if (err)
		throw err;
	sys.puts(data);
});
console.log("Vsebina datoteke");
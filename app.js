var fcgiApp = require("./fcgi"),
	http = require("http");


var myServer = http.createServer(function(req, res) {
	setTimeout(function() {
		res.writeHead(200, {"Content-type": "text/html; charse=utf-8"});
		res.write("It works! by kanzmrsw ! はろ〜世界！" + Date.now());
		res.end();
		console.log("Wrote response.");
		console.log("こっちも日本語出る？");
	}, 1000);
	//throw new Error("Bollocks.");
});

// Instead of this:
//myServer.listen(12345);

// You do this:
fcgiApp.handle(myServer);

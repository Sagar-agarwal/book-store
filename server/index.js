const http = require('http');

	// event emitters
	// streams
	// clusters

const server = http.createServer();

server.on('request', (req, res) => {
	res.write("Hello world");

	setTimeout(() => {

		res.write("Still on...");
	}, 3000)

	res.end();
});

server.listen(8080);
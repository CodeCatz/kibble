var net = require("net");

var clients = [];

net.createServer(function(socket){
	clients.push(socket);
	socket.on("data", function(data){
		for (var i = 0; i < clients.length; i++) {
			if (clients[i] == socket)
				continue;
			clients[i].write(data);
		}
	});
	socket.on("end", function(){
		var index = clients.indexOf(socket);
		clients.splice(index, 1);
	})
}).listen(3000);

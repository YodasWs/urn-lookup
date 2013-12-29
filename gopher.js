// TODO: Search for URI
function uriLookup(query, sock) {
	fs.readFile('uri-db/schemes.json', function(err, data) {
		var schemes = JSON.parse(data);
		query = query.split(':');
		if (schemes[query[0]]) switch (query[0]) {
		case 'urn':
			if (schemes[query[0]][query[1]]) {
				send('h', schemes[query[0]][query[1]].replace('%1a', query[2]), sock);
			}
			break;
		default:
			send('3', 'Unrecognized URI Scheme ' + query[0], sock);
		} else send('3', 'Unrecognized URI Scheme ' + query[0], sock);
	});
}

// TODO: Output Answer
function send(code, message, sock) {
	var parser = {
		'hostname':'yodas.ws',
		'protocol':'gopher:',
		'pathname':'/',
		'port':'70'
	};
	if (code == 'h') {
		parser = document.createElement('a');
		parser.href = message;
		if (!parser.port) switch (parser.protocol) {
		case 'https:':
		case 'ssl:':
			parser.port = '433';
			break;
		case 'http:':
			parser.port = '80';
			break;
		default:
			parser.port = '70';
		}
	}
	answer = code + message + "\t" + parser.pathname + "\t" + parser.hostname + "\t" + parser.port + "\r\n";
	answer += ".\r\n";
	sock.end(answer);
}

// TODO: Output Index
function index() {
}

// TODO: Create Server
var	fs  = require('fs'),
	net = require('net'),
	url = require('url');

var server = net.createServer(function (sock) {
	sock.on('end', function () {
	});
	sock.on('data', function (buffer) {
		var read = false, i=0;
		for (i=0; i<buffer.length; i++) {
			var b = buffer.readUInt8(i);
			switch (b) {
			case 0x0:
				read = false;
				return;
			case 0xD:
				read = true;
				break;
			case 0xA:
				if (read) uriLookup(query, sock);
				break;
			default:
				read = false;
				query += String.fromCharCode(b);
			}
		}
	});
});
server.listen(70, function () {
});
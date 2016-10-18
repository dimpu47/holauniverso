var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead({'Content-Type': 'text/html'});
    res.end('<br><h1><center><hr><hr><br>( ~_o_^_o_~ )<br>||<h2><br>Gracioso Universo!</h2><br></center></h1><hr><hr>');
});

var port = Number(process.env.PORT || 4444);
server.listen(port);

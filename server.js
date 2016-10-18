var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send('<nav><center><hr><hr><p3>( ~o^o~ )</p3><h3>Gracias Universo... ;) </h3><span></span></center><hr><hr></nav>');
});

var port = (process.env.PORT || 4444);
app.listen(port, function () {
console.log('Running on port ' + port + '--..--{`-0-^-0-`}--..--');
});

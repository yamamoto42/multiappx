var express = require('express');
var app = express();

app.use(express.static('./'));

var port = 8080;
app.listen(port,function(){
	console.log("start Express server port:%d mode:%s",port,app.settings.env)
});

var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    env = (process.env.NODE_ENV || 'development'),
    server = module.exports = express();

if('development' == env){
  server.use(express.static(__dirname + "/../public"));
}

server.listen(port);

console.log('Welcome to MRB-Lite!\n\nPlease go to http://localhost:' + port + ' to start using Marionette, Require.js and Backbone.js');
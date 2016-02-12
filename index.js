var RedisCacheConnector   = require( 'deepstream.io-cache-redis' );
var RedisMessageConnector = require( 'deepstream.io-msg-redis' );
var Deepstream            = require( 'deepstream.io' );

var server = new Deepstream();

server.set( 'cache', new RedisCacheConnector({
  port: 6379,
  host: 'localhost'
}));

server.set( 'messageConnector', new RedisMessageConnector({
  port: 6379,
  host: 'localhost'
}));

var start = function(){
  server.start();
};

module.exports = {
  start: start
};

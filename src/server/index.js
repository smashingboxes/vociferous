var RedisCacheConnector   = require( 'deepstream.io-cache-redis' );
var RedisMessageConnector = require( 'deepstream.io-msg-redis' );
var Deepstream            = require( 'deepstream.io' );
var PermissionHandler     = require('./permission-handler');

var server = new Deepstream();

server.set( 'cache', new RedisCacheConnector({
  port: 6379,
  host: 'localhost'
}));

server.set( 'messageConnector', new RedisMessageConnector({
  port: 6379,
  host: 'localhost'
}));

server.set('serverName', 'DeeplyStreaming');
server.set('colors', true);
server.set('tcpHost', '0.0.0.0');
server.set('tcpPort', 6022);

server.set( 'permissionHandler', new PermissionHandler() );

server.start();

var server = require('./server.js');

server.start()
setTimeout(function(){
  require('./providers/presentations-provider.js');
  require('../../client-server.js');
}, 5000);

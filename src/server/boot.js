
var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;
var execFile = require('child_process').execFile;
var server = require('./server.js');
// var provider = require('./providers/presentations-provider.js')

// var cmd1 = spawn('node', ['--version']);
// cmd1.on('data', function(a,b){
//   console.log(a,b);
// });
//
// const child = execFile('node', ['./src/server/index.js'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });


server.start()
setTimeout(function(){
  require('./providers/presentations-provider.js');
}, 5000);

var deepstreamClient = require( 'deepstream.io-client-js' );
var ds = deepstreamClient( 'http://localhost:6022' );

var dataPayload = require('../../data/presentations.json');

function login () {
  ds.login( { username: 'vox-provider' }, listenForSubscriptions );
  console.log('VOX.PROVIDER logging into deepstream...');

}

function initData () {
  var p1 = ds.record.getRecord('VOX/users/churchill/scotch-cigars-victory').set('data', dataPayload[0]);
}

function listenForSubscriptions(success, err) {
  console.log('listening for subscriptions to VOX.*...');
  initData();
  ds.record.listen( 'VOX/users/churchill.*', onSubscription );
}


/*
@param {string} recordName The name of the record that has been subscribed to
@param {boolean} isSubscribed Whether the subject is being subscribed too or disposed of.
*/

function onSubscription( recordName, isSubscribed ) {
  console.log('Got a subscription, boss!', recordName, isSubscribed);
  var record = ds.record.getRecord( recordName );
  console.log(record.get('data'));
}

login();

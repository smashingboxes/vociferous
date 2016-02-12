var presentations = [];

/*
@param {string} recordName The name of the record that has been subscribed to
@param {boolean} isSubscribed Whether the subject is being subscribed too or disposed of.
*/

function onSubscription( recordName, isSubscribed ) {


// Get the record from your cache
var record = ds.record.getRecord( recordName );


// Extract the currency pair from the record name
// var currencyPair = recordName.substr( 3 );

record.set('bid', 100)
record.set('ask', 1000)


// If isSubscribed is false no clients are interested in this currency pair so stop generating prices
// if( isSubscribed === false ) {
//   record.discard();
//   // priceGenerator.discardPrices( currencyPair );
// }

/**
If isSubscribed is true the currency pair has been requested by a client o start generating prices accordingly
*/
// else {
//   priceGenerator.getPrices( currencyPair, function( bid, ask ) {
//     record.set( 'bid', bid );
//     record.set( 'ask', ask );
//   } );
}




module.exports = function(){
  return presentations;
};

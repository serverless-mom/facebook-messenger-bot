'use strict';
var VERIFY_TOKEN = "my_awesome_token";
exports.handler = (event, context, callback) => {
    console.dir(event.queryStringParameters)
  // process GET request
  if(event.queryStringParameters){
    var queryParams = event.queryStringParameters;
 
    var rVerifyToken = queryParams['hub.verify_token']
 
    if (rVerifyToken === VERIFY_TOKEN) {
      var challenge = queryParams['hub.challenge']
      
      var response = {
        'body': parseInt(challenge),
        'statusCode': 200
      };
      
      callback(null, response);
    }else{
      var response = {
        'body': 'Error, wrong validation token',
        'statusCode': 422
      };
      
      callback(null, response);
    }
  }
}
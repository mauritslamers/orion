// ==========================================================================
// OrionFw.systemStateController
// ==========================================================================

require('core');
require('models/systemstate');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
OrionFw.systemStateController = SC.ObjectController.create(
/** @scope Login.authenticationServerCollectioncontrollerController */ {

  //contentBinding: 'OrionFw.SystemState.findAll',
  
  // TODO: Add your own code here.

  contentObserver: function(){
    // get the content
    var curContent = this.get('content');
    if((curContent) && (curContent instanceof Array) && (curContent.length == 1)){
      var curState = curContent.first();
      if(curState){
         var curLoginStatus = curState.get('loginStatus');
         if(curLoginStatus){
            if(window.Login){
               // if we are at the login screen and the login is still valid,
               // replace the login with the preferredClient if it exists
               var prefClient = curState.get('preferredClient');
               if(prefClient){
                 var lastSlashPos = location.pathname.lastIndexOf('/');
                 var newPos = [location.pathname.substr(0,lastSlashPos+1), prefClient].join('');
                 var newURL = [location.protocol, '//',location.host,newPos].join('');
                 location.replace(newURL); 
               }
            }
         }          
         else {
           //if the current client is not login, replace the current URL with
           // the login client
           if(!window.Login){
             //console.log('Mmm, not logged in and at a different client? Not good');
             // get the current url
             var curURL = location.pathname;
             var lastSlashPos = curURL.lastIndexOf('/');
             // remove last part of string from lastSlashPos
             var newPos = [curURL.substr(0,lastSlashPos+1), 'login'].join('');
             var newURL = [location.protocol,'//',location.host,newPos].join('');
             //console.log(newURL);
             OrionFw.systemStateTimer.invalidate();
             location.replace(newURL);
           }
           else {
             //console.log('We are already trying to login :) ');
             OrionFw.systemStateTimer.invalidate();
           }
         }
      }      
    }     
  }.observes('content'),

  process: function(){
    // set the content
    var result = SC.Store.findRecords({ 'guid' : 1}, OrionFw.SystemState);
    //console.log(result);
    if((result) && (result instanceof Array)){
      //console.log('result of correct type');
      if(result.length == 1){
         //console.log('setting content');
         this.set('content',result);  
      }
    }
  }

}) ;


/*
OrionFw.systemStateObserver = function(){
   var sysContent = OrionFw.systemStateController.get('content');
   if((sysContent) && (sysContent instanceof Array) && (sysContent.length != 1)){
      var tmpSysState = SC.Store.findRecords(OrionFw.SystemState);
      if((tmpSysState) && (tmpSysState instanceof Array) && (tmpSysState.length == 1)){
        OrionFw.systemStateController.set('content',tmpSysState.first());  
      }
   } 
}.observes('SC.Store.records');
*/

/*
var timer = SC.Timer.schedule({
target: myObject,
action: 'updateAnimation',
interval: 100,
repeats: YES,
until: Time.now() + 1000
}) ;
*/
OrionFw.retrieveSystemState = function(){
  var sysStates = OrionFw.SystemState.collection();
  OrionFw.server.listFor(sysStates);
  OrionFw.systemStateTimer = SC.Timer.schedule({
    target: 'OrionFw.systemStateController',
    action: 'process',
    interval: 1000,
    repeats: YES
  });
}

OrionFw.checkSystemState =  function(){
  OrionFw.systemStateTimer = SC.Timer.schedule({
    target: 'OrionFw.systemStateController',
    action: 'process',
    interval: 1000,
    repeats: YES
  });
}

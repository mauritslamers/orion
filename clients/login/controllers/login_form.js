// ==========================================================================
// Login.LoginFormController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Login.loginFormController = SC.ObjectController.create(
/** @scope Login.loginFormController */ {

  // TODO: Add your own code here.
  userName: '',
  
  passwd: '',
  
  errorMessage: '',
  
  userTypeSelectionBinding : 'Login.authenticationServerCollectionController.selection',
  
  commitLogin: function(){
   // reload the system state
   //var systemState = SC.Store.findRecords({ 'guid': 1}, OrionFw.SystemState);
   //OrionFw.systemStateController.set('content',systemState);

  	var un = this.get('userName');
  	var pw = this.get('passwd');
  	var selectedUserType = this.get('userTypeSelection');
  	if(selectedUserType instanceof Array){
  		var ut = selectedUserType.first().get('guid');
  		//OrionFw.setLoginCookie(ut);
  		
  		// if there are any login records in SC.Store, remove them
  		//SC.Store.destroyRecords(SC.Store.findRecords(OrionFw.SystemState));
  		//console.log('Username: ' + un);
  		//console.log('passwd: ' + pw);
  		//console.log('authServerId: ' + ut);
  		
  		// now create the record to post to the server to login
      OrionFw.systemStateController.set('userName', un);
      OrionFw.systemStateController.set('passwd',pw);
      OrionFw.systemStateController.set('authServerId',ut);
      
/*      var login = OrionFw.systemStateController.get('content');
      login.userName = un;
      login.passwd = pw;
      login.authServerId = ut; */
      //var login = OrionFw.systemStateController.get('content');
      //.log(login);
  		//var login = OrionFw.SystemState.create({ 'userName': un, 'passwd': pw, 'authServerId': ut });
  		OrionFw.server.commitRecords(OrionFw.systemStateController.get('content')); 
  		//var login = SC.Store.findRecords(OrionFw.SystemState);
  		//OrionFw.server.commitRecords(login);
  		
  		// make sure the system will forward to the preferredClient
  		OrionFw.checkSystemState();
  		//Login.logindata = SC.Store.findRecords(OrionFw.SystemState);
      //OrionFw.systemStateController.get('content').refresh();
  	} else {
  		// alert?	
  	}
  }
}) ;

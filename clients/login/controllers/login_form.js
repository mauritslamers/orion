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
Login.loginFormController = SC.Object.create(
/** @scope Login.loginFormController */ {

  // TODO: Add your own code here.
  userName: '',
  
  userPassword: '',
  
  commitLogin: function(){
  	var un = this.get('userName');
  	var pw = this.get('userPassword');
  	var selectedUserType = Login.authenticationServerCollectionController.get('selection');
  	if(selectedUserType instanceof Array){
  		var ut = selectedUserType.get('guid');
  		OrionFw.setLoginCookie(ut);
  		
  		// now create the record to post to the server to login
  		var guid = SC.Store.addRecord(OrionFw.LoginData.create( { 'userName': un, 'userPassword': pw, 'userType': ut }));
  		var logindata = SC.Store.findRecords(OrionFw.LoginData);
  		OrionFw.server.commitRecords(logindata);
  		
  	} else {
  		// alert?	
  	}
  }
}) ;

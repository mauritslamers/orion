// ==========================================================================
// LoginData
// ==========================================================================

require('core');
require('orion_fw');
require('md5');
/** @class
  
  (Document your class here)

  @extends SC.Record
  @author    AuthorName  
  @version 0.1
*/  
OrionFw.LoginData = SC.Record.extend(
/** @scope Lesson.prototype */ {
  
  // TODO: Add your own code here.
  
  //dataSource: SC.Server.create({ prefix: [""], urlFormat: "?%@&%@" }),
  //dataStore: SC.Server.create({ prefix: [""], urlFormat: "?%@&%@" }),
  dataStore: OrionFw.server, // maybe Contacts.server?
  dataSource: OrionFw.server,
  /*
  define the URL for this Record type. 
     - updates will be POSTed to '/ajaxcom/contact/update' 
     - new records will be POSTed to '/ajaxcom/contact/create' 
     - and existing records will be fetched (GET) from
       '/ajacom/contact/show/23' (if the record has guid=23 and
        only one record is fetched)
  */
  resourceURL: [OrionFw.standardResource + 'AuthenticationServer'], 

  // this list of properties will be used when talking to the server 
  // backend. If you don't define this only 'guid' will be used. 
  properties: ['userName','passwd','authServerId'],

/*  
  userName : '',
  userPassword : '',
  userType: '',
  
  attributes: function(){
  	un = this.get('userName');
  	up = this.get('passwd');
  	ut = this.get('authServerId');
  	var tmp = new Object;
  	tmp.userName = un;
  	if(ut == 3){
  		tmp.userPassword = hex_md5(up);	
  	} else {
	  	tmp.userPassword = up;
  	}
  	tmp.userType = ut;
  	return tmp;	
  }.property('userName','passwd','authServerId') */
});



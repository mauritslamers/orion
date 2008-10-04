// ==========================================================================
// Student
// ==========================================================================

require('core');
require('orion_fw');

/** @class
  
  (Document your class here)

  @extends SC.Record
  @author    AuthorName  
  @version 0.1
*/  
OrionFw.Student = SC.Record.extend(
/** @scope Student.prototype */ {
  
  // TODO: Add your own code here.
  
  //dataSource: SC.Server.create({ prefix: [""], urlFormat: "?%@&%@" }),
  //dataStore: SC.Server.create({ prefix: [""], urlFormat: "?%@&%@" }),
  //dataStore: OrionFw.server, // maybe Contacts.server?
  //dataSource: OrionFw.server,
  /*
  define the URL for this Record type. 
     - updates will be POSTed to '/ajaxcom/contact/update' 
     - new records will be POSTed to '/ajaxcom/contact/create' 
     - and existing records will be fetched (GET) from
       '/ajacom/contact/show/23' (if the record has guid=23 and
        only one record is fetched)
  */
  resourceURL: function(){
  	//[OrionFw.standardResource + 'geteducations'], 	
  	return OrionFw.standardResource + 'student';
  },

  // this list of properties will be used when talking to the server 
  // backend. If you don't define this only 'guid' will be used. 
  properties: ['id','studentnumber','firstname','inbetween','lastname','email','entryyear','currentyear','active','preferredlanguage'], 

  reverseName: function() { 
  	var firstname = this.get('firstname');
  	var inbetween = this.get('inbetween');
  	var lastname = this.get('lastname');
  	if(!inbetween){
  		var reversename = lastname + ", " + firstname;	
  	} else {
  		var reversename = lastname + ", " + firstname + "(" + inbetween + ")";
  	}
  	return reversename;
  }.property('firstname', 'inbetween', 'lastname'),
  
  forwardName: function(){
       	var firstname = this.get('firstname');
  	var inbetween = this.get('inbetween');
  	var lastname = this.get('lastname');
  	if(!inbetween){
  		var reversename = firstname + " " + lastname;	
  	} else {
  		var reversename = firstname + " " + inbetween + " " + lastname;
  	}
  	return reversename; 
  }.property('firstname', 'inbetween', 'lastname')

}) ;

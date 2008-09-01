// ==========================================================================
// Education
// ==========================================================================

require('core');
require('orion_fw');

/** @class
  
  (Document your class here)

  @extends SC.Record
  @author    AuthorName  
  @version 0.1
*/  
OrionFw.Education = SC.Record.extend(
/** @scope Education.prototype */ {
  
  // TODO: Add your own code here.
  
  //dataSource: SC.Server.create({ prefix: [""], urlFormat: "?%@&%@" }),
  //dataStore: SC.Server.create({ prefix: [""], urlFormat: "?%@&%@" }),
  dataStore: OrionFw.server, // maybe Contacts.server?
  dataSource: OrionFw.server,
  
  //modules: SC.Record.hasMany('OrionFw.Module'),
  /*
  define the URL for this Record type. 
     - updates will be POSTed to '/ajaxcom/contact/update' 
     - new records will be POSTed to '/ajaxcom/contact/create' 
     - and existing records will be fetched (GET) from
       '/ajacom/contact/show/23' (if the record has guid=23 and
        only one record is fetched)
  */
  resourceURL: [OrionFw.standardResource + 'education'], 

  // this list of properties will be used when talking to the server 
  // backend. If you don't define this only 'guid' will be used. 
  properties: ['id','name','code'], 

  educationName: function() { 
    return [this.get('name'), this.get('code')].compact().join('-'); 
  }.property('name', 'code'),
  
  modEdu: SC.Record.hasMany('OrionFw.ModEdu','educationId')

  //modules: function(){
  	//var tmpId = this.get('guid');
  //	var tmpCollection = this.get('modEdu');
  //	return tmpCollection.get('records').get('moduleId');
  //}
});



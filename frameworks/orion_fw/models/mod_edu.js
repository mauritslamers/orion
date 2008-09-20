// ==========================================================================
// ModEdu
// ==========================================================================

require('core');
require('orion_fw');

/** @class
  
  (Document your class here)

  @extends SC.Record
  @author    AuthorName  
  @version 0.1
*/  
OrionFw.ModEdu = SC.Record.extend(
/** @scope ModEdu.prototype */ {
  
  // TODO: Add your own code here.
  
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
  resourceURL: [OrionFw.standardResource + 'mod_edu'], 

  // this list of properties will be used when talking to the server 
  // backend. If you don't define this only 'guid' will be used. 
  properties: ['id','educationId','moduleId']
  
//  educationIdType: 'OrionFw.Education',
  
//  moduleIdType: 'OrionFw.Module'

});



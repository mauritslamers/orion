// ==========================================================================
// Module
// ==========================================================================

require('core');
require('orion_fw');

/** @class
  
  (Document your class here)

  @extends SC.Record
  @author    AuthorName  
  @version 0.1
*/  
OrionFw.Module = SC.Record.extend(
/** @scope Module.prototype */ {
  
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
  resourceURL: [OrionFw.standardResource + 'module'], 

  // this list of properties will be used when talking to the server 
  // backend. If you don't define this only 'guid' will be used. 
  properties: ['id','name','nameEn','collegeyear','consecutivelessonseries','serialnumber','OSIRISId'], 

  
  _moduleName: null, // cached name
  
  moduleName: function() { 
    if(this._moduleName == null){
      var tmpname = [this.get('name'), this.get('serialnumber')].compact().join(' ') + " "; 
      tmpname =[tmpname, this.get('collegeyear')].compact().join('[') + "]";
      this._moduleName = tmpname;
      return tmpname;
    } else {
      return this._moduleName;
    }
  }.property('name', 'serialnumber','collegeyear'),
  
  _moduleNameAndOSIRISid: null,
  
  moduleNameAndOSIRISid: function() { 

    //if(this._moduleNameAndOSIRISid == null){
      var tmpname = [this.get('name'), this.get('serialnumber')].compact().join(' ') + " "; 
      var tmpcollegeyear = this.get('collegeyear');
      var tmpOSIRISid = this.get('OSIRISid');
      if(tmpcollegeyear != ""){
        tmpname =[tmpname, this.get('collegeyear')].compact().join('[') + "] ";
      } 
      if(tmpOSIRISid != ""){
        tmpname = [tmpname, this.get('OSIRISid')].compact().join('(') + ")";
      }
      this._moduleNameAndOSIRISid = tmpname;
      return tmpname;
    //} else {
    //  return this._moduleNameAndOSIRISid;
    //}
  }.property('name', 'serialnumber','collegeyear','OSIRISid'),
  
  modEdu: SC.Record.hasMany('OrionFw.ModEdu','moduleId')
  
  //educations: this.get('modEdu').get('records').get('educationId')
});


//OrionFw.Education.allModules = SC.Collection.create({ recordType: OrionFw.Module });

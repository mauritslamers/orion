// ==========================================================================
// Admissionexam.AEDisplay
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AEMenuItem = SC.Record.extend(
/** @scope Admissionexam.AEDisplay.prototype */ {
   iconClassName: 'sc-icon-folder-16',
   
   editView: function(){
     var viewname = this.get('view').dasherize().camelize();
     return SC.page.get(viewname);
   }.property('view'),
   
  // TODO: Add your own code here.
   properties: [ 'id', 'name', 'view']
}) ;

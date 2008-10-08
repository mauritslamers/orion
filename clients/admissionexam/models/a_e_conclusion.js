// ==========================================================================
// Admissionexam.AEConclusion
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AEConclusion = SC.Record.extend(
/** @scope Admissionexam.AEConclusion.prototype */ {
  //dataSource: OrionFw.server,
  resourceURL: [OrionFw.standardResource + 'AEConclusion'],
  // TODO: Add your own code here.
  properties: ['id','name','year']
}) ;

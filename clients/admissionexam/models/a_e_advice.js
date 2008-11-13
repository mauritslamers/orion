// ==========================================================================
// Admissionexam.AEAdvice
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AEAdvice = SC.Record.extend(
/** @scope Admissionexam.AEAdvice.prototype */ {

  dataSource: AdmissionExam.server,
  resourceURL: [OrionFw.standardResource + 'AEAdvice'],
  // TODO: Add your own code here.
  properties: ['id','name','year','group']
  
}) ;

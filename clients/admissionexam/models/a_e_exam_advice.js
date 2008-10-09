// ==========================================================================
// Admissionexam.AEExamAdvice
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AEExamAdvice = SC.Record.extend(
/** @scope Admissionexam.AEExamAdvice.prototype */ {
  
  dataSource: AdmissionExam.server,
  resourceURL: [OrionFw.standardResource + 'AEExamAdvice'],
  // TODO: Add your own code here.
  properties: ['id','examId','adviceId']
}) ;

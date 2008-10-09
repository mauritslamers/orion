// ==========================================================================
// Admissionexam.AETeacher
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AETeacher = OrionFw.Teacher.extend(
/** @scope Admissionexam.AETeacher.prototype */ {

  dataSource: AdmissionExam.server,
  resourceURL: [OrionFw.standardResource + 'AETeacher'],
  // TODO: Add your own code here.
  
  properties: ['id','username','firstname','inbetween','lastname','email','orionUserId']
}) ;

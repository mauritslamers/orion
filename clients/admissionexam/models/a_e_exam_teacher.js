// ==========================================================================
// Admissionexam.AEExamTeacher
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AEExamTeacher = SC.Record.extend(
/** @scope Admissionexam.AEExamTeacher.prototype */ {
  //dataSource: OrionFw.server,
  resourceURL: [OrionFw.standardResource + 'aeexamteacher'],
  // TODO: Add your own code here.
  properties: ['id','examId','teacherId'],
  
  teacherIdType: 'AdmissionExam.AETeacher'
  
}) ;

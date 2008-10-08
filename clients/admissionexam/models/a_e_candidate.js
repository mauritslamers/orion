// ==========================================================================
// Admissionexam.AECandidate
// ==========================================================================

require('core');
require('orion_fw');
/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AECandidate = OrionFw.Student.extend(
/** @scope Admissionexam.AECandidate.prototype */ {
  //dataSource: OrionFw.server,
  resourceURL: [OrionFw.standardResource + 'AECandidate'],
  // TODO: Add your own code here.
  properties: ['id','firstname','inbetween','lastname','address','postcode','city']
}) ;

// ==========================================================================
// Admissionexam.CandidateChoiceController
// ==========================================================================

require('core');
require('orion_fw');
require('a_e_candidate');
/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.candidateChoiceController = SC.CollectionController.create(
/** @scope Admissionexam.candidateChoiceController */ {
  
  canEditCollection: true,
  commitChangesImmediately: false,
  content: SC.Collection.create( { recordType: 'AdmissionExam.AECandidate' })

}) ;

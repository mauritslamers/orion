// ==========================================================================
// Admissionexam.CandidateChoiceController
// ==========================================================================

require('core');
require('orion_fw');

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

  // TODO: Add your own code here.
  selectionSet: function(){
    var selection = this.get('selection');
    if((selection) && (selection.length > 0)){
      return true; 
    } else {
      return false;
    }
  }.property('selection')

}) ;

// ==========================================================================
// Admissionexam.SelectedCandidateController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.selectedCandidateController = SC.ObjectController.create(
/** @scope Admissionexam.selectedCandidateController */ {

  // TODO: Add your own code here.
  
  contentBinding: 'AdmissionExam.candidateChoiceController.selection',

  saveChanges: function(){
    var content = this.get('content');
    if(content){
      AdmissionExam.server.commitRecords(content); 
    }
  },
  
  revertChanges: function(){
    var content = this.get('content');
    if(content){
       AdmissionExam.server.refreshRecords(content);
    }
  }
}) ;

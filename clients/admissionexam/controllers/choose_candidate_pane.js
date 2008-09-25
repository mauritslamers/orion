// ==========================================================================
// Admissionexam.ChooseCandidatePaneController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.chooseCandidatePaneController = SC.Object.create(
/** @scope Admissionexam.chooseCandidatePaneController */ {

  // TODO: Add your own code here.
  show: function(){
    SC.page.aeChooseCandidatePane.set('isVisible',true);
    var students = AdmissionExam.AECandidate.collection();
    students.set('orderBy',['lastname ASC']);
    AdmissionExam.candidateChoiceController.set('content',students);    
  },
  
  hide: function(){
    SC.page.aeChooseCandidatePane.set('isVisible',false);  
  } 
  
}) ;

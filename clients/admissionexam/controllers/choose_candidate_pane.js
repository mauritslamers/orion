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
AdmissionExam.chooseCandidatePaneController = SC.Controller.create(
/** @scope Admissionexam.chooseCandidatePaneController */ {

  show: function(){
    SC.page.aeChooseCandidatePane.set('isVisible',true);
//    var students = AdmissionExam.AECandidate.collection();
//    students.set('orderBy',['lastname ASC']);
//    AdmissionExam.candidateChoiceController.set('content',students);    
      AdmissionExam.candidateChoiceController.get('content').refresh();
      AdmissionExam.examListOfChosenCandidateController.get('content').refresh();

  },
  
  hide: function(){
    SC.page.aeChooseCandidatePane.set('isVisible',false);  
  } 
  
}) ;

// ==========================================================================
// Admissionexam.AdmissionExamApplicationController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.admissionExamApplicationController = SC.Object.create(
/** @scope Admissionexam.admissionExamApplicationController */ {

   allowEditing: true,
   
   _currentDate: '',
   
   _currentCandidate: 'AdmissionExam.AECandidate',
   
   _testGuid: '',

  // TODO: Add your own code here.
   createNewExam: function(){
      // get the id of the selected candidate.
      var selectedCandidate = AdmissionExam.selectedCandidateController.get('content');
      if(selectedCandidate){
         var candidateGuid = selectedCandidate.get('guid');
         AdmissionExam.AEExam.newRecord({'candidateId': candidateGuid});
         //this.set('_currentDate',currentDate);
         this.set('_currentCandidate',selectedCandidate);
      }
      AdmissionExam.chooseCandidatePaneController.hide();
   },
  
   reviewExam: function(){
   
   }
}) ;

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
      var selectedCandidate = AdmissionExam.selectedCandidateController.get('content').first();
      if(selectedCandidate){
         var candidateGuid = selectedCandidate.get('guid');
         var newExam = AdmissionExam.AEExam.newRecord({'candidateId': candidateGuid});
         AdmissionExam.currentExamController.set('content',newExam);
         // now let's have the record created 
         
         this.set('_currentCandidate',selectedCandidate);
      }
      
      AdmissionExam.chooseCandidatePaneController.hide();
   },
  
   reviewExam: function(){
   
   }
}) ;

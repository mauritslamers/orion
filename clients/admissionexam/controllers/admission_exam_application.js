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
AdmissionExam.admissionExamApplicationController = SC.Controller.create(
/** @scope Admissionexam.admissionExamApplicationController */ {

   allowEditing: null,
   
   _currentDate: '',
   
   _currentCandidate: 'AdmissionExam.AECandidate',
   
   _testGuid: '',
   
   allowEditingFlag: false,

  // TODO: Add your own code here.
   createNewExam: function(){
      // get the id of the selected candidate.
      var selectedCandidate = AdmissionExam.selectedCandidateController.get('content').first();
      if(selectedCandidate){
         //var candidateGuid = selectedCandidate.get('guid');
         this.set('allowEditing',true);
         var newExam = AdmissionExam.AEExam.newRecord({'candidateId': selectedCandidate});
         // now let's have the record created 
         AdmissionExam.server.createRecords([newExam]);
         
         //AdmissionExam.currentExamController.set('content',null);         
         AdmissionExam.currentExamController.set('content',newExam);
         
         this.set('_currentCandidate',selectedCandidate);
         //set the system state text
         this.set('systemState','_new_exam'.loc());
         
         // make sure allowEditing is true
         AdmissionExam.chooseCandidatePaneController.hide();
      } 
   },
  
   reviewExam: function(){
      // reviewing a specific exam
      // so get the content of the selection made
      //debugger;
      //first set the allow editing to ensure all elements have the correct setting
      var allowEditingFlag = this.get('allowEditingFlag');
      this.set('allowEditing',allowEditingFlag);
      
      var selectedExam = AdmissionExam.examListOfChosenCandidateController.get('selection');
      if((selectedExam) && (selectedExam.length == 1)){
         //AdmissionExam.currentExamController.set('content',null);
         AdmissionExam.currentExamController.set('content',selectedExam.first());  
      }

      
      // save the current candidate for future reference (like closing the pane without changes)
      var selectedCandidate = AdmissionExam.selectedCandidateController.get('content').first();
      this.set('_currentCandidate',selectedCandidate);
      
      //set the system state text
      if(allowEditingFlag){
         var text = ['_editing_exam_from'.loc(), selectedExam.first().get('date')].join(" ");
      } 
      else {
         var text = ['_reviewing_exam_from'.loc(), selectedExam.first().get('date')].join(" ");
      }
      this.set('systemState',text);

      // close the pane
      AdmissionExam.chooseCandidatePaneController.hide();
   },
   
   closePaneWithoutChanges: function(){
      // check if the current selected student in the pane corresponds with the 
      // selection saved in _currentCandidate
      var currentCandidate = this.get('_currentCandidate');
      var selectedCandidate = AdmissionExam.selectedCandidateController.get('content');
      if(currentCandidate){
         // no use comparing the current selection, when no candidate is currently in view
         var currentguid = currentCandidate.get('guid');
         var selectedguid = selectedCandidate.first().get('guid');
         if(currentguid != selectedguid){
           // reset the current candidate to the _currentCandidate
           AdmissionExam.candidateChoiceController.set('selection',currentCandidate);
         }  
      }
   },
   
   systemState: '_please_select_a_candidate'.loc()
   
   
   
}) ;

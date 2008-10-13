// ==========================================================================
// Admissionexam.CommitteeCompositionController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.committeeCompositionController = SC.Object.create(
/** @scope Admissionexam.committeeCompositionController */ {

   _examIdBinding : 'AdmissionExam.currentExamController.guid',

  // TODO: Add your own code here.
   addMemberToCurrentCommittee: function(){
      var selection = AdmissionExam.possibleCommitteeMembersController.get('selection');
      if((selection) && (selection instanceof Array)){
         var teacherId = selection.first(); // a selection is an array, and we need an object
         var examId = this.get('_examId');
         if(examId){
            AdmissionExam.AEExamTeacher.newRecord( { 'examId' : examId, 'teacherId': teacherId }); 
         }
      }
  },
  
  removeMemberFromCurrentCommittee: function(){
     var selection = AdmissionExam.currentExamCommitteeController.get('selection');
     if((selection) && (selection instanceof Array)){
         var teacher = selection.first(); // a selection is an array, and we need an object
         
     }
  }
}) ;

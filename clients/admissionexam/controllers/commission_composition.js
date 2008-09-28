// ==========================================================================
// Admissionexam.CommissionCompositionController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.commissionCompositionController = SC.Object.create(
/** @scope Admissionexam.commissionCompositionController */ {

  // TODO: Add your own code here.
   addMemberToCurrentCommission: function(){
      var selection = AdmissionExam.possibleCommissionMembersController.get('selection');
      if((selection) && (selection instanceof Array)){
         var teacherId = selection[0]; // a selection is an array, and we need an object
         AdmissionExam.AEExamTeacher.newRecord( { 'examId' : 1, 'teacherId': teacherId }); 
      }
  },
  
  removeMemberFromCurrentCommission: function(){
     var selection = AdmissionExam.currentExamCommissionController.get('selection');
     if((selection) && (selection instanceof Array)){
         var teacher = selection[0]; // a selection is an array, and we need an object
         
     }
  }
}) ;

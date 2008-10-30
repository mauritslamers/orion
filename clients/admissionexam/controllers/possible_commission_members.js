// ==========================================================================
// Admissionexam.PossibleCommitteeMembersController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.possibleCommitteeMembersController = SC.CollectionController.create(
/** @scope Admissionexam.possibleCommitteeMembersController */ {

  // TODO: Add your own code here.
  
  _assignedCommitteeMembersBinding: 'AdmissionExam.currentExamCommitteeController.arrangedObjects',
  
  _examIdBinding: 'AdmissionExam.currentExamController.guid',
    
  _assignedCommitteeMembersObserver: function(){

    // different approach
    var examId = this.get('_examId');
    var allTeachers = SC.Store.findRecords(AdmissionExam.AETeacher);
    var allExamTeacherLinks = SC.Store.findRecords({ 'examId': examId }, AdmissionExam.AEExamTeacher);
    var content = this.get('content');
    if(allTeachers && content){
      if(allExamTeacherLinks.length<1){
          // just set the conditions to the entire set available
          if(content){
            content.set('conditions', { 'guid' : allTeachers.get('guid') }); 
          }
      } 
      else {
         // filter 
         if(examId){
            var allExamTeacherIds = allExamTeacherLinks.get('teacherId').get('guid');
            var conditionsAry = [];
            allTeachers.each( function(s){
               var guid = s.get('guid');
               var pos = allExamTeacherIds.indexOf(guid);
               if(pos<0){
                  conditionsAry.push(guid);
               }
            });
            // set the conditions
            content.set('conditions', { 'guid' : conditionsAry });
         }
      }
    }  
  }.observes('_assignedCommitteeMembers')
  
}) ;

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
  
  _assignedCommitteeMembersObserver: function(){
      var assignedMembers = this.get('_assignedCommitteeMembers');
      if((assignedMembers) && (assignedMembers.length>0) && (this.get('content')) && (this.get('arrangedObjects').length>0)){
         var leaveOut = assignedMembers.get('guid');         
         var allGuids = this.get('content').get('records').get('guid');
         var conditionArray = [];
         allGuids.each(function(s){
            var pos = leaveOut.indexOf(s);
            if(pos<0){
               // only returns > 0 if found
               conditionArray.push(s);
            }
         });
         this.get('content').set('conditions',{ 'guid': conditionArray });
      }
  }.observes('_assignedCommitteeMembers')
  
}) ;

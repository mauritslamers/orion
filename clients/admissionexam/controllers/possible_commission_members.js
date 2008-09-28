// ==========================================================================
// Admissionexam.PossibleCommissionMembersController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.possibleCommissionMembersController = SC.CollectionController.create(
/** @scope Admissionexam.possibleCommissionMembersController */ {

  // TODO: Add your own code here.
  
  _assignedCommissionMembersBinding: 'AdmissionExam.currentExamCommissionController.arrangedObjects',
  
  _assignedCommissionMembersObserver: function(){
      var assignedMembers = this.get('_assignedCommissionMembers');
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
  }.observes('_assignedCommissionMembers')
  
}) ;

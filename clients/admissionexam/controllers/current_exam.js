// ==========================================================================
// Admissionexam.CurrentExamController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.currentExamController = SC.ObjectController.create(
/** @scope Admissionexam.currentExamController */ {

  // TODO: Add your own code here.
  //conclusionBinding: 'AdmissionExam.conclusionListController.selection',
  /*
  conclusionObserver: function(){
      var conclusionAry = this.get('conclusion');
      if((conclusionAry) && (conclusionAry instanceof Array)){
         // get the conclusion
         var conclusion = conclusionAry.first();
         var currentConclusion = this.get('conclusionId');
         if(conclusion && currentConclusion){
            if(conclusion.get('guid') != currentConclusion.get('guid')){
              this.set('conclusionId',conclusion);
            }
         }
      }
  }.observes('conclusion'),  */
  
  conclusionIdBinding: 'AdmissionExam.conclusionListController.selectedConclusionId',
  
  changesObserver: function(){
    //console.log("Change!");
    //var hasChanges = this.get('hasChanges'); 
    // if the allowEditing flag on the applicationcontroller is set to false, don't do anything.
    var editingAllowed = AdmissionExam.admissionExamApplicationController.get('allowEditing');
    if(editingAllowed){
       var hasChanges = this.get('isDirty');
        if(hasChanges){
          var content = this.get('content');
          if(content){
             AdmissionExam.server.commitRecords([content]);
             OrionFw.retrieveSystemState();
          }
        }
    }
  }.observes('hasChanges')
  
}) ;

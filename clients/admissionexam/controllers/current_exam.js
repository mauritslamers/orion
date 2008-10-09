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
  _conclusionBinding: 'AdmissionExam.conclusionListController.selection',
  
  _conclusionObserver: function(){
      var conclusionAry = this.get('_conclusion');
      if((conclusionAry) && (conclusionAry instanceof Array)){
         // get the conclusion
         var conclusion = conclusionAry.first();
         this.set('conclusionId',conclusion);
      }
  }.observes('_conclusion'),
  
  _contentObserver: function(){
    //console.log("Change!");
    //var hasChanges = this.get('hasChanges'); 
    var hasChanges = this.get('isDirty');
    if(hasChanges){
      var content = this.get('content');
      if(content){
         AdmissionExam.server.commitRecords([content]);
      }
    }
  }.observes('hasChanges')
}) ;

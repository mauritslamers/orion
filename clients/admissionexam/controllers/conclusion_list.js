// ==========================================================================
// Admissionexam.ConclusionListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.conclusionListController = SC.CollectionController.create(
/** @scope Admissionexam.conclusionListController */ {

  // TODO: Add your own code here.
  //selectedConclusionId: null,
  
  conclusionBinding: 'AdmissionExam.currentExamController.conclusionId',
 /* 
  conclusionObserver: function(){
      var conclusion = this.get('conclusion');
      var currentSelection = this.get('selection');
      if(conclusion){
         if((currentSelection) && (currentSelection.length == 1)){
            // check current selection against the conclusion
            var currentSelGuid = currentSelection.first().get('guid');
            var conclusionGuid = conclusion.get('guid');
            if((currentSelGuid) && (conclusionGuid) && (currentSelGuid != conclusionGuid)){
               // prevent setting the selection when either guid = 0 or when they are the same
               this.set('selection',[conclusion]);    
            }
         } else {
            this.set('selection',[conclusion]);  
         }
      }
  }.observes('conclusion')
  */
  
  selectedConclusionObserver: function(){
    var sel = this.get('selection');
    if((sel) && (sel.length == 1)){
      var record = sel.first();
      //console.log(record);
      var id = record.get('guid');
      //console.log(id);
      if(id){
         this.set('selectedConclusionId',id);  
         //AdmissionExam.currentExamController.set('conclusionId',id);
      }
    }
  }.observes('selection')
  
}) ;

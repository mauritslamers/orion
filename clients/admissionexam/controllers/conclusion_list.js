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

/*  
  conclusionBinding: 'AdmissionExam.currentExamController.conclusionId',
  
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
}) ;

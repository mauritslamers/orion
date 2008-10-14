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
  
  _conclusionBinding: 'AdmissionExam.currentExamController.conclusionId',
  
  _conclusionObserver: function(){
      var conclusion = this.get('_conclusion');
      if(conclusion){
         this.set('selection',[conclusion]);  
      }
  }.observes('_conclusion')

}) ;

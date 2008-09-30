// ==========================================================================
// Admissionexam.ExamListOfChosenCandidateController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.examListOfChosenCandidateController = SC.CollectionController.create(
/** @scope Admissionexam.examListOfChosenCandidateController */ {

  // TODO: Add your own code here.
  _arrangedObjects: [],
  
  arrangedObjects: function( key, value ) { 
      if ( value ) {
         /* adjust for incoming array, store internally, e.g. this._aryToReturn */ 
         var newList = [];
         value.each(function(s){ 
               // assemble the items to show
               
               newList.push(s.get('teacherId')); 
               });
         this.set('_arrangedObjects',newList);
      }
      // our model:
      //else return (this._aryToReturn) ? this._aryToReturn: []; 
      else return (this._arrangedObjects) ? this._arrangedObjects: []; 
  }.property()
}) ;

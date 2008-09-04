// ==========================================================================
// Coursecoordinator.CM_courseListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
CourseCoordinator.CM_courseListController = SC.CollectionController.create(
/** @scope Coursecoordinator.CM_courseListController */ {

  // TODO: Add your own code here.
  allowsEmptySelection: true,  allowsMultipleSelection: false,
  courseSelected: false,
  
  
  _selectionObserver: function(){
    var tmpSelection = this.get('selection');
    if((tmpSelection != null) && (typeof(tmpSelection) == 'object')){
      // check whether valid  
      var tmpSize = tmpSelection.size();
      if(tmpSize == 1){
        this.set('courseSelected',true);
      } else {
        this.set('courseSelected',false);
      }
    } 
  }.observes('selection')

}) ;

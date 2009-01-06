// ==========================================================================
// Muzorion.CmCourseListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Muzorion.cmCourseListController = SC.CollectionController.create(
/** @scope Muzorion.cmCourseListController */ {

  // TODO: Add your own code here.
  allowMultipleSelection: false,
  
  orderBy: 'name'
}) ;

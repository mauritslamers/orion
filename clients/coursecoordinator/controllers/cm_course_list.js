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
  orderBy: 'name DESC'


}) ;

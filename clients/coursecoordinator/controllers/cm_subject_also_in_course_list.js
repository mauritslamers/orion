// ==========================================================================
// Coursecoordinator.CmSubjectsAlsoInCourseListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
CourseCoordinator.CM_subjectAlsoInCourseListController = SC.Object.create(
/** @scope Coursecoordinator.cmSubjectsAlsoInCourseListController */ {

  // TODO: Add your own code here.
  _selectedSubjectBinding: 'CourseController.CM_subjectsInCourseListController.selection',
  
  _selectedSubjectObserver: function(){
  	
  	
  }.observes('_selectedSubjectBinding')

}) ;

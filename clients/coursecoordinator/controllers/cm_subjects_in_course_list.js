// ==========================================================================
// Coursecoordinator.CMSubjectsInCourseListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
CourseCoordinator.CM_subjectsInCourseListController = SC.ArrayController.create(
/** @scope Coursecoordinator.cmSubjectsInCourseListController */ {

  // TODO: Add your own code here.
  allowsEmptySelection: false,  allowsMultipleSelection: false,

  _selectedCourseBinding : 'CourseCoordinator.CM_courseListController.selection',

  //subjectsInCourse: '',
  
  _selectedCourseObserver: function(){
    var tmpselectedCourse = this.get('_selectedCourse');
    if((tmpselectedCourse != null) && (typeof(tmpselectedCourse) == "object")){
      var tmpguid = this.get('_selectedCourse').get('guid');
      //var tmpmodules = SC.Store.findRecords( { 'educationId': tmpguid }, OrionFw.ModEdu).get('moduleId');
      this.set('content', SC.Store.findRecords( { 'educationId': tmpguid }, OrionFw.ModEdu).get('moduleId'));
    }
  }.observes('_selectedCourse')

}) ;

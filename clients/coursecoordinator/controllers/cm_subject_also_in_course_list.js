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
CourseCoordinator.CM_subjectAlsoInCourseListController = SC.ArrayController.create(
/** @scope Coursecoordinator.cmSubjectsAlsoInCourseListController */ {

  // TODO: Add your own code here.
  
  allowsEmptySelection: false,  allowsMultipleSelection: false,
  
  _selectedSubjectBinding: 'CourseCoordinator.CM_subjectsInCourseListController.selection',
  
  _selectedSubjectObserver: function(){
  	var tmpSubject = this.get('_selectedSubject');
  	if((tmpSubject != null) && (typeof(tmpSubject) == "object")){
  		var tmpguid = tmpSubject.get('guid');
	  	var tmpEducations = SC.Store.findRecords({'moduleId':tmpguid},OrionFw.ModEdu).get('educationId'); 
  		this.set('content',tmpEducations);
  	}
  }.observes('_selectedSubject')

}) ;

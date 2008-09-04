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
  
  allowsEmptySelection: true,  allowsMultipleSelection: false,
  
  _selectedSubjectBinding: 'CourseCoordinator.CM_subjectsInCourseListController.selection',
  
  _selectedSubjectObserver: function(){
  	var tmpSubject = this.get('_selectedSubject');
  	if((tmpSubject != null) && (typeof(tmpSubject) == "object")){
  		var tmpGuid = tmpSubject.get('guid');
  		if(!isNaN(tmpGuid)){
  	  	var tmpEducations = SC.Store.findRecords({'moduleId':tmpGuid},OrionFw.ModEdu).get('educationId'); 
  	  	if((tmpEducations != null) && (tmpEducations instanceof Array)){
    		  this.set('content',tmpEducations);
    		  this.set('selection',[]);
  	  	}
  		}
  	}
  }.observes('_selectedSubject')

}) ;

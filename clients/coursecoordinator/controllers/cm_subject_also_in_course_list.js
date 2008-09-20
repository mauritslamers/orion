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
CourseCoordinator.CM_subjectAlsoInCourseListController = SC.CollectionController.create(
/** @scope Coursecoordinator.cmSubjectsAlsoInCourseListController */ {

  // TODO: Add your own code here.
  
  allowsEmptySelection: true,  allowsMultipleSelection: false,
 
  _selectedSubjectBinding: 'CourseCoordinator.CM_subjectsInCourseListController.selection',

  _selectedCourseBinding: 'CourseCoordinator.CM_courseListController.selection',
  
  _selectedSubjectObserver: function(){
  	var tmpSubject = this.get('_selectedSubject');
  	if((tmpSubject != null) && (typeof(tmpSubject) == "object")){
  		var tmpGuid = tmpSubject.get('guid');
  		if(!isNaN(tmpGuid)){
  		  var tmpEducations = OrionFw.ModEdu.findAll({'moduleId':tmpGuid}).get('educationId');	  
  	  	if(tmpEducations && (tmpEducations instanceof Array)){
  	  	  // remove the current selected course
  	  	  var tmpSelectedCourse = this.get('_selectedCourse');
  	  	  if(tmpSelectedCourse){
  	  	    var tmpSelectedCourseGuid = tmpSelectedCourse.get('guid');	  	  
    	  	  if(tmpSelectedCourseGuid && (tmpSelectedCourseGuid instanceof Array)){
    	  	    tmpEducations = tmpEducations.without(tmpSelectedCourseGuid);
    	  	    this.set('conditions',{ 'guid':tmpEducations});
    	  	  }
  	  	  }
  	  	}
  		}
  	}
  }.observes('_selectedSubject')

}) ;

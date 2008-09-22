// ==========================================================================
// Coursecoordinator.CmAddSubjectsToPaneController
// ==========================================================================

require('core');
require('orion_fw');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
CourseCoordinator.CM_addSubjectsToCoursePaneController = SC.Object.create(
/** @scope Coursecoordinator.cmAddSubjectsToPaneController */ {

  // TODO: Add your own code here.
  show: function(){ 
    
    SC.page.ccCmAddSubjectsToSelectedCoursePane.set('isVisible',true);
    
    // after showing the pane, let's prepare the content of the 
    // list views   
    // first the available subjects list
    var availableSubjects = OrionFw.Module.collection();
    availableSubjects.refresh();
    // the conditions are actually negative, as they cannot contain the subjects
    // already in the course, so use .without to get rid of 'em
    var subjectsAlreadyInCourse = CourseCoordinator.CM_subjectsInCourseListController.get('arrangedObjects').get('guid');
    var subjectsNotInCourse = availableSubjects.records().get('guid').without(subjectsAlreadyInCourse);
    availableSubjects.set('conditions', { 'guid': subjectsNotInCourse });
    CourseCoordinator.CM_addSubjectsToCoursePaneAvailableSubjectsController.set('content',availableSubjects);
    
    
    //var availableDeparments = OrionFw.Department.collection();
    
    // last but not least the empty SubjectsToAdd list
    var subjectsToAdd = OrionFw.Module.collection();
    subjectsToAdd.set('conditions', {'guid': []});
    subjectsToAdd.refresh();
    CourseCoordinator.CM_addSubjectsToCoursePaneSubjectsToAddController.set('content',subjectsToAdd);
    
    
  },
  
  hide: function(){ 
    SC.page.ccCmAddSubjectsToSelectedCoursePane.set('isVisible',false);
  }
  
  
}) ;

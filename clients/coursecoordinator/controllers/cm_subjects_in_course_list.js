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
CourseCoordinator.CM_subjectsInCourseListController = SC.CollectionController.create(
/** @scope Coursecoordinator.cmSubjectsInCourseListController */ {

  // TODO: Add your own code here.
  allowsEmptySelection: true,  allowsMultipleSelection: false,

  orderBy: ['name DESC'],

  subjectSelected: false,
 
  _selectedCourseBinding : 'CourseCoordinator.CM_courseListController.selection',

  //subjectsInCourse: '',

  _selectedCourseObserver: function(){
    var tmpSelectedCourse = this.get('_selectedCourse');
    if((tmpSelectedCourse != null) && (typeof(tmpSelectedCourse) == "object")){
      var tmpGuid = this.get('_selectedCourse').get('guid');
      if(!isNaN(tmpGuid)){
       // var tmpModules = SC.Store.findRecords( { 'educationId': tmpGuid }, OrionFw.ModEdu).get('moduleId');
       var tmpModules = OrionFw.ModEdu.findAll( { 'educationId' : tmpGuid }).get('moduleId');
       if((tmpModules != null) && (tmpModules instanceof Array)){
          content = this.get('content');
          if(content != null){
            //this.set('content', tmpModules);
            content.set('conditions',{'guid':tmpModules});
          }
        }
      }
    }
  }.observes('_selectedCourse'),

  _selectionObserver: function(){
    var tmpSelection = this.get('selection');
    if((tmpSelection != null) && (typeof(tmpSelection) == 'object')){
      // check whether valid  
      var tmpSize = tmpSelection.size();
      if(tmpSize == 1){
        this.set('subjectSelected',true);
      } else {
        this.set('subjectSelected',false);
      }
    } 
  }.observes('selection')

}) ;

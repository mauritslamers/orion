// ==========================================================================
// Muzorion.CmSubjectListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Muzorion.cmSubjectListController = OrionFw.LinkingCollectionController.create(
/** @scope Muzorion.cmSubjectListController */ {
  
  orderBy: 'subjectName',

  linkingElement: 'subjectId',
  
  externalLinkingElement: 'courseId',
  
  // TODO: Add your own code here.
  selectedCourseBinding: "Muzorion.cmCourseListController.selection",

  selectedCourseObserver: function(){
    var selCourse = this.get('selectedCourse');
    if((selCourse) && (selCourse instanceof Array) && (selCourse.length == 1)){
      var courseId = selCourse.first().get('guid');
      this.set('linkingValue',courseId);
    } 
  }.observes('selectedCourse')


}) ;

// ==========================================================================
// Muzorion.CmSubjectsAlsoInCourseController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Muzorion.cmSubjectsAlsoInCourseController = OrionFw.LinkingCollectionController.create(
/** @scope Muzorion.cmSubjectsAlsoInCourseController */ {

  // TODO: Add your own code here.
  orderBy: 'subjectName',
  
  linkingElement: 'subjectId',
  
  externalLinkingElement: 'courseId',
  
  selectedSubjectBinding: 'Muzorion.cmSubjectListController.selection',
  
  selectedCourseBinding: 'Muzorion.cmCourseListController.selection'
  
  
  
  
}) ;

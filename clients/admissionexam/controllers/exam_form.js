// ==========================================================================
// Admissionexam.ExamFormController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.examFormController = SC.ObjectController.create(
/** @scope Admissionexam.examFormController */ {

  // TODO: Add your own code here.
  
  _selectedViewBinding: 'AdmissionExam.candidateInformationSourceListViewController.selection',

  selectedView: function(){
    var selection = this.get('_selectedView');
    if((selection) && (selection.length == 1)){
       return $view('#' + selection.get('view'));   
       //return $view('#ae_candidate_information_evaluation');  
    } else {
       return $view('#ae_candidate_information_evaluation');   
    }
  }.property('_selectedView')
  
  
  //selectedView: $view('#ae_candidate_information_student_information')
  

  
}) ;

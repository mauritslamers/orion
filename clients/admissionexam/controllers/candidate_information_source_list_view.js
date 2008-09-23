// ==========================================================================
// Admissionexam.CandidateInformationSourceListViewController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.candidateInformationSourceListViewController = SC.ArrayController.create(
/** @scope Admissionexam.candidateInformationSourceListViewController */ {

  // TODO: Add your own code here.
  _selectedguid: '',
  
  _selectionObserver: function(){
    var selection = this.get('selection');
    if((selection) && (selection instanceof Array)){
        var guid = selection.get('guid');
        if(guid != NaN){
            this.set('_selectedguid',guid);
        }   
    }
  }.observes('selection'),
  
  studentInfoSelected: function(){
     var guid = this.get('_selectedguid');
     if((guid) && (guid == 1)){
        return true;
     } else {
        return false;
     }
  }.property('_selectedguid'),
  
  commissionInfoSelected: function(){
     var guid = this.get('_selectedguid');
     if((guid) && (guid == 2)){
        return true;
     } else {
        return false;
     }
  }.property('_selectedguid'),
  
  evaluationSelected: function(){
     var guid = this.get('_selectedguid');
     if((guid) && (guid == 3)){
        return true;
     } else {
        return false;
     }
  }.property('_selectedguid'),
  
  performanceInfoSelected: function(){
     var guid = this.get('_selectedguid');
     if((guid) && (guid == 4)){
        return true;
     } else {
        return false;
     }
  }.property('_selectedguid'),
  
  admissionTestSelected: function(){
     var guid = this.get('_selectedguid');
     if((guid) && (guid == 5)){
        return true;
     } else {
        return false;
     }
  }.property('_selectedguid'),
  
  overviewSelected: function(){
     var guid = this.get('_selectedguid');
     if((guid) && (guid == 6)){
        return true;
     } else {
        return false;
     }
  }.property('_selectedguid')
}) ;

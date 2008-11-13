// ==========================================================================
// Admissionexam.CheckBoxListView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
AdmissionExam.CheckBoxListView = SC.ListItemView.extend(
/** @scope Admissionexam.CheckBoxListView.prototype */ {


  contentValueBinding: '*content.value',
  
  isEnabledBinding: 'AdmissionExam.admissionExamApplicationController.allowEditing',

  valueChangeObserver: function(){
    var content = this.get('content');
    //debugger;
    if(content){
       var curValue = content.get('value');
       var curName = content.get('name');
       var curDontCommit = content.get('dontCommit');
       if(curDontCommit === false){ // don't allow it to be null
          console.log(curName + ': ' + curValue + ", curDontCommit: " + curDontCommit);
          // present the current record to be saved
          if(curValue){
            console.log("setting Record to add for: " + curName);
            this.get('parentNode').get('parentNode').set('recordToAdd',content); 
          }
          else {
            console.log("setting Record to remove for: " + curName);            
            this.get('parentNode').get('parentNode').set('recordToRemove',content);
          }
       }
       if(curDontCommit){
         content.set('dontCommit', false); 
       }
    }
  }.observes('contentValue'),
  
  isEnabledObserver: function() {
    //debugger;
    var disabled = !this.get('isEnabled') ;
    this.setClassName('disabled', disabled);

    // set disabled attr as well if relevant
    if (this.rootElement && (this.rootElement.disabled !== undefined) && (this.rootElement.disabled != disabled)) {
      this.rootElement.disabled = disabled ;
    }
  }.observes('isEnabled'),
  
}) ;

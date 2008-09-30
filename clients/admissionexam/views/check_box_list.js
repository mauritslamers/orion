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
AdmissionExam.CheckBoxListView = SC.CheckboxView.extend(
/** @scope Admissionexam.CheckBoxListView.prototype */ {


  _contentObserver: function(){
    // read the name from the content and set up the rest
    var content = this.get('content');
    if(content){
      var name = content.get('name');
      if(name){
        this.set('title',name);
        // setup other things?
        // yes! Set up the controller the value observer should post the changes to
        var owner = this.get('owner');
          
      }
    }
    
  }.observes('content')
    
/*
    contentValueKey: null,
    
    _contentValue: null,
    
    _contentValueObserver: function(){
      var _title = this.get('_title');
      if(!_title){      
          var del = this.displayDelegate;
          var key = this.getDelegateProperty(del, 'contentValue') ;
          this.set('title',key); 
      }
    }.observes('value') */

  // TODO: Add your own code here.

}) ;

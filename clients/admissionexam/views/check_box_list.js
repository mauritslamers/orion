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
        // setup other things? not at the moment
      }
    }
    
  }.observes('content'),
  
  _valueObserver: function(){
      var curValue = this.get('value');
      var curContent = this.get('content');
      var curSelection = this.get('parentNode').get('parentNode').get('selection');
      if(curValue){
         // add to selection
         curSelection.push(curContent);
      } 
      else {
         var newSelection = [];
         curSelection.each(function(s){
            if(s !== curContent){
              newSelection.push(s);  
            }
         });
         this.get('parentNode').get('parentNode').set('selection',newSelection);
      }
      //console.log(this.get('parentNode').get('parentNode'));
  }.observes('value')
    
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

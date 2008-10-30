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
      var tmpName = content.get('name');
      //console.log(tmpName);
      if(tmpName){
        this.set('title',tmpName);        
      }
      // setup other things? yes... the value 
      var tmpValue = content.get('value');
      if(tmpValue){
        debugger;
        this.set('value',true);  
      } 
    }
    
  }.observes('content'),
  
  // an observer including the current item in the source list view selection when tagged
  
  _valueObserver: function(){
      var curValue = this.get('value');
      var curContent = this.get('content');
      var curSelection = this.get('parentNode').get('parentNode').get('selection');
      if((curSelection) && (curSelection instanceof Array)){
         if(curValue){ // are we tagged?
            // yes, check whether we are already in the selection and if not add to selection
            var curGuid=curContent.get('guid');
            if(curSelection.length > 0){
               // if there is something in the array, check it
               var curValueInCurSelection = [];
               curSelection.each(function(s){
                 var g = s.get('guid');
                 if(g){
                   if(g == curGuid){
                     curValueInCurSelection.push(g);  
                   }
                 }
               });
               if(curValueInCurSelection.length<1){
                  // not in the selection array? Add me...
                  curSelection.push(curContent);
               }
            }
            else {
              // if there is nothing in the array, always add
              curSelection.push(curContent);  
            }
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
      }
      //console.log(this.get('parentNode').get('parentNode'));
  }.observes('value')
  


}) ;

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
//AdmissionExam.CheckBoxListView = SC.ListItemView.extend(

/** @scope Admissionexam.CheckBoxListView.prototype */ {

  //contentCheckboxKey: '*content.value',
  
  //contentValueKey: '*content.name',

  dontCommit: true, // don't commit elements to the back end at first
    
  _contentProcessed: false, // prevent processing of the current content 
  // if the contentObserver has not been able do anything.
  
  //isEnabledBinding: '*content.isEnabled',
  
  isEnabledBinding: 'AdmissionExam.admissionExamApplicationController.allowEditing',
  
  //isEnabled: null,
  
  titleBinding: '*content.name',
  
  //valueBinding: '*content.value',
  
  //_contentChangeCountBinding: '*content.changeCount',
  
  updateObserver: function(){
    // read the name from the content and set up the rest
    //this.addProbe('isEnabled');
    
    AdmissionExam.counter++;
    var content = this.get('content');
    //console.log(AdmissionExam.counter + 'setting cblv content');
    if(content){
      //debugger;
//      var tmpName = content.get('name');
//      console.log(AdmissionExam.counter + "setting name: " + tmpName);
//      if(tmpName){
//        this.set('title',tmpName);        
//      }
      // setup other things? yes... the value 
      var tmpValue = content.get('value');
      if(tmpValue){
        //debugger;
        this.set('value',true);
      }
      
 /*     var enabled = content.get('isEnabled');
      this.set('isEnabled',enabled);
      // checking whether it worked...
      if(this.get('isEnabled') != enabled){
        this.isEnabled = enabled;
        this.set('isEnabled',enabled);
        console.log(AdmissionExam.counter + ' forcing enabled setting to ' + enabled);
      } */
      
      //console.log(AdmissionExam.counter + 'setting enabled: ' + enabled);
      
      //this.set('dontCommit', true);
      //this.set('_contentProcessed',true);
    } 
  }.observes('content'),
  
  
  // an observer including the current item in the source list view selection when tagged
  _lastValue: null,
  
  _valueObserver: function(){
  // if(this._contentProcessed){
      //debugger;
      var curValue = this.get('value');
      var curContent = this.get('content');
      var curSelection = this.get('parentNode').get('parentNode').get('selection');
      //var curNumSelectedItems = this.get('parentNode').get('parentNode').get('numberOfSelectedItems');
      if((curSelection) && (curSelection instanceof Array)){
         if(curValue && (curValue != this._lastValue)){ // are we tagged?
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
               }); // a list with items in the selection with the same guid
               if(curValueInCurSelection.length<1){
                  // not in the selection array? Add me...
                  var tmpAry = curSelection;
                  tmpAry.push(curContent);
                  this.get('parentNode').get('parentNode').set('selection',tmpAry);
                  //debugger;
                  this.get('parentNode').get('parentNode').set('recordToAdd',curContent);
               }
            }
            else {
              // if there is nothing in the array, always add
              var tmpAry = [];
              tmpAry.push(curContent);  
              this.get('parentNode').get('parentNode').set('selection',tmpAry);
              //debugger;
              this.get('parentNode').get('parentNode').set('recordToAdd',curContent);
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
            //debugger;
            this.get('parentNode').get('parentNode').set('recordToRemove',curContent);
         }
      }
      // if the item just has been put from the db, dontCommit is still true
      // so, set it to false to allow future changes
      if(this.dontCommit){
        this.dontCommit = false;  
      } 
      //console.log(this.get('parentNode').get('parentNode'));
//   }
   this._lastValue = curValue; //set this._lastValue to the current value to be able to compare next time
  }.observes('value')

}) ;

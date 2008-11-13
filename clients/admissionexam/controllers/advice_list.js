// ==========================================================================
// Admissionexam.AdviceListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
AdmissionExam.adviceListController = SC.CollectionController.create(
/** @scope Admissionexam.adviceListController */ {
  
  canEditCollection: true,
   // the trick: two contents
   // one: the content of possibilities
   // two: the content of the links
   
   // the real content needs to be the content of the links
   // the relation needs to be set in a few different properties
   // the possibilities can be retrieved from the Store
  examIdBinding: 'AdmissionExam.currentExamController.guid',
  
  _lastAllowEdit: null, 
  
  allowEditOnAppControllerBinding: 'AdmissionExam.admissionExamApplicationController.allowEditing',
  
  allowEditOnAppController: true,  

  allowEdit: null,
  
  _lastExamId: -1,
  
  recordToRemove: '',
  
  recordToAdd: '',
  
  _returnEmptyArrangedObjects: false,
 
  _currentExamObserver: function(){
     //debugger;
     var curExamGuid = this.get('examId');
     var lastExamId = this.get('_lastExamId');
     //var tmpAllowEditing = this.get('allowEditOnApplicationController');
     var allowEditing = this.get('allowEditOnAppController');
     //var allowEdit = AdmissionExam.admissionExamApplicationController.get('allowEditing');
     //this.allowEdit = allowEdit;
     //debugger;
     if(((curExamGuid) && (lastExamId != curExamGuid)) || ((this._lastAllowEdit != allowEditing) && (curExamGuid))){ 
        // prevent an endless loop? check needs to be in place to prevent an endless loop for some reason...
        // but allow to run when the allowEdit value has changed
        //debugger;
        this.set('selection',[]); // reset the selection when the content changes
        this.set('content',null); // reset the content to force a redraw
        this._getChoiceList(); // reset the choices
        
        //this._returnEmptyArrangedObjects = true; 
        
        this.set('_lastExamId',curExamGuid);
        var examAdvice = AdmissionExam.AEExamAdvice.collection();
        examAdvice.set('conditions', { 'examId':[curExamGuid] }); 
        examAdvice.refresh();
        this.set('content',examAdvice);
        this._lastAllowEdit = allowEditing;
     }
  }.observes('examId','allowEditOnAppController'), 
 
  recordToRemoveObserver: function(){
    var record = this.get('recordToRemove');
    var allowEditing = this.get('allowEditOnAppController');
    if(record){
       var recordGuid = record.guid;
       var examGuid = this.get('examId');      
       if(!record.dontCommit && allowEditing && recordGuid && examGuid){
         console.log('Delete record from DB'); 
         //var tmpRecord = SC.Store.findRecords({ 'examId': examGuid, 'adviceId': recordGuid}, AdmissionExam.AEExamAdvice);
         //if(tmpRecord){
           // AdmissionExam.server.destroyRecords(tmpRecord);
         //}
       } else {
         // adjust the current record to allow committing the next time
         //record.set('dontCommit', false);
       }
       this.set('recordToRemove', null);
    }
  }.observes('recordToRemove'),
  
  recordToAddObserver: function(){
    var record = this.get('recordToAdd');
    var allowEditing = this.get('allowEditOnAppController');
    if(record){
       var recordGuid = record.guid;
       var examGuid = this.get('examId');
       if(!record.dontCommit && allowEditing && recordGuid && examGuid){
         console.log('Add record To DB'); 
         //var newLink = AdmissionExam.AEExamAdvice.newRecord({'examId': examGuid, 'adviceId': recordGuid});
         //AdmissionExam.server.createRecords([newLink]);
       } else {
         // adjust the current record to allow committing the next time. Every item is set to dontCommit at first 
         // by the arrangedObjects method. After every fill, the object is also fed into here. So, only user
         // changes will trigger the database committing process
         record.set('dontCommit', false);
       }
       this.set('recordToAdd', null);
    }  
  }.observes('recordToAdd'),  
  
   
  choiceModelName: 'AdmissionExam.AEAdvice',
  
  choiceGuidToMatch: 'adviceId',
  
  _choices: [],
  
  _getChoiceList: function(){
    // get to the model
    var choiceModelName = this.get('choiceModelName');
    //replace all dots with spaces
    var choiceModelSpaces = choiceModelName.replace('.',' ');
    //next create an array of the elemenst
    var ary = $w(choiceModelSpaces);
    // now get to object;
    var choiceModel = window;
    for(i=0;i<ary.length;i++){
      choiceModel = choiceModel[ary[i]]; // use the subscript notation to descend into the object tree
    }
    var choices = SC.Store.findRecords(choiceModel);
    // setting all to false as a default value
    var newChoices = [];
    choices.each(function(s){ s.value = false; s.dontCommit = true; newChoices.push(s); });
    this.set('_choices',newChoices);
    //return newChoices;
  },
  
  _arrangedObjects: [],
  
  arrangedObjects: function( key, value ){
    //debugger;
    if(value){
       //debugger;
       // first get the choices
       //var choices  = this._getChoiceList();
       var allowEdit = this.get('allowEditOnAppController');
       var choices = this.get('_choices');
       var choiceGuidToMatch = this.get('choiceGuidToMatch');
       if((value.length > 0) && (choices.length > 0) && choiceGuidToMatch){
          var choiceGuidsToSet = value.get(choiceGuidToMatch);          
          var returnAry = [];
          choices.each(function(s){
            var curGuid = s.get('guid');
            if(choiceGuidsToSet.indexOf(curGuid) != -1){
              // set the value item to true if it is in the array
              s.value = true;  
            }
            else {
               s.value = false;
            }
            //set the items enabled or disabled according to the allowEdit setting
            /*if(allowEdit){
              s.set('isEnabled',true);  
            }
            else {
               s.set('isEnabled',false);
            }*/
            //s.isEnabled = allowEdit;
            //if(s.value){
               s.dontCommit = true;
            //}
            returnAry.push(s);
          });         
          this._arrangedObjects = returnAry;
          //return returnAry;
       }
       else {
         // it seems to be the case that arrangedObjects can be called with an empty [] as value,
         // while the content of this collection controller, the collection DOES contain records...
         // so before doing anything, let's check if there are records, and if there are records
         // and value is an empty record, don't touch the _arrangedObjects cache,but just return it
          
         var curContent = this.get('content');
         if((curContent) && (curContent.records().length == 0) && (value.length == 0)){

            // if the value length is zero, arrangedObjects should set all choices, but all set to false
            var list = this._choices;
            var newList = [];
            list.each(function(s){
               s.dontCommit = true; // prevent committing at first. 
               newList.push(s); // which will set the dontCommit to false, which enables the next change to commit
            });
            this._arrangedObjects = newList;  
         }
       }
    }
    else {
/*      if(this._returnEmptyArrangedObjects){
         debugger;
         this._choices = [];
         this._arrangedObjects = [];
         this._returnEmptyArrangedObjects = false;
         return [];
      }
      else */ 
      SC.page.aeCandidateAdvice.aeCiAdviceAdviceSv.aeCiCbAdviceAdviceListview.set('content',[]);
      return (this._arrangedObjects) ? this._arrangedObjects: []; 
    }
    // let's do some strange things :)
    /* if(key != 'arrangedObjects'){
      debugger; 
    } */   
  }.property('arrangedObjects'),
  
  // trying to fix the stupid selection bug... 
  
  allowsEmptySelection: YES,
  allowsMultipleSelection: NO,
  
  currentSelectionObserver: function(){
    var sel = this.get('selection');
    if((sel) && (sel.length == 1)){
      var option = sel.first();
      if(option.value){
        option.set('value',false);  
      }
      else {
        option.set('value',true);  
      }
      this.set('selection', []);
    }
  }.observes('selection')
  
}) ;




  /*
    _arrangedObjects: [],
  
  arrangedObjects: function( key, value ) { 
      if ( value ) {
         adjust for incoming array, store internally, e.g. this._aryToReturn 
         var newList = [];
         value.each(function(s){ 
               newList.push(s.get('teacherId')); 
               });
         this.set('_arrangedObjects',newList);
      }
      // our model:
      //else return (this._aryToReturn) ? this._aryToReturn: []; 
      else return (this._arrangedObjects) ? this._arrangedObjects: []; 
  }.property(),
  
  

  */
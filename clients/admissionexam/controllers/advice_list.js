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
  _examIdBinding: 'AdmissionExam.currentExamController.guid',
  
  _lastExamId: -1,
 
  _currentExamObserver: function(){
 //    debugger;
     var curExamGuid = this.get('_examId');
     var lastExamId = this.get('_lastExamId');
     if((curExamGuid) && (lastExamId != curExamGuid)){
        this.set('_lastExamId',curExamGuid);
        AdmissionExam.server.listFor({recordType: AdmissionExam.AEExamAdvice});
        var examAdvice = AdmissionExam.AEExamAdvice.collection();
        examAdvice.set('conditions', { 'examId':[curExamGuid] }); 
        examAdvice.refresh();
        //this.set('content',examAdvice);  
        AdmissionExam.adviceListController.set('content',examAdvice);
     }
  }.observes('_examId'), 
   
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
      choiceModel = choiceModel[ary[i]]; 
    }
    var choices = SC.Store.findRecords(choiceModel);
    //this.set('_choices',choices);
    return choices;
  },
  

  _arrangedObjects: [],
  
  arrangedObjects: function( key, value ){
    if(value){
//       debugger;
       // first get the choices
       var choices  = this._getChoiceList();
       //var choices = this.get('_choices');
       var choiceGuidToMatch = this.get('choiceGuidToMatch');
       if((value.length > 0) && (choices.length > 0) && choiceGuidToMatch){
          var choiceGuidsToSet = value.get(choiceGuidToMatch);          
          var returnAry = [];
          choices.each(function(s){
            var curGuid = s.get('guid');
            if(choiceGuidsToSet.indexOf(curGuid) != -1){
              // set the value item 
              s.set('value',true);  
            }
            else {
               s.set('value',false);
            }
            returnAry.push(s);
          });         
          this.set('_arrangedObjects',returnAry);
          //return returnAry;
       }
       else return (this._arrangedObjects) ? this._arrangedObjects: []; 
    }
    else return (this._arrangedObjects) ? this._arrangedObjects: []; 
  }.property()
  
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
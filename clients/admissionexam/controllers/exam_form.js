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
  contentBinding: 'AdmissionExam.candidateInformationSourceListViewController.selection',
  
  viewObserver: function(){
    // update the tree of the view
    var view = this.get('editView');
/*    if(view){
       OrionFw.systemStateTimer = SC.Timer.schedule({
       target: 'AdmissionExam.examFormController',
       action: 'startRecache',
       interval: 2000,
       repeats: NO
     }); 
    } */
    this.startRecache();
  }.observes('editView'),

  startRecache: function(){
    var view = this.get('editView');
    if(view){
       this.recacheChildren(view);       
    }
  },

  recacheChildren: function(childNode){
    //debugger;
    if(childNode){
      if(childNode instanceof Array){
         childNode.each(function(s){
            AdmissionExam.examFormController.recacheChildren(s);
         });
      }
      else {
         if(childNode.childNodes){
            if(childNode.childNodes.length > 0){
               if(childNode.rebuildChildren){
                  childNode.needsFullUpdate = true;
                  childNode.recacheFrames();
                  childNode.recomputeClippingFrame();
                  childNode.rebuildChildren();
               }
               AdmissionExam.examFormController.recacheChildren(childNode.childNodes);
            }
            else {
               //childNode.recacheFrames();
               //childNode._rebuildChildNodes();
               //childNode.update();
               //childNode.updateChildren();
            }
         }
         else {
            //childNode.recacheFrames();
            //childNode.update();
            //childNode.updateChildren();
            //childNode._rebuildChildNodes();
            //childNode.resizeWithOldParentSize();
            //var tmpcontent = childNode.get('content');
            //childNode.set('content',tmpcontent);
         }
      }
    }
  }

  
}) ;

// ==========================================================================
// OrionFw.LinkingCollectionController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
OrionFw.LinkingCollectionController = SC.CollectionController.extend({
  
  /*
  A bit complicated, but this is what the LinkingCollectionController does:
  
  In a many-to-many relationship there are three tables:
  - two entity tables
  - one linking table
  
  This LinkingCollectionController houses two of these three tables:
  one entity table and the linking table. The entity table is inside the normal content property.
  
  The LinkingCollectionController provides three extra properties in addition to the
  standard CollectionController:
  - linkingCollection: The collection of the linking table data
  - linkingElement: the property in the linking model containing the id of the records inside the content
  - externalLinkingElement: the other property in the linking model used for setting conditions on the content
  
  */
  
  
  // add a collection for the linking information
  _linkingCollection: null,
   
  linkingCollection: function(key,value){
    if(value){
      this._linkingCollection = value;
      this._linkingCollection.refresh();
    }
    else {
      if(this._linkingCollection){
        this._linkingCollection.refresh(); 
      }
      return this._linkingCollection; 
    }   
  }.property(),
  
  // what element in the linkingCollection translates to the guid of the content?
  linkingElement: null,
  
  // what element in the linkingCollection is the element to compare against?
  externalLinkingElement: null,
  
  // what id to check
  linkingValue: null,
  
  _linkingObserver: function(){
    var linkIdValue = parseInt(this.get('linkingValue'));
    if(linkIdValue){
      //debugger;
      // get all valid records from the linkingCollection
      if(this._linkingCollection && this.linkingElement && this.externalLinkingElement){
        this._linkingCollection.refresh();
        
        var linkElement = this.linkingElement.toString();  
        var exLinkElement = this.externalLinkingElement.toString();
        //debugger;
        // first set the conditions on the _linkingCollection
        // and leave the original conditions intact
        var curLinkingConditions = this._linkingCollection.get('conditions');
        curLinkingConditions[exLinkElement] = linkIdValue;
        this._linkingCollection.refresh(); // just to be sure
        // next get the records
        var validRecords = this._linkingCollection.records();
        if(validRecords){
           var validRecordIds = validRecords.get(linkElement);
           // now set the correct conditions on the content
           var content = this.get('content');
           if(content){
             var curConditions = content.get('conditions');
             curConditions['guid'] = validRecordIds;
             content.set('conditions', curConditions); 
             var order = this.get('orderBy');
             if(order){
               content.set('orderBy',order);
             }
             content.refresh(); 
           }  
        }
      }
    }
  }.observes('linkingValue','_linkingCollection')
  
});
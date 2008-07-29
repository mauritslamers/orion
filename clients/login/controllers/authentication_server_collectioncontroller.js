// ==========================================================================
// Login.AuthenticationServerCollectionController
// ==========================================================================

require('core');
require('orion_fw');
/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Login.authenticationServerCollectionController = SC.CollectionController.create(
/** @scope Login.authenticationServerCollectioncontrollerController */ {

  // TODO: Add your own code here.
	orderBy: 'servername'
}) ;

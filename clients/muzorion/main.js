// ==========================================================================
// Muzorion
// ==========================================================================

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
function main() {

  // Step 1: Load Your Model Data
  // The default code here will load the fixtures you have defined.
  // Comment out the preload line and add something to refresh from the server
  // when you are ready to pull data from your server.
  //Muzorion.server.preload(Muzorion.FIXTURES) ;
  var courses=OrionFw.Course.collection();
  OrionFw.server.listFor(courses);
  Muzorion.cmCourseListController.set('content',courses);
  courses.set('orderBy','name');
  courses.refresh();

  // load subjects  
  var subjects = OrionFw.Subject.collection();
  subjects.set('conditions', {'collegeyear' : 2008});
  OrionFw.server.listFor(subjects);
  subjects.refresh();

  //load linking table courses_subjects
  var courses_subjects = OrionFw.CourseSubject.collection();
  //courses_subjects.dataSource = OrionFw.server;
  OrionFw.server.listFor(courses_subjects);
  Muzorion.cmSubjectListController.set('linkingCollection',courses_subjects);
  Muzorion.cmSubjectListController.set('content',subjects);

  // TODO: refresh() any collections you have created to get their records.
  // ex: Muzorion.contacts.refresh() ;

  // Step 2: Instantiate Your Views
  // The default code just activates all the views you have on the page. If
  // your app gets any level of complexity, you should just get the views you
  // need to show the app in the first place, to speed things up.
  SC.page.awake() ;

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!
  if(subjects.records().length > 0){
    courses_subjects.set('conditions', { 'subjectId': subjects.records().get('guid')});
  }
  courses_subjects.refresh(); 
  // TODO: Set the content property on your primary controller
  // ex: Muzorion.contactsController.set('content',Muzorion.contacts);

} ;

// ==========================================================================
// Admissionexam
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
  AdmissionExam.server.preload(AdmissionExam.FIXTURES) ;
  //OrionFw.server.preload(OrionFw.FIXTURES);
  // TODO: refresh() any collections you have created to get their records.
  // ex: Admissionexam.contacts.refresh() ;

  var tmpMenuItems = SC.Store.findRecords(AdmissionExam.AEMenuItem);
  AdmissionExam.candidateInformationSourceListViewController.set('content',tmpMenuItems);
  // TODO: Set the content property on your primary controller
  // ex: Admissionexam.contactsController.set('content',Admissionexam.contacts);
  AdmissionExam.server.listFor({recordType: AdmissionExam.AECandidate});
  var students = AdmissionExam.AECandidate.collection();
  students.set('orderBy',['lastname ASC']);
  AdmissionExam.candidateChoiceController.set('content',students);
  students.refresh();
  
  AdmissionExam.server.listFor({recordType: AdmissionExam.AETeacher});
  var teachers = AdmissionExam.AETeacher.collection();
  teachers.set('orderBy',['lastname ASC']);
  AdmissionExam.possibleCommissionMembersController.set('content',teachers);
  teachers.refresh();
  
  AdmissionExam.server.listFor({recordType: AdmissionExam.AEExamTeacher});
  var examMembers = AdmissionExam.AEExamTeacher.collection();
  examMembers.set('orderBy',['lastname ASC']);
  //examMembers.set('conditions', {'examId' : ['1']});
  AdmissionExam.currentExamCommissionController.set('content',examMembers);
  
  //var exams = AdmissionExam.AEExam.collection();
  //AdmissionExam.currentExamController.set('content',exams);
  
  var courses = OrionFw.Course.collection();
  courses.set('orderBy', ['name ASC']);
  AdmissionExam.desiredCourseListController.set('content',courses);
  courses.refresh();
  
  AdmissionExam.server.listFor({recordType: AdmissionExam.AEConclusion});
  var conclusions = AdmissionExam.AEConclusion.collection();
  AdmissionExam.conclusionListController.set('content',conclusions);
  conclusions.refresh();

  AdmissionExam.server.listFor({recordType: AdmissionExam.AEAdvice});
  //var advice = AdmissionExam.AEAdvice.collection();
  var advice = SC.Store.findRecords(Admission.AEAdvice);
  AdmissionExam.adviceListController.set('content',advice);
  advice.refresh();
  
  AdmissionExam.server.listFor({recordType: AdmissionExam.AEExam});
  var exams = AdmissionExam.AEExam.collection();
  AdmissionExam.examListOfChosenCandidateController.set('content',exams);
  
  // Step 2: Instantiate Your Views
  // The default code just activates all the views you have on the page. If
  // your app gets any level of complexity, you should just get the views you
  // need to show the app in the first place, to speed things up.
  SC.page.awake() ;

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!

} ;

// ==========================================================================
// Admissionexam.AEDisplay Fixtures
// ==========================================================================

require('core') ;

AdmissionExam.FIXTURES = AdmissionExam.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

  // { guid: 1,
  //   type: 'Contact',
  //   firstName: "Michael",
  //   lastName: "Scott"
  // },
  //
  // { guid: 2,
  //   type: 'Contact',
  //   firstName: "Dwight",
  //   lastName: "Schrute"
  // },
  //
  // { guid: 3,
  //   type: 'Contact',
  //   firstName: "Jim",
  //   lastName: "Halpert"
  // },
  //
  // { guid: 4,
  //   type: 'Contact',
  //   firstName: "Pam",
  //   lastName: "Beesly"
  // },
  //
  // { guid: 5,
  //   type: 'Contact',
  //   firstName: "Ryan",
  //   lastName: "Howard"
  // }
    {
        guid : 1,
        name : '_information_about_candidate',
        view : 'ae_candidate_information_student_information',
        type : 'AEMenuItem'
    }, 
    {
        guid : 2,
        name : '_information_about_commission',
        view : 'ae_candidate_information_commission_information',
        type : 'AEMenuItem'
    },   
    {
        guid : 3,
        name : '_candidate_background',
        view : 'ae_candidate_information_candidate_background',
        type : 'AEMenuItem'
    },     
    {
        guid : 4,
        name : '_commission_evaluation',
        view : 'ae_candidate_information_evaluation',
        type : 'AEMenuItem'
    },     
    {
        guid : 5,
        name : '_candidate_performance_information',
        view : 'ae_candidate_information_performance_information',
        type : 'AEMenuItem'
    },     
    {
        guid : 6,
        name : '_candidate_information_overview',
        view : 'ae_candidate_information_overview',
        type : 'AEMenuItem'
    },    
    {
        guid : 5,
        name : '_input_admission_test',
        view : 'ae_candidate_information_admission_test',
        type : 'AEMenuItem'
    } 
]);

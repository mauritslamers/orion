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
        name : 'Informatie over student',
        type : 'AEMenuItem'
    }, 
    {
        guid : 2,
        name : 'Informatie over commissie',
        type : 'AEMenuItem'
    },   
    {
        guid : 3,
        name : 'Bevindingen van commissie',
        type : 'AEMenuItem'
    },     
    {
        guid : 4,
        name : 'Performance-informatie',
        type : 'AEMenuItem'
    },     
    {
        guid : 6,
        name : 'Overzicht',
        type : 'AEMenuItem'
    },    
    {
        guid : 5,
        name : 'Invoer Toelatingstoets',
        type : 'AEMenuItem'
    } 
]);
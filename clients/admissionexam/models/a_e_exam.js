// ==========================================================================
// Admissionexam.AEExam
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
AdmissionExam.AEExam = SC.Record.extend(
/** @scope Admissionexam.AEExam.prototype */ {
  //dataSource: 'AdmissionExam.server',
  
  resourceURL: [OrionFw.standardResource + 'aeexam'],
  
  // TODO: Add your own code here.
  properties: [
    'id',
    'candidateId',
    'date',
    'yearsSelfStudy',
    'yearsLessons',
    'desiredCourse',
    'interestInPreparationCourse',
    'driveAmbition',
    'realisticImage',
    'credibility',
    'musicalExperience',
    'technologicalExperience',
    'productionalExperience',
    'musicality',
    'productionLevel',
    'technologyLevel',
    'conclusionId',
    'internalRemarks',
    'performanceExperience',
    'playingLevel',
    'ensembleExperience',
    'primaVistaReading',
    'improvising',
    'playingTogether',
    'qualifiedForPerformance',
    'intervalDictation',
    'rhythmDictation',
    'melodicDictation',
    'chordDictation',
    'instrumentDictation',
    'intervalNotation',
    'chordNotation',
    'musicTheory']
}) ;

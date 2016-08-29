import { expect } from 'chai';
import { NOTES } from '../constants';
import Chord from '../Chord';
import chordSpecs from '../specs/chords';


const cMajor = {
  id: 'CM',
  specId: 'M',
  notes: ['C', 'E', 'G'],
  label: 'C Major',
};
const cMinor = {
  id: 'Cm',
  specId: 'm',
  notes: ['C', 'D#', 'G'],
  label: 'C Minor',
};
const cSeventh = {
  id: 'C7',
  specId: '7',
  notes: 'C E G A#'.split(' '),
  label: 'C 7th',
};
const cMajorSeventh = {
  id: 'CM7',
  specId: 'M7',
  notes: 'C E G B'.split(' '),
  label: 'C Major 7th',
};
const cMinorSeventh = {
  id: 'Cm7',
  specId: 'm7',
  notes: 'C D# G A#'.split(' '),
  label: 'C Minor 7th',
};
const cSixth = {
  id: 'C6',
  specId: '6',
  notes: 'C E G A'.split(' '),
  label: 'C 6th',
};
const cMinorSixth = {
  id: 'Cm6',
  specId: 'm6',
  notes: 'C D# G A'.split(' '),
  label: 'C Minor 6th',
};
const cDiminished = {
  id: 'Cdim',
  specId: 'dim',
  notes: 'C D# F#'.split(' '),
  label: 'C Diminished',
};
const cDiminishedSeventh = {
  id: 'Cdim7',
  specId: 'dim7',
  notes: 'C D# F# A'.split(' '),
  label: 'C Diminished 7th',
};
const cHalfDiminishedSeventh = {
  id: 'C7b5',
  specId: '7b5',
  notes: 'C D# F# A#'.split(' '),
  label: 'C Half Diminished 7th',
};
const cAugmented = {
  id: 'Caug',
  specId: 'aug',
  notes: 'C E G#'.split(' '),
  label: 'C Augmented',
};
const cSeventhSharpFive = {
  id: 'C7#5',
  specId: '7#5',
  notes: 'C E G# A#'.split(' '),
  label: 'C 7th #5',
};
const cNinth = {
  id: 'C9',
  specId: '9',
  notes: 'C E G A# D'.split(' '),
  label: 'C 9th',
};
const cSeventhSharpNine = {
  id: 'C7#9',
  specId: '7#9',
  notes: 'C E G A# D#'.split(' '),
  label: 'C 7th #9',
};
const cMajorNinth = {
  id: 'CM9',
  specId: 'M9',
  notes: 'C E G B D'.split(' '),
  label: 'C Major 9th',
};
const cAddedNinth = {
  id: 'Cadd9',
  specId: 'add9',
  notes: 'C E G D'.split(' '),
  label: 'C Added 9th',
};
const cMinorNinth = {
  id: 'Cm9',
  specId: 'm9',
  notes: 'C D# G A# D'.split(' '),
  label: 'C Minor 9th',
};
const cMinorAddedNinth = {
  id: 'Cmadd9',
  specId: 'madd9',
  notes: 'C D# G D'.split(' '),
  label: 'C Minor Added 9th',
};
const cEleventh = {
  id: 'C11',
  specId: '11',
  notes: 'C G A# D F'.split(' '),
  label: 'C 11th',
};
const cMinorEleventh = {
  id: 'Cm11',
  specId: 'm11',
  notes: 'C D# G A# D F'.split(' '),
  label: 'C Minor 11th',
};
const cSeventhSharpEleven = {
  id: 'C7#11',
  specId: '7#11',
  notes: 'C E G A# F#'.split(' '),
  label: 'C 7th #11',
};
const cMajorSeventhSharpEleven = {
  id: 'CM7#11',
  specId: 'M7#11',
  notes: 'C E G B D F#'.split(' '),
  label: 'C Major 7th #11',
};
const cThirteenth = {
  id: 'C13',
  specId: '13',
  notes: 'C E G A# D A'.split(' '),
  label: 'C 13th',
};
const cMajorThirteenth = {
  id: 'CM13',
  specId: 'M13',
  notes: 'C E G B D A'.split(' '),
  label: 'C Major 13th',
};
const cMinorThirteenth = {
  id: 'Cm13',
  specId: 'm13',
  notes: 'C D# G A# D F A'.split(' '),
  label: 'C Minor 13th',
};
const cSus4 = {
  id: 'Csus4',
  specId: 'sus4',
  notes: 'C F G'.split(' '),
  label: 'C Suspended 4th',
};
const cSus2 = {
  id: 'Csus2',
  specId: 'sus2',
  notes: 'C D G'.split(' '),
  label: 'C Suspended 2nd',
};
const cPowerChord = {
  id: 'C5',
  specId: '5',
  notes: 'C G'.split(' '),
  label: 'C 5th',
};
const fSharpMinor = {
  id: 'F#m',
  specId: 'm',
  notes: ['F#', 'A', 'C#'],
  label: 'F# Minor',
};

describe('Chord', () => {
  describe('make', () => {
    it('should make the C Major chord properly', () => {
      expect(Chord.make('C', 'M')).to.deep.equal(cMajor);
    });
    it('should make the C Minor chord properly', () => {
      expect(Chord.make('C', 'm')).to.deep.equal(cMinor);
    });
    it('should make the C Dominant 7th chord properly', () => {
      expect(Chord.make('C', '7')).to.deep.equal(cSeventh);
    });
    it('should make the C Major 7th chord properly', () => {
      expect(Chord.make('C', 'M7')).to.deep.equal(cMajorSeventh);
    });
    it('should make the C Minor 7th chord properly', () => {
      expect(Chord.make('C', 'm7')).to.deep.equal(cMinorSeventh);
    });
    it('should make the C 6th chord properly', () => {
      expect(Chord.make('C', '6')).to.deep.equal(cSixth);
    });
    it('should make the C Minor 6th chord properly', () => {
      expect(Chord.make('C', 'm6')).to.deep.equal(cMinorSixth);
    });
    it('should make the C Diminished chord properly', () => {
      expect(Chord.make('C', 'dim')).to.deep.equal(cDiminished);
    });
    it('should make the C Diminished 7th chord properly', () => {
      expect(Chord.make('C', 'dim7')).to.deep.equal(cDiminishedSeventh);
    });
    it('should make the C Half Diminished 7th chord properly', () => {
      expect(Chord.make('C', '7b5')).to.deep.equal(cHalfDiminishedSeventh);
    });
    it('should make the C Augmented chord properly', () => {
      expect(Chord.make('C', 'aug')).to.deep.equal(cAugmented);
    });
    it('should make the C 7th #5 chord properly', () => {
      expect(Chord.make('C', '7#5')).to.deep.equal(cSeventhSharpFive);
    });
    it('should make the C 9th chord properly', () => {
      expect(Chord.make('C', '9')).to.deep.equal(cNinth);
    });
    it('should make the C 7th #9 chord properly', () => {
      expect(Chord.make('C', '7#9')).to.deep.equal(cSeventhSharpNine);
    });
    it('should make the C Major Ninth chord properly', () => {
      expect(Chord.make('C', 'M9')).to.deep.equal(cMajorNinth);
    });
    it('should make the C Added 9th chord properly', () => {
      expect(Chord.make('C', 'add9')).to.deep.equal(cAddedNinth);
    });
    it('should make the C Minor 9th chord properly', () => {
      expect(Chord.make('C', 'm9')).to.deep.equal(cMinorNinth);
    });
    it('should make the C Minor Added 9th chord properly', () => {
      expect(Chord.make('C', 'madd9')).to.deep.equal(cMinorAddedNinth);
    });
    it('should make the C 11th chord properly', () => {
      expect(Chord.make('C', '11')).to.deep.equal(cEleventh);
    });
    it('should make the C Minor 11th chord properly', () => {
      expect(Chord.make('C', 'm11')).to.deep.equal(cMinorEleventh);
    });
    it('should make the C 7th #11 chord properly', () => {
      expect(Chord.make('C', '7#11')).to.deep.equal(cSeventhSharpEleven);
    });
    it('should make the C Major 7th #11 chord properly', () => {
      expect(Chord.make('C', 'M7#11')).to.deep.equal(cMajorSeventhSharpEleven);
    });
    it('should make the C 13 chord properly', () => {
      expect(Chord.make('C', '13')).to.deep.equal(cThirteenth);
    });
    it('should make the C Major 13th chord properly', () => {
      expect(Chord.make('C', 'M13')).to.deep.equal(cMajorThirteenth);
    });
    it('should make the C Minor 13th chord properly', () => {
      expect(Chord.make('C', 'm13')).to.deep.equal(cMinorThirteenth);
    });
    it('should make the C Suspended 4th chord properly', () => {
      expect(Chord.make('C', 'sus4')).to.deep.equal(cSus4);
    });
    it('should make the C Suspended 2nd chord properly', () => {
      expect(Chord.make('C', 'sus2')).to.deep.equal(cSus2);
    });
    it('should make the C Power Chord (the only chord you need) properly', () => {
      expect(Chord.make('C', '5')).to.deep.equal(cPowerChord);
    });
  });
  describe('makeForAllRoots', () => {
    it('should generate one chord for each possible root', () => {
      const allScales = Chord.makeForAllRoots('M');
      expect(allScales.length).to.equal(12);
      expect(allScales[0]).to.deep.equal(cMajor);
    });
  });
  describe('makeAll', () => {
    const chords = Chord.makeAll();
    it('should return the appropriate amount of chords', () => {
      expect(chords.length).to.equal(chordSpecs.length * NOTES.length);
    });
    it('should contain the F#m chord', () => {
      expect(chords).to.contain(fSharpMinor);
    });
  });
  describe('filterScalesByNotes', () => {
    expect(Chord.filterByNotes([cMajor, fSharpMinor], 'C G'.split(' ')))
      .to.deep.equal([cMajor]);
  });
});

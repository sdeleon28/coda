import { expect } from 'chai';
import { NOTES } from '../constants';
import Scale from '../Scale';
import scaleSpecs from '../specs/scales';
import {
  cMajorScalePattern,
  cMajorScale,
  fSharpWholeToneScale,
} from './testUtils';


describe('Scale', () => {
  describe('getModes', () => {
    it('should return all the modes for the C Major scale', () => {
      const cMajModes = [
        'C D E F G A B'.split(' '),
        'D E F G A B C'.split(' '),
        'E F G A B C D'.split(' '),
        'F G A B C D E'.split(' '),
        'G A B C D E F'.split(' '),
        'A B C D E F G'.split(' '),
        'B C D E F G A'.split(' '),
      ];
      expect(Scale.getModes(cMajorScalePattern)).to.deep.equal(cMajModes);
    });
  });
  describe('make', () => {
    it('should make the C Major scale properly', () => {
      expect(Scale.make('C', 'M')).to.deep.equal(cMajorScale);
    });
  });
  describe('makeForAllRoots', () => {
    it('should generate one scale for each possible root', () => {
      const allScales = Scale.makeForAllRoots('M');
      expect(allScales.length).to.equal(12);
      expect(allScales[0]).to.deep.equal(cMajorScale);
    });
  });
  describe('makeAll', () => {
    const scales = Scale.makeAll();
    it('should return the appropriate amount of scales', () => {
      expect(scales.length).to.equal(scaleSpecs.length * NOTES.length);
    });
    it('should contain the F# whole tone scale', () => {
      expect(scales).to.contain(fSharpWholeToneScale);
    });
  });
  describe('filterScalesByNotes', () => {
    expect(Scale.filterByNotes([cMajorScale, fSharpWholeToneScale], 'G A B'.split(' ')))
      .to.deep.equal([cMajorScale]);
  });
});

import { expect } from 'chai';
import Key from '../Key';


describe('Key', () => {
  describe('make', () => {
  });
  describe('getRelativeMinor', () => {
    it('should return A as the relative minor of C', () => {
      expect(Key.getRelativeMinor('C')).to.equal('A');
    });
    it('should return F# as the relative minor of A', () => {
      expect(Key.getRelativeMinor('A')).to.equal('F#');
    });
    it('should return C as the relative minor of Ab', () => {
      expect(Key.getRelativeMinor('Ab')).to.equal('C');
    });
    it('should error out if provided a non-standard major key', () => {
      expect(() => Key.getRelativeMinor('A#')).to.throw(TypeError);
    });
  });
  describe('getRelativeMajor', () => {
    it('should return C as the relative major of A', () => {
      expect(Key.getRelativeMajor('A')).to.equal('C');
    });
    it('should return A as the relative major of F#', () => {
      expect(Key.getRelativeMajor('F#')).to.equal('A');
    });
    it('should return Ab as the relative major of C', () => {
      expect(Key.getRelativeMajor('C')).to.equal('Ab');
    });
    it('should error out if provided a non-standard minor key', () => {
      expect(() => Key.getRelativeMajor('Db')).to.throw(TypeError);
    });
  });
});
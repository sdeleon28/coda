import { expect } from 'chai';
import Key from '../Key';


describe('Key', () => {
  describe('make', () => {
    it('should create the C major key properly', () => {
      const { root, quality, chords } = Key.make('C', Key.MAJOR);
      const chordIds = chords.map(x => x.id);
      expect(root).to.equal('C');
      expect(quality).to.equal(Key.MAJOR);
      expect(chordIds).to.deep.equal('CM Dm Em FM GM Am Bdim'.split(' '));
    });
    it('should create the A minor key properly', () => {
      const { root, quality, chords } = Key.make('A', Key.MINOR);
      const chordIds = chords.map(x => x.id);
      expect(root).to.equal('A');
      expect(quality).to.equal(Key.MINOR);
      expect(chordIds).to.deep.equal('Am Bdim CM Dm Em FM GM'.split(' '));
    });
    it('should error out when provided a non-standard major key root', () => {
      expect(() => Key.make('D#', Key.MAJOR)).to.throw(TypeError);
    });
    it('should error out when provided a non-standard minor key root', () => {
      expect(() => Key.make('Db', Key.MINOR)).to.throw(TypeError);
    });
    it('should error out when provided a bogus quality', () => {
      expect(() => Key.make('C', 'bogus')).to.throw(TypeError);
    });
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
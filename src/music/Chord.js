import _ from 'lodash';
import Interval from './Interval';
import chordSpecs from './specs/chords.json';

export const NOTES = 'C C# D D# E F F# G G# A A# B'.split(' ');
const NOTES_TWICE = [...NOTES, ...NOTES];

const getNoteForInterval = (root, intervalCode) =>
  NOTES_TWICE.slice(NOTES_TWICE.indexOf(root))[Interval.getHalfsteps(intervalCode)];

const getNotesForIntervals = (root, formula) =>
  formula
    .filter(x => x[0] !== '(')
    .map(
      intervalCode => getNoteForInterval(root, intervalCode)
    );

const getSpec = id => chordSpecs.find((spec => id === spec.id));

const makeChordWithSpec = (root, { id: specId, chordType, formula }) => ({
  id: `${root}${specId}`,
  specId,
  label: `${root} ${chordType}`,
  notes: getNotesForIntervals(root, formula),
});

const makeChord = (root, specId) => makeChordWithSpec(root, getSpec(specId));

const makeChordForAllRoots = specId => NOTES.map(note => makeChord(note, specId));
const makeAllChords = () => _.flatten(chordSpecs.map(({ id }) => makeChordForAllRoots(id)));
const filterChordsByNotes = (chords, notes) => chords
  .filter(chord => _.difference(notes, chord.notes).length === 0);


const Scale = {
  make: makeChord,
  makeForAllRoots: makeChordForAllRoots,
  makeAll: makeAllChords,
  filterByNotes: filterChordsByNotes,
};

export default Scale;

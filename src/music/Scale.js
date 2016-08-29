import _ from 'lodash';
import scaleSpecs from './specs/scales';
import { NOTES } from './constants';

const MODE_NAMES = [
  'Ionian',
  'Dorian',
  'Phrygian',
  'Lydian',
  'Mixolydian',
  'Aeolian',
  'Locrian',
];

const NOTES_TWICE = [...NOTES, ...NOTES];

const shift = (array, positions) => ([...array.slice(positions), ...array.slice(0, positions)]);

const getNotesFromRoot = (root) => NOTES_TWICE.slice(NOTES_TWICE.indexOf(root));

const getScaleSpec = id => scaleSpecs.find(spec => spec.id === id);

export const getModes = (ascendingPattern) =>
  MODE_NAMES.map((name, index) => shift(ascendingPattern, index));

const makeScalePattern = (root, formula) => formula
  .reduce((acc, halfSteps) => ([
    ...acc,
    acc.length > 0 ? acc[acc.length - 1] + halfSteps : halfSteps,
  ]), [])
  .map(absoluteHalfSteps => getNotesFromRoot(root)[absoluteHalfSteps]);

const makeScale = (root, specId) => {
  const { id, label, ascending } = getScaleSpec(specId);
  return {
    id: `${root}${id}`,
    specId: id,
    label: `${root} ${label} Scale`,
    ascending: makeScalePattern(root, ascending),
    descending: makeScalePattern(root, ascending).reverse(),
  };
};

const makeScaleForAllRoots = specId => NOTES.map(root => makeScale(root, specId));

const makeAllScales = () => _.flatten(scaleSpecs.map(({ id }) => makeScaleForAllRoots(id)));

const filterScalesByNotes = (scales, notes) => scales
  .filter(scale => _.difference(notes, [...scale.ascending, ...scale.descending]).length === 0);

const Scale = {
  getModes,
  make: makeScale,
  makeForAllRoots: makeScaleForAllRoots,
  makeAll: makeAllScales,
  filterByNotes: filterScalesByNotes,
};

export default Scale;

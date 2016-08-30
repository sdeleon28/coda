import _ from 'lodash';

const MAJOR_KEYS_WITH_SHARPS = 'C G D A E B F# C#'.split(' ');
const MINOR_KEYS_WITH_SHARPS = 'A E B F# C# G# D# A#'.split(' ');
const MAJOR_KEYS_WITH_FLATS = 'F Bb Eb Ab Db Gb Cb'.split(' ');
const MINOR_KEYS_WITH_FLATS = 'A D G C F Bb Eb Ab'.split(' ');
const MAJOR_KEYS = [...MAJOR_KEYS_WITH_SHARPS, ...MAJOR_KEYS_WITH_FLATS];
const MINOR_KEYS = [...MINOR_KEYS_WITH_SHARPS, ...MINOR_KEYS_WITH_FLATS];

const getRelativeMinor = note => {
  if (!_.includes(MAJOR_KEYS, note)) {
    throw new TypeError(
      `getRelativeMinor(): First argument must be a major key: ${MAJOR_KEYS.join(' ')}`);
  }
  if (_.includes(MAJOR_KEYS_WITH_SHARPS, note)) {
    return MINOR_KEYS_WITH_SHARPS[MAJOR_KEYS_WITH_SHARPS.indexOf(note)];
  }
  if (_.includes(MAJOR_KEYS_WITH_FLATS, note)) {
    return MINOR_KEYS_WITH_FLATS[MAJOR_KEYS_WITH_FLATS.indexOf(note)];
  }
};

const getRelativeMajor = note => {
  if (!_.includes(MINOR_KEYS, note)) {
    throw new TypeError(
      `getRelativeMajor(): First argument must be a minor key: ${MINOR_KEYS.join(' ')}`);
  }
  if (_.includes(MINOR_KEYS_WITH_SHARPS, note)) {
    return MAJOR_KEYS_WITH_SHARPS[MINOR_KEYS_WITH_SHARPS.indexOf(note)];
  }
  if (_.includes(MINOR_KEYS_WITH_FLATS, note)) {
    return MAJOR_KEYS_WITH_FLATS[MINOR_KEYS_WITH_FLATS.indexOf(note)];
  }
};

const make = (root, quality) => ({
  root,
});


const Key = {
  make,
  getRelativeMinor,
  getRelativeMajor,
};

export default Key;

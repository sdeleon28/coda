export const PERFECT_UNISON = '1';
export const MINOR_SECOND = 'b2';
export const MAJOR_SECOND = '2';
export const MINOR_THIRD = 'b3';
export const MAJOR_THIRD = '3';
export const PERFECT_FOURTH = '4';
export const AUGMENTED_FOURTH = '#4';
export const DIMINISHED_FIFTH = 'b5';
export const PERFECT_FIFTH = '5';
export const AUGMENTED_FIFTH = '#5';
export const MINOR_SIXTH = 'b6';
export const MAJOR_SIXTH = '6';
export const DIMINISHED_SEVENTH = 'bb7';
export const MINOR_SEVENTH = 'b7';
export const MAJOR_SEVENTH = '7';
export const PERFECT_OCTAVE = '8';
export const MINOR_NINTH = 'b9';
export const MAJOR_NINTH = '9';
export const AUGMENTED_NINTH = '#9';
export const PERFECT_ELEVENTH = '11';
export const AUGMENTED_ELEVENTH = '#11';
export const MAJOR_THIRTEENTH = '13';

const INTERVALS_TO_HALFSTEPS = {
  [PERFECT_UNISON]: 0,
  [MINOR_SECOND]: 1,
  [MAJOR_SECOND]: 2,
  [MINOR_THIRD]: 3,
  [MAJOR_THIRD]: 4,
  [PERFECT_FOURTH]: 5,
  [AUGMENTED_FOURTH]: 6,
  [DIMINISHED_FIFTH]: 6,
  [PERFECT_FIFTH]: 7,
  [AUGMENTED_FIFTH]: 8,
  [MINOR_SIXTH]: 8,
  [MAJOR_SIXTH]: 9,
  [DIMINISHED_SEVENTH]: 9,
  [MINOR_SEVENTH]: 10,
  [MAJOR_SEVENTH]: 11,
  [PERFECT_OCTAVE]: 12,
  [MINOR_NINTH]: 13,
  [MAJOR_NINTH]: 14,
  [AUGMENTED_NINTH]: 15,
  [PERFECT_ELEVENTH]: 17,
  [AUGMENTED_ELEVENTH]: 18,
  [MAJOR_THIRTEENTH]: 21,
};

const getHalfsteps = interval => INTERVALS_TO_HALFSTEPS[interval];

const Interval = {
  getHalfsteps,
};

export default Interval;

const INTERVALS = {
  PERFECT_UNISON: '1',
  MINOR_SECOND: 'b2',
  MAJOR_SECOND: '2',
  MINOR_THIRD: 'b3',
  MAJOR_THIRD: '3',
  PERFECT_FOURTH: '4',
  AUGMENTED_FOURTH: '#4',
  DIMINISHED_FIFTH: 'b5',
  PERFECT_FIFTH: '5',
  AUGMENTED_FIFTH: '#5',
  MINOR_SIXTH: 'b6',
  MAJOR_SIXTH: '6',
  DIMINISHED_SEVENTH: 'bb7',
  MINOR_SEVENTH: 'b7',
  MAJOR_SEVENTH: '7',
  PERFECT_OCTAVE: '8',
  MINOR_NINTH: 'b9',
  MAJOR_NINTH: '9',
  AUGMENTED_NINTH: '#9',
  PERFECT_ELEVENTH: '11',
  AUGMENTED_ELEVENTH: '#11',
  MAJOR_THIRTEENTH: '13',
};

const getIntervalsToHalfsteps = () => ({
  [INTERVALS.PERFECT_UNISON]: 0,
  [INTERVALS.MINOR_SECOND]: 1,
  [INTERVALS.MAJOR_SECOND]: 2,
  [INTERVALS.MINOR_THIRD]: 3,
  [INTERVALS.MAJOR_THIRD]: 4,
  [INTERVALS.PERFECT_FOURTH]: 5,
  [INTERVALS.AUGMENTED_FOURTH]: 6,
  [INTERVALS.DIMINISHED_FIFTH]: 6,
  [INTERVALS.PERFECT_FIFTH]: 7,
  [INTERVALS.AUGMENTED_FIFTH]: 8,
  [INTERVALS.MINOR_SIXTH]: 8,
  [INTERVALS.MAJOR_SIXTH]: 9,
  [INTERVALS.DIMINISHED_SEVENTH]: 9,
  [INTERVALS.MINOR_SEVENTH]: 10,
  [INTERVALS.MAJOR_SEVENTH]: 11,
  [INTERVALS.PERFECT_OCTAVE]: 12,
  [INTERVALS.MINOR_NINTH]: 13,
  [INTERVALS.MAJOR_NINTH]: 14,
  [INTERVALS.AUGMENTED_NINTH]: 15,
  [INTERVALS.PERFECT_ELEVENTH]: 17,
  [INTERVALS.AUGMENTED_ELEVENTH]: 18,
  [INTERVALS.MAJOR_THIRTEENTH]: 21,
});

const Interval = Object.assign({},
  INTERVALS,
  {
    getHalfsteps: interval => getIntervalsToHalfsteps()[interval],
  }
);

export default Interval;

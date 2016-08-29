export const cMajorScalePattern = 'C D E F G A B'.split(' ');
export const cMajorScale = {
  id: 'CM',
  specId: 'M',
  label: 'C Major Scale',
  ascending: cMajorScalePattern,
  descending: [...cMajorScalePattern].reverse(),
};
export const fSharpWholeTonePattern = 'F# G# A# C D E'.split(' ');
export const fSharpWholeToneScale = {
  id: 'F#wt',
  specId: 'wt',
  label: 'F# Whole Tone Scale',
  ascending: fSharpWholeTonePattern,
  descending: [...fSharpWholeTonePattern].reverse(),
};
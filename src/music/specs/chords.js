const chords = [
  {
    "id": "M",
    "formula": [
      "1",
      "3",
      "5"
    ],
    "description": "Named after the major 3rd interval between root and 3",
    "chordType": "Major"
  },
  {
    "id": "m",
    "formula": [
      "1",
      "b3",
      "5"
    ],
    "description": "Named after the minor 3rd interval between root and b3",
    "chordType": "Minor"
  },
  {
    "id": "7",
    "formula": [
      "1",
      "3",
      "5",
      "b7"
    ],
    "description": "Also called DOMINANT 7th",
    "chordType": "7th"
  },
  {
    "id": "M7",
    "formula": [
      "1",
      "3",
      "5",
      "7"
    ],
    "description": "Named after the major 7th interval between root and 7th major scale note",
    "chordType": "Major 7th"
  },
  {
    "id": "m7",
    "formula": [
      "1",
      "b3",
      "5",
      "b7"
    ],
    "description": "",
    "chordType": "Minor 7th"
  },
  {
    "id": "6",
    "formula": [
      "1",
      "3",
      "5",
      "6"
    ],
    "description": "Major chord with 6th major scale note added",
    "chordType": "6th"
  },
  {
    "id": "m6",
    "formula": [
      "1",
      "b3",
      "5",
      "6"
    ],
    "description": "Minor chord with 6th major scale note added",
    "chordType": "Minor 6th"
  },
  {
    "id": "dim",
    "formula": [
      "1",
      "b3",
      "b5"
    ],
    "description": "",
    "chordType": "Diminished"
  },
  {
    "id": "dim7",
    "formula": [
      "1",
      "b3",
      "b5",
      "bb7"
    ],
    "description": "",
    "chordType": "Diminished 7th"
  },
  {
    "id": "7b5",
    "formula": [
      "1",
      "b3",
      "b5",
      "b7"
    ],
    "description": "Also called minor 7th-b5",
    "chordType": "Half Diminished 7th"
  },
  {
    "id": "aug",
    "formula": [
      "1",
      "3",
      "#5"
    ],
    "description": "",
    "chordType": "Augmented"
  },
  {
    "id": "7#5",
    "formula": [
      "1",
      "3",
      "#5",
      "b7"
    ],
    "description": "",
    "chordType": "7th #5"
  },
  {
    "id": "9",
    "formula": [
      "1",
      "3",
      "5",
      "b7",
      "9"
    ],
    "description": "",
    "chordType": "9th"
  },
  {
    "id": "7#9",
    "formula": [
      "1",
      "3",
      "5",
      "b7",
      "#9"
    ],
    "description": "The 'Hendrix' chord",
    "chordType": "7th #9"
  },
  {
    "id": "M9",
    "formula": [
      "1",
      "3",
      "5",
      "7",
      "9"
    ],
    "description": "",
    "chordType": "Major 9th"
  },
  {
    "id": "add9",
    "formula": [
      "1",
      "3",
      "5",
      "9"
    ],
    "description": "Chords extended beyond the octave are called 'added' when the 7th is not present.",
    "chordType": "Added 9th"
  },
  {
    "id": "m9",
    "formula": [
      "1",
      "b3",
      "5",
      "b7",
      "9"
    ],
    "description": "",
    "chordType": "Minor 9th"
  },
  {
    "id": "madd9",
    "formula": [
      "1",
      "b3",
      "5",
      "9"
    ],
    "description": "",
    "chordType": "Minor Added 9th"
  },
  {
    "id": "11",
    "formula": [
      "1",
      "(3)",
      "5",
      "b7",
      "9",
      "11"
    ],
    "description": "The 3rd is often omitted to avoid a clash with the 11th",
    "chordType": "11th"
  },
  {
    "id": "m11",
    "formula": [
      "1",
      "b3",
      "5",
      "b7",
      "9",
      "11"
    ],
    "description": "",
    "chordType": "Minor 11th"
  },
  {
    "id": "7#11",
    "formula": [
      "1",
      "3",
      "5",
      "b7",
      "#11"
    ],
    "description": "often used in preference to 11th chords to avoid the dissonant clash between 11 and 3",
    "chordType": "7th #11"
  },
  {
    "id": "M7#11",
    "formula": [
      "1",
      "3",
      "5",
      "7",
      "9",
      "#11"
    ],
    "description": "",
    "chordType": "Major 7th #11"
  },
  {
    "id": "13",
    "formula": [
      "1",
      "3",
      "5",
      "b7",
      "9",
      "(11)",
      "13"
    ],
    "description": "The 11th is often omitted to avoid a clash with the 3rd.",
    "chordType": "13th"
  },
  {
    "id": "M13",
    "formula": [
      "1",
      "3",
      "5",
      "7",
      "9",
      "(11)",
      "13"
    ],
    "description": "The 11th is often omitted to avoid a clash with the 3rd.",
    "chordType": "Major 13th"
  },
  {
    "id": "m13",
    "formula": [
      "1",
      "b3",
      "5",
      "b7",
      "9",
      "11",
      "13"
    ],
    "description": "",
    "chordType": "Minor 13th"
  },
  {
    "id": "sus4",
    "formula": [
      "1",
      "4",
      "5"
    ],
    "description": "",
    "chordType": "Suspended 4th"
  },
  {
    "id": "sus2",
    "formula": [
      "1",
      "2",
      "5"
    ],
    "description": "Sometimes considered as an inverted sus4 (GCD)",
    "chordType": "Suspended 2nd"
  },
  {
    "id": "5",
    "formula": [
      "1",
      "5"
    ],
    "description": "",
    "chordType": "5th"
  }
];
export default chords;

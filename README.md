# coda

Tired of regexping your way through your music notes? This package provides some useful abstractions to work with music concepts.

## Quickstart

Install with:

```
npm install coda-music
```

Usage:

```javascript
> var coda = require('coda-music');
> var Scale = coda.Scale;
> var Interval = coda.Interval;
> var Chord = coda.Chord;

> Scale.make('C', 'M');
{ id: 'CM',
  specId: 'M',
  label: 'C Major Scale',
  ascending: [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
  descending: [ 'B', 'A', 'G', 'F', 'E', 'D', 'C' ] }

> Scale.makeAll().length;
84

> Chord.make('C', '7');
{ id: 'C7',
  specId: '7',
  label: 'C 7th',
  notes: [ 'C', 'E', 'G', 'A#' ] }

> Chord.makeAll().length;
336

> Interval.getHalfsteps(Interval.AUGMENTED_FIFTH);
8
```

## Roadmap

* Finish keys implementation (flats don't work yet)
* Ability to provide custom "specs" (templates to build scales/chords upon)
* Suggestions? Please, file an issue or consider submitting a PR!

[![Coverage Status](https://coveralls.io/repos/github/hseoy/braillePatternDots-js/badge.svg?branch=main)](https://coveralls.io/github/hseoy/braillePatternDots-js?branch=main)
[![Weekly Downloads](https://img.shields.io/npm/dw/braillepatterndots-js)](https://www.npmjs.com/package/braillepatterndots-js)
[![Total Downloads](https://img.shields.io/npm/dt/braillepatterndots-js)](https://www.npmjs.com/package/braillepatterndots-js)

# braillePatternDots-js

A simple library for braille pattern

## Installation

```sh
npm install braillepatterndots-js
yarn add braillepatterndots-js
```

## Functions and Usage

- [`bchar(num: number): string`](#bchar)
- [`bcode(num: number): Array<boolean>`](#bcode)
- [`bpd(num: number): Braille`](#bpd)
- [`bpds(...nums: Array<number>): Array<Braille>`](#bpds)
- [`export default {}`](#default)
- [`interface Braille`](#interface-braille)

### bchar()

`function bchar(num: number): string`

- Javascript

```js
const bchar = require("braillepatterndots-js").bchar;
console.log(bchar(123456));
```

- Typescript

```ts
import { bchar } from "braillepatterndots-js";
console.log(bchar(123456));
```

- Output

```
⠿
```

### bcode()

`function bcode(num: number): Array<boolean>`

- Javascript

```js
const bcode = require("braillepatterndots-js").bcode;
console.log(bcode(123456));
```

- Typescript

```ts
import { bcode } from "braillepatterndots-js";
console.log(bcode(123456));
```

- Output

```
[ true, true, true, true, true, true ]
```

### bpd()

`function bpd(num: number): Braille`

- Javascript

```js
const bpd = require("braillepatterndots-js").bpd;
console.log(bpd(123456));
```

- Typescript

```ts
import { bpd, Braille } from "braillepatterndots-js";
var braille: Braille = bpd(123456);
console.log(braille);
```

- Output

```
{ code: [ true, true, true, true, true, true ], char: '⠿' }
```

### bpds()

`function bpds(...nums: Array<number>): Array<Braille>`

- Javascript

```js
const bpds = require("braillepatterndots-js").bpds;
console.log(bpds(0, 123, 123456));
```

- Typescript

```ts
import { bpds, Braille } from "braillepatterndots-js";
var brailles: Array<Braille> = bpds(0, 123, 123456);
console.log(brailles);
```

- Output

```
[
  { code: [ false, false, false, false, false, false ], char: '⠀' },
  { code: [ true, true, true, false, false, false ], char: '⠇' },
  { code: [ true, true, true, true, true, true ], char: '⠿' }
]
```

### default {}

```js
export default {
  bchar: bchar,
  bcode: bcode,
  bpd: bpd,
  bpds: bpds,
};
```

- Javascript

```js
const bpdjs = require("braillepatterndots-js").default;
console.log(bpdjs.bchar(123456));
console.log(bpdjs.bcode(123456));
console.log(bpdjs.bpd(123456));
console.log(bpdjs.bpds(0, 123, 123456));
```

- Typescript

```ts
import bpdjs, { Braille } from "braillepatterndots-js";
console.log(bpdjs.bchar(123456));
console.log(bpdjs.bcode(123456));

var braille: Braille = bpdjs.bpd(123456);
var brailles: Array<Braille> = bpdjs.bpds(0, 123, 123456);
console.log(braille);
console.log(brailles);
```

- Output

```
⠿
[ true, true, true, true, true, true ]
{ code: [ true, true, true, true, true, true ], char: '⠿' }
[
  { code: [ false, false, false, false, false, false ], char: '⠀' },
  { code: [ true, true, true, false, false, false ], char: '⠇' },
  { code: [ true, true, true, true, true, true ], char: '⠿' }
]
```

### interface Braille

```ts
export interface Braille {
  readonly code: Array<boolean>;
  readonly char: string;
}
```

## Test

```sh
yarn test
```

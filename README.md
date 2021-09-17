# colgen
Generate a pair of colours from a base color, using a specified contrast ratio.

A simplified wrapper around [@adobe/leonardo-contrast-colors](https://github.com/adobe/leonardo).
## API
`colgen(requiredContrast, baseColor)`
### Arguments
1. `requiredContrast` (number): a number between 1 and 21 representing the contrast ratio required between your two generated colors e.g. `5.5`

2. `baseColor` (string): a hexadecimal colour string to base the generated colors on e.g. `'#077bbd'`
### Returns
1. (array): Returns an array containing two contrasting hexadecimal colour strings
## Example
```
  import colgen from 'colgen';

  colgen(5, '#077bbd');
  // => ['#03314b','#b4d7eb']

  colgen(21 '#077bbd');
  // => ['#000000', '#ffffff']
```

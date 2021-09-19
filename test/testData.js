import map from 'lodash/fp/map';

export default (testColors) => ([
  {
    requiredContrast: 5,
    tests: map((color) => ({ baseColor: color }), testColors),
  },
  {
    requiredContrast: 7,
    tests: map((color) => ({ baseColor: color }), testColors),
  },
  {
    requiredContrast: 21,
    tests: map((color) => ({
      baseColor: color,
      result: ['#000000', '#ffffff'],
    }), testColors),
  },
  {
    requiredContrast: 1,
    tests: map((color) => ({
      baseColor: color,
    }), testColors),
  },
]);

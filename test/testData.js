import _ from 'lodash/fp';

export default (testColors) => ([
  {
    requiredContrast: 5,
    tests: _.map((color) => ({ baseColor: color }), testColors),
  },
  {
    requiredContrast: 7,
    tests: _.map((color) => ({ baseColor: color }), testColors),
  },
  {
    requiredContrast: 21,
    tests: _.map((color) => ({
      baseColor: color,
      result: ['#000000', '#ffffff'],
    }), testColors),
  },
  {
    requiredContrast: 1,
    tests: _.map((color) => ({
      baseColor: color,
    }), testColors),
  },
]);

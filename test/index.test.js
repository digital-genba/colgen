import _ from 'lodash/fp';
import chroma from 'chroma-js';

import {
  colorPairFromBaseByContrast
} from '../src/index.js';


const testColors = [
  '#000000',
  '#ffffff',
  '#077bbd',
];

const tests = [
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
];

describe('colorPairFromBaseByContrast', () => {
  _.map((testSuite) => {
    describe(`with ${testSuite.requiredContrast}:1 contrast`, () => {
      _.map((testData) => {
        test(`with ${testData.baseColor} base color`, () => {
          const generatedColors = colorPairFromBaseByContrast(
            testSuite.requiredContrast, testData.baseColor
          );
          expect(
            chroma.contrast(generatedColors[0], generatedColors[1])
          ).toBeGreaterThanOrEqual(testSuite.requiredContrast);
          testData.result && expect(generatedColors).toEqual(testData.result);
        });
      }, testSuite.tests);
    });
  }, tests);
});

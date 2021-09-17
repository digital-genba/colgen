import _ from 'lodash/fp';
import chroma from 'chroma-js';
import { generateRandomHexColor } from './utils/utils';

import selectedSuiteColors from './selectedSuiteColors';
import testData from './testData';

import {
  colorPairFromBaseByContrast
} from '../src/index.js';

const randomSuiteToggle = process.env.RUN_RANDOM_SUITE;

const testColors = randomSuiteToggle ?
  _.map(() => (generateRandomHexColor()), _.range(0, 1000))
  : selectedSuiteColors;

const tests = testData(testColors);

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

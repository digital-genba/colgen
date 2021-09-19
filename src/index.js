import ceil from 'lodash/fp/ceil';
import {
  Theme,
  Color,
  BackgroundColor
} from '@adobe/leonardo-contrast-colors';

export const colorPairFromBaseByContrast = (
  requiredContrast,
  baseColor,
) => {
  const contrastFromCentre = ceil(Math.sqrt(
    Math.abs(requiredContrast)
  ), 2);

  const base = new Color({
    name: 'base',
    colorKeys: [baseColor],
    ratios: [contrastFromCentre, -1 * contrastFromCentre],
    colorspace: 'RGB'
  });

  const theme = new Theme({
    colors: [base],
    output: 'HEX',
    backgroundColor: new BackgroundColor({
      name: 'blank',
      colorKeys: ['#000000'],
      ratios: [],
    }),
    lightness: 50,
  });

  return theme.contrastColorValues;
};

export default colorPairFromBaseByContrast;

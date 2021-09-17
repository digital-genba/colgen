export const generateRandomHexColor = () => (
  `#${Math.round(Math.random() * 16777216).toString('16').padStart(6, '0')}`
);

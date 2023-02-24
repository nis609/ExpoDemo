import normalize from 'react-native-normalize';

export const SPACING = {
  padding: {
    md: 10,
    sm: 5,
    vsm: 4,
    min: 2,
  },
  margin: {
    md: 10,
    mid: 7,
    sm: 5,
    min: 2,
  },
};
export const FONTWEIGHT = {
  SEMIBOLD: '600',
  REGULAR: '400',
  BOLD: '700',
};
export const BorderRadius = {
  cirular: {
    xl: normalize(20),
    md: normalize(10),
    medium: normalize(8),
    sm: normalize(5),
  },
};
export const THEME = {
  primary_color: '#3E93D1',
  secondary_color: '#EE7440',
  transparent: 'transparent',
  text: {normal: '#595959'},
  defaultText: '#404040',
}
export const FONTS_SIZE = {
  sm: normalize(10),
  min: normalize(12),
  base: normalize(14),
  label: normalize(15),
  mid: normalize(16),
  large: normalize(20),
};
import { Dimensions } from 'react-native';
import color from 'color';

const dimensions = Dimensions.get('window');

const Layout = Object.freeze({
  ...dimensions,
  isSmallDevice: dimensions.width <= 360
});

const Theme = Object.freeze({
  Color: {
    Onyx: '#313638',
    EarthYellow: '#e4b363',
    PastelRed: '#ef6461',
    Platinum: '#e8e9eb',
    GainsBoro: '#e0dfd5',
    White: '#FFF'
  },
  manipulate: (colorToBeManipulated) => {
    return color(colorToBeManipulated);
  }
});

const Font = Object.freeze({
  Family: {
    Somatic: {
      regular: 'Somatic-Rounded'
    }
  },
  Size: {
    h1: 32,
    h2: 24,
    h3: 19,
    h4: 16,
    h5: 13,
    h6: 11,
  }
});

export {
  Layout,
  Theme,
  Font,
  // Icon
};

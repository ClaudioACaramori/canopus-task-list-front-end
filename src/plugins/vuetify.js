
/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// scss
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#00364D',
          secondary: '#5CBBF6',
          searchColor: '#0000',
          backgroundLight: '#EBEBEB',
          secondaryText: '#797E80',
          primaryText: '#2B2B2B',
          formBorder: '#676767',
          success: '#2EAA96'
        },
      },
    },
  },
});

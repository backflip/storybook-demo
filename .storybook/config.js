import { configure } from '@storybook/vue';
import '../src/assets/css/main.scss';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

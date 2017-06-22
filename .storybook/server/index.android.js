require('es6-symbol/implement');
global.STORYBOOK_REACT_CLASSES = {};

import {AppRegistry} from 'react-native';
import {configure} from '@storybook/react-native';
import CodeScreen from './code-screen';
import '../add-decorators';

// import stories
configure(() => {
  require('../../stories/index');
}, module);

AppRegistry.registerComponent('ReactNativeStorybookExample', () => CodeScreen);

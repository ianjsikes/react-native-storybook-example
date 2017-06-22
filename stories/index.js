import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, object } from '@storybook/addon-knobs';
import Welcome from './Welcome';
import Button from './Button';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome/>
  ));

storiesOf('Test', module)
  .add('to asdasdasd', () => (
    <Button style={object('style', {})}/>
  ));

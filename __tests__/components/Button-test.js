/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../../components/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Text, TouchableOpacity} from 'react-native';

it('renders correctly', () => {
  renderer.create(<Button />);
});

it('renders correctly with props', () => {
  renderer.create(<Button> test </Button>);
});

it('renders correctly with children', () => {
  renderer.create(
    <Button>
      <Text>Test</Text>
    </Button>,
  );
});

it('renders correctly with custom styles', () => {
  renderer.create(<Button style={{backgroundColor: 'red'}} />);
});

it('shows the right custom text when passed as a prop', () => {
  const component = renderer.create(<Button>test</Button>);
  const text = component.root.findByType(Text);
  expect(text.props.children).toBe('test');
});

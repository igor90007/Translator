import React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import { MiddleText } from '../src/components/Text'

test('renders correctly MiddleText component', () => {
  const tree = renderer.create(<MiddleText additionalStyles={{ color: 'red' }}>test</MiddleText>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('MiddleText component with null properties', () => {
  const tree = renderer.create(<MiddleText />).toJSON()
  expect(tree).toMatchSnapshot()
})

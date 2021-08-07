import React from 'react'
import renderer from 'react-test-renderer'

const makeSnapshot = (node: React.ReactElement) => {
  const tree = renderer.create(node).toJSON()
  expect(tree).toMatchSnapshot()
}

export default makeSnapshot

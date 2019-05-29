import * as React from "react"
import * as renderer from "react-test-renderer"

import MainTitle from "./index"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MainTitle title="Multi Title" category="BLOG" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
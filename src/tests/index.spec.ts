import { fileExists } from "../utils/path.util"

describe("Test if Image Exists", () => {
  it("expect fileExists function to be defined ", () => {
    expect(fileExists).toBeDefined()
  })

  it("expect fileExists function to return false with", () => {
    expect(
      fileExists("../../static/images/wrongImage.jpg") instanceof Promise
    ).toBe(true)
  })
})

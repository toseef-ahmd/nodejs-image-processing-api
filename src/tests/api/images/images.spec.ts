import supertest from "supertest"

import { app } from "../../.."
import { fileDirs } from "../../../utils/path.util"
import { ResizeImage } from "../../../middlewares/resize.middleware"

// create a req object
const req = supertest(app)

describe("Test images related response", () => {
  const { images, thumbnails } = fileDirs()

  it("Checks the api/images/search endpoint", async () => {
    const response = await req.get(
      "/api/images/search?filename=fjord.jpg"
    )
    expect(response.status).toBe(200)
  })

  it("Checks the api/images/resize endpoint", async () => {
    const response = await req.get(
      "/api/images/resize?filename=fjord.jpg&width=300&height=300"
    )
    expect(response.status).toBe(302)
  })

  it("Checks if Resize method works fine.", () => {
    expect(async () => {
      await ResizeImage(images+'/fjord.jpg', 100, 100, thumbnails+'/fjord_100_100.jpg');
  }).not.toThrow();
  })

  
})

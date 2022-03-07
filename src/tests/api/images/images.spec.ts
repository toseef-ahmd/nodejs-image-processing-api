import supertest from 'supertest'
import fs from 'fs'

import { app } from '../../..'
import { fileDirs } from '../../../utils/path.util'

// create a req object
const req = supertest(app)



describe('Test images related response', () => {
  const {images } = fileDirs();
 
  it('Checks the api/images/search endpoint', async () => {
    const response = await req.get(
      '/api/images/search?filename=fjord.jpg'
      )
      expect(response.status).toBe(200)
  })

  it('Checks the api/images/resize endpoint', async () => {
    const response = await req.get(
      '/api/images/resize?filename=fjord.jpg&width=300&height=300'
    )
    expect(response.status).toBe(200)
  })

  it('Checks the existance of image that is not available in the images directory.', () => {
    expect(fs.existsSync(`${images}\demo.jpg`)).toBeFalsy()
  })

})
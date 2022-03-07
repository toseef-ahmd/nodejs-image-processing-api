import supertest from 'supertest'
import fs from 'fs'

import { app } from '../../..'
import { fileDirs } from '../../../utils/path.util'


// create a req object
const req = supertest(app)


describe('Test Thumbnails related responses', () => {
  const {thumbnails } = fileDirs();
  it('Checks the api/thumbnails/search endpoint', async () => {
    const response = await req.get(
      '/api/thumbnails/search?filename=fjord_100_100.jpg'
      )
      expect(response.status).toBe(200)
  })

  it('Checks the existance of thumbnail with the size that was created before', () => {
    expect(fs.existsSync(`${thumbnails}/fjord_100_100.jpg`)).toBeTruthy()
  })


  it('Checks the existance of thumbnail with the size that is never been created', () => {
    expect(fs.existsSync(`${thumbnails}\fjord_500_210.jpg`)).toBeFalsy()
  })
})
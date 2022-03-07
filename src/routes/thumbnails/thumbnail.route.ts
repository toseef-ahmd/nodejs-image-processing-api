import express from 'express'
import { updateFiles } from '../../utils/path.util'
import { remove, search } from '../../controllers/thumbnails/thumbnail.controller'
import { urlValidator } from '../../middlewares/url.middleware'
import { searchFilesMiddleware } from '../../middlewares/images.middleware'

const thumbnails = express.Router()

thumbnails.route('/search').get(searchFilesMiddleware(updateFiles('thumbnails')), urlValidator, search)
thumbnails.route('/remove').get(searchFilesMiddleware(updateFiles('thumbnails')), urlValidator, remove)

export default thumbnails
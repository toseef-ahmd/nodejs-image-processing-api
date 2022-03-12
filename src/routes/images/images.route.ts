import express from "express"
import { updateFiles } from "../../utils/path.util"
import { resize, search } from "../../controllers/images/images.controller"
import { urlValidator } from "../../middlewares/url.middleware"
import {
  searchFilesMiddleware,
  imageResizeMiddleware,
} from "../../middlewares/images.middleware"

const images = express.Router()

images
  .route("/search")
  .get(searchFilesMiddleware(updateFiles("images")), urlValidator, search)
images
  .route("/resize")
  .get(imageResizeMiddleware(updateFiles("images")), urlValidator, resize)

export { images }

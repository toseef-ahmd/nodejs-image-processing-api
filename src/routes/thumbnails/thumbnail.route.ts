import express from "express"
import {
  remove,
  search,
} from "../../controllers/thumbnails/thumbnail.controller"
import { urlValidator } from "../../middlewares/url.middleware"
import { searchFilesMiddleware } from "../../middlewares/images.middleware"

const thumbnails = express.Router()

thumbnails
  .route("/search")
  .get(searchFilesMiddleware(), urlValidator, search)
thumbnails
  .route("/remove")
  .get(searchFilesMiddleware(), urlValidator, remove)

export default thumbnails

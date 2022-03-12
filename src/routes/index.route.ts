import express from "express"
import { images } from "./images/images.route"
import thumbnails from "./thumbnails/thumbnail.route"

const routes = express.Router()

routes.use("/images", images)
routes.use("/thumbnails", thumbnails)

export default routes

import { Request, Response } from "express"
import path from "path"
import { createThumbnail } from "../../utils/path.util"

import { fileExists, fileDirs, Files } from "../../utils/path.util"
import { ResizeImage } from "../../middlewares/resize.middleware"

const search = async (req: Request, res: Response): Promise<void> => {
  const filename: string = req.query.filename as string
  const { images }: Files = fileDirs() //Gets images directory path
  const imageFromPath: string = path.resolve(images, filename) //Reads image file name from directory based on file type (image)
  const imageExists: boolean = await fileExists(imageFromPath)

  imageExists && res.sendFile(imageFromPath)
}

const resize = async (req: Request, res: Response): Promise<void> => {
  const width: number = req.query.width as unknown as number
  const height: number = req.query.height as unknown as number
  const filename: string = req.query.filename as unknown as string

  const { images, thumbnails }: Files = fileDirs() //Gets images directory path
  const imageFromPath: string = path.resolve(images, filename) //Reads image file name from directory based on file type (image)

  const thumbnail: string = createThumbnail(filename, width, height) //Creates thumbnail name from image
  const thumbnailToPath: string = path.resolve(thumbnails, thumbnail) //Reads image file name from directory based on file type (Thumbnail)

  const ThumbnailExists: boolean = await fileExists(thumbnailToPath)

  if (ThumbnailExists) {
    res.setHeader("Content-Type", "text/html")
    res.redirect(`/api/thumbnails/search?filename=${thumbnail}`)
  } else {
    await ResizeImage(imageFromPath, width, height, thumbnailToPath)
    res.status(200)
    res.sendFile(thumbnailToPath)
  }
}

export { search, resize }

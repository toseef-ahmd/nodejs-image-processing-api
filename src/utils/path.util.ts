import path from "path"
import fs from "fs"

export interface Files {
  images: string
  thumbnails: string
}

export const updateFiles = (fileType: string): string[] => {
  const { images, thumbnails }: Files = fileDirs()
  const fileArr: string[] = fs.readdirSync(
    fileType === "images" ? images : fileType === "thumbnails" ? thumbnails : ""
  )
  return fileArr
}

export const fileDirs = (): Files => {
  return {
    images: path.resolve(__dirname, "../static/images"),
    thumbnails: path.resolve(__dirname, "../static/thumbnails"),
  }
}

export const createThumbnail = (
  filename: string,
  width: number,
  height: number
): string => {
  const [file, ext] = filename.split(".")
  const thumnailPath: string = `${file}_${width}_${height}.${ext}` as string
  return thumnailPath
}

export const allFiles = (imgFiles: string[]): string[] => {
  const newFiles: string[] = []
  imgFiles.forEach((file) => {
    if (!file.startsWith(".")) {
      newFiles.push(file)
    }
  })
  return newFiles
}

export const fileExists = async (filePath: string): Promise<boolean> => {
  const res = await fs.existsSync(filePath)

  return res
}

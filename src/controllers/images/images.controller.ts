import sharp from 'sharp'
import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { createThumbnail, updateFiles } from '../../utils/path.util'
//import {getThumbnail} from '../thumbnails/thumbnail.controller'

import {fileExists, fileDirs, Files}  from '../../utils/path.util'

const search = async (req : Request, res : Response, next : NextFunction) : Promise<void> =>  {
    const filename : string = req.query.filename as string;
    const {images} : Files = fileDirs(); //Gets images directory path
    const imageFromPath : string = path.resolve(images, filename); //Reads image file name from directory based on file type (image)
    const imageExists = await fileExists(imageFromPath)

    imageExists && res.sendFile(imageFromPath);

}

const resize = async (req: Request, res : Response, next : NextFunction) : Promise<void> => {
    const width: number = (req.query.width as unknown) as number;
    const height: number = (req.query.height as unknown) as number; 
    const filename: string = (req.query.filename as unknown) as string;

    const {images, thumbnails} : Files = fileDirs(); //Gets images directory path
    const imageFromPath : string = path.resolve(images, filename); //Reads image file name from directory based on file type (image)
    
    const thumbnail : string = createThumbnail(filename, width, height); //Creates thumbnail name from image
    const thumbnailToPath : string = path.resolve(thumbnails, thumbnail); //Reads image file name from directory based on file type (Thumbnail)
    
    const ThumbnailExists = await fileExists(thumbnailToPath)

    if(ThumbnailExists) {
        res.setHeader("Content-Type", "text/html")
        res.redirect(`/api/thumbnails/search?filename=${thumbnail}`)
    }
    else {
        try {
            await sharp(imageFromPath).resize(Number(width), Number(height)).toFile(thumbnailToPath)
            res.sendFile(thumbnailToPath)
        } catch (error) {
            throw new Error("Failed to process Image")
        }
    }
}



export {search, resize}
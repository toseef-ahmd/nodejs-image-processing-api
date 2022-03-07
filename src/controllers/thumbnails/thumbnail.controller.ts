import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { fileDirs, fileExists, Files } from '../../utils/path.util';

const search = async(req : Request, res : Response , next : NextFunction) : Promise<void> => {
    const {thumbnails} : Files = fileDirs();
    const filename = req.query.filename as string;
    const thumnailPath : string = path.resolve(thumbnails, filename);
    
    const isAvailable : boolean = await fileExists(thumnailPath);

    isAvailable ?  res.sendFile(thumnailPath) : res.send("The file you searched for doesn't exist");
    
}

const remove = async(req : Request, res : Response , next : NextFunction) : Promise<void> => {
    const {thumbnails} : Files = fileDirs();
    const filename = req.query.filename as string;
    const thumnailPath : string = path.resolve(thumbnails, filename);
    await fs.unlinkSync(thumnailPath);
    res.send('Thumbnail has been deleted....');

    //res.render('index');
}

export {search, remove}
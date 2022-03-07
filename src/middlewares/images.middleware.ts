import fs from 'fs'
import { Response, Request, NextFunction } from 'express'
import { query, validationResult, ValidationError, check } from 'express-validator'
import { fileDirs, Files } from '../utils/path.util'



const imageResizeMiddleware = (fileArr : string[]) => [
  query('width').exists().withMessage('Image width cannot be empty').isInt().withMessage('Width should be an integer'),
  query('height').exists().withMessage('Image height cannot be empty').isInt().withMessage('Height should be integer'),
  query('filename').exists().withMessage('Image name cannot be empty').isIn(fileArr).withMessage('File not found')
]

const searchFilesMiddleware = (fileArr: string[]) => [
  query('filename').exists().withMessage('Image name cannot be empty').isIn(fileArr).withMessage('File not found')
]


export { imageResizeMiddleware, searchFilesMiddleware}

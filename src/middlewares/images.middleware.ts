import { query, ValidationChain } from "express-validator"

const imageResizeMiddleware = (fileArr: string[]) : ValidationChain[] => {
  return [
  query("width")
    .exists()
    .withMessage("Image width cannot be empty")
    .toInt()
    .isInt({ min: 1 })
    .withMessage("Width should be a valid integer with values greater than 0"),

  query("height")
    .exists()
    .withMessage("Image height cannot be empty")
    .toInt()
    .isInt({ min: 1})
    .withMessage("Height should be a valid integer with values greater than 0"),
    
  query("filename")
    .isLength({ min: 1 })
    .withMessage("Image name cannot be empty")
    .isIn(fileArr)
    .withMessage("This file does not exist"),

]}

const searchFilesMiddleware = () : ValidationChain[] => {
  return [
    query("filename")
    .isLength({ min: 1 })
    .withMessage("Image name cannot be empty")
]}

export { imageResizeMiddleware, searchFilesMiddleware }

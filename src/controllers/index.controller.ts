import express, { NextFunction, Request, Response } from 'express'

const index = (req: Request, res: Response,  next : NextFunction) => {
    res.render('index')
}

export {index}
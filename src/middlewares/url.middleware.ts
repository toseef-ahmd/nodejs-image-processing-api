import { NextFunction, Request, Response } from 'express';
import {param, ValidationError, validationResult} from 'express-validator'

const urlValidator = async (req : Request, res : Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const log = ({ msg, param, value }: ValidationError) => 
        `[param] => ${param}: [value] => ${value} : ${msg}`
        const errors = validationResult(req).formatWith(log)
        return res.status(422).json({
            success: false,
            errors: errors.array()
        });
    }

    return next();
};

export {urlValidator}
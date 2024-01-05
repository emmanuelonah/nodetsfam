import { Request, Response, NextFunction } from 'express';

import { HttpException } from '../../services/http-exception/index.service';

interface ErrorType extends HttpException {}

export function errorHandler(err: ErrorType, _req: Request, res: Response, _next: NextFunction) {
    console.error(err);
    console.error(err.name);
    console.error(Object.keys(err));

    let error = { ...err };
    error.message = err.message;

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((e) => e.message);
        error = new HttpException(400, message.toString().replace('Path', ''));
    }

    if (err.name === 'CastError') {
        const message = 'Invalid Parameter';
        error = new HttpException(400, message);
    }

    if (err.code === 11000) {
        const message = Object.keys(err.keyValue).map((e) => e);
        error = new HttpException(400, `${message.toString()} already exists`);
    }

    return res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode,
        message: error.message || 'Server Error',
    });
}

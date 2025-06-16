import {body, param, validationResult} from 'express-validator';
import { NotFoundError } from './errors';



export const validateProduct = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
     body('price').notEmpty().withMessage('price is required'),
       body('category').notEmpty().withMessage('category is required'),
        body('inStock').notEmpty().withMessage('inStock is required'),
]);
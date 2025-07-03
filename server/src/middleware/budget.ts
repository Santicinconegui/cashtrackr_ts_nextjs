import type { Request, Response, NextFunction } from 'express';
import { param, validationResult } from 'express-validator';
import Budget from '../models/Budget';

declare global {
  namespace Express {
    interface Request {
      budget?: Budget;
    }
  }
}

export const validateBudgetId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  await param('id')
    .isInt()
    .withMessage('ID de presupuesto no valido')
    .custom((value) => value > 0)
    .withMessage('ID de presupuesto debe ser mayor a 0')
    .run(req);

  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export const validateBudgetExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {};

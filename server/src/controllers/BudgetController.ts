import type { Request, Response } from 'express';
import Budget from '../models/Budget';

export class BudgetController {
  static getAll = async (req: Request, res: Response) => {
    res.send('Desde get all budgets controller');
  };
  static create = async (req: Request, res: Response) => {
    try {
      const budget = new Budget(req.body);
      await budget.save();
      res.status(201).json('Presupuesto creado');
    } catch (error) {
      // console.log(error);
      res.status(500).json({ error: 'Hubo un error inesperado' });
    }
  };
  static getBudget = async (req: Request, res: Response) => {
    res.send('Desde getBudget controller');
  };
  static updateBudget = async (req: Request, res: Response) => {
    res.send('Desde updateBudget controller');
  };
  static deleteBudget = async (req: Request, res: Response) => {
    res.send('Desde deleteBudget controller');
  };
}

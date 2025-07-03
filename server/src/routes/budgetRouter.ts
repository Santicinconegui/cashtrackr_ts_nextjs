import { Router } from 'express';
import { body, param } from 'express-validator';
import { BudgetController } from '../controllers/BudgetController';
import { handleInputErrors } from '../middleware/validation';
import { validateBudgetId } from '../middleware/budget';

const router = Router();

router.get('/', BudgetController.getAll);
router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre del presupuesto no puede ir vacio'),
  body('amount')
    .notEmpty()
    .withMessage('El presupuesto no puede ir vacio')
    .isNumeric()
    .withMessage('Cantidad no valida')
    .custom((value) => value > 0)
    .withMessage('El presupuesto debe ser mayor a 0'),
  handleInputErrors,
  BudgetController.create
);
router.get('/:id', validateBudgetId, BudgetController.getBudget);

router.put(
  '/:id',
  validateBudgetId,
  body('name').notEmpty().withMessage('El nombre del presupuesto no puede ir vacio'),
  body('amount')
    .notEmpty()
    .withMessage('El presupuesto no puede ir vacio')
    .isNumeric()
    .withMessage('Cantidad no valida')
    .custom((value) => value > 0)
    .withMessage('El presupuesto debe ser mayor a 0'),
  handleInputErrors,
  BudgetController.updateBudget
);
router.delete('/:id', validateBudgetId, BudgetController.deleteBudget);

export default router;

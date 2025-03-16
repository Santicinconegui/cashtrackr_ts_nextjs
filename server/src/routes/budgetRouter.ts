import { Router } from 'express';
import { body } from 'express-validator';
import { BudgetController } from '../controllers/BudgetController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.get('/', BudgetController.getAll);
router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre del presupuesto no puede ir vacio'),
  body('amount')
    .notEmpty()
    .withMessage('El presupuesto del presupuesto no puede ir vacio')
    .isNumeric()
    .withMessage('Cantidad no valida')
    .custom((value) => value > 0)
    .withMessage('La cantidad debe ser mayor a 0'),
  handleInputErrors,
  BudgetController.create
);
router.get('/:id', BudgetController.getBudget);
router.put('/:id', BudgetController.updateBudget);
router.delete('/:id', BudgetController.deleteBudget);

export default router;

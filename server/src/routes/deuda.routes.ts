import { Router } from 'express';

import { deudaController } from '../controllers/deudaController'
class DeudaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', deudaController.list);
        this.router.get('/:id', deudaController.listOneComplete);
        this.router.get('/one/:id', deudaController.listOne);
        this.router.post('/', deudaController.create);
        this.router.put('/:id', deudaController.update);
        this.router.delete('/:id', deudaController.delete);
    }

}

const deudaRoutes = new DeudaRoutes;
export default deudaRoutes.router;
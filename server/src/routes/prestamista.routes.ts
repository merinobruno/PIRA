import { Router } from 'express';

import { prestamistaController } from '../controllers/prestamistaController'
class PrestamistaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', prestamistaController.list);
        this.router.get('/:id', prestamistaController.listOne);
        this.router.post('/', prestamistaController.create);
        this.router.put('/:id', prestamistaController.update);
        this.router.delete('/:id', prestamistaController.delete);
    }

}

const prestamistaRoutes = new PrestamistaRoutes;
export default prestamistaRoutes.router;
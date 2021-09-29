"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deudaController_1 = require("../controllers/deudaController");
class DeudaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', deudaController_1.deudaController.list);
        this.router.get('/:id', deudaController_1.deudaController.listOneComplete);
        this.router.get('/one/:id', deudaController_1.deudaController.listOne);
        this.router.post('/', deudaController_1.deudaController.create);
        this.router.put('/:id', deudaController_1.deudaController.update);
        this.router.delete('/:id', deudaController_1.deudaController.delete);
    }
}
const deudaRoutes = new DeudaRoutes;
exports.default = deudaRoutes.router;

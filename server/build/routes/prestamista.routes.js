"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prestamistaController_1 = require("../controllers/prestamistaController");
class PrestamistaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', prestamistaController_1.prestamistaController.list);
        this.router.get('/:id', prestamistaController_1.prestamistaController.listOne);
        this.router.post('/', prestamistaController_1.prestamistaController.create);
        this.router.put('/:id', prestamistaController_1.prestamistaController.update);
        this.router.delete('/:id', prestamistaController_1.prestamistaController.delete);
    }
}
const prestamistaRoutes = new PrestamistaRoutes;
exports.default = prestamistaRoutes.router;

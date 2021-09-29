"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deudaController = void 0;
const database_1 = __importDefault(require("../database"));
class DeudaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deuda = yield database_1.default.query('SELECT * FROM deuda');
            res.json(deuda);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deuda = yield database_1.default.query('SELECT * FROM deuda WHERE id_deuda = ?', [id]);
            if (deuda.length > 0) {
                return res.json(deuda[0]);
            }
            res.status(404).json({ text: "El deuda no existe" });
        });
    }
    listOneComplete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deuda = yield database_1.default.query('SELECT A.*,B.*, C.*  FROM deuda AS A INNER JOIN cliente as B INNER JOIN prestamista as C ON A.cliente=B.dni AND A.prestamista=C.cuil AND cliente = ?', [id]);
            if (deuda.length > 0) {
                return res.json(deuda);
            }
            res.status(404).json({ text: "El deuda no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO deuda set ?', [req.body]);
            res.json({ message: 'Deuda Creada Exitosamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE deuda set ? WHERE id_deuda = ?', [req.body, id]);
            res.json({ message: 'Deuda Actualizada Exitosamente' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM deuda WHERE id_deuda = ?', [id]);
            res.json({ message: 'Deuda Eliminada Exitosamente' });
        });
    }
}
exports.deudaController = new DeudaController();
exports.default = exports.deudaController;

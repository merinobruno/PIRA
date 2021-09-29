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
exports.clienteController = void 0;
const database_1 = __importDefault(require("../database"));
class ClienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield database_1.default.query('SELECT * FROM cliente ORDER BY dni ASC');
            res.json(cliente);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield database_1.default.query('SELECT * FROM cliente WHERE id_cliente = ?', [id]);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ text: "El cliente no existe" });
        });
    }
    listById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield database_1.default.query('SELECT nombre, apellido, dni FROM cliente WHERE dni = ?', [req.body]);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ text: "El cliente no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cliente set ?', [req.body]);
            res.json({ message: 'Cliente Creado Exitosamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cliente set ? WHERE id_cliente = ?', [req.body, id]);
            res.json({ message: 'Cliente Actualizado Exitosamente' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM cliente WHERE id_cliente = ?', [id]);
            res.json({ message: 'Cliente Eliminado Exitosamente' });
        });
    }
}
exports.clienteController = new ClienteController();
exports.default = exports.clienteController;

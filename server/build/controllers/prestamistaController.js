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
exports.prestamistaController = void 0;
const database_1 = __importDefault(require("../database"));
class PrestamistaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const prestamista = yield database_1.default.query('SELECT * FROM prestamista');
            res.json(prestamista);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prestamista = yield database_1.default.query('SELECT * FROM prestamista WHERE id_prestamista = ?', [id]);
            if (prestamista.length > 0) {
                return res.json(prestamista[0]);
            }
            res.status(404).json({ text: "El prestamista no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO prestamista set ?', [req.body]);
            res.json({ message: 'Prestamista Creado Exitosamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE prestamista set ? WHERE id_prestamista = ?', [req.body, id]);
            res.json({ message: 'Prestamista Actualizado Exitosamente' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM prestamista WHERE id_prestamista = ?', [id]);
            res.json({ message: 'Prestamista Eliminado Exitosamente' });
        });
    }
}
exports.prestamistaController = new PrestamistaController();
exports.default = exports.prestamistaController;

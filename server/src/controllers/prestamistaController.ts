import { Request, Response } from 'express';

import pool from '../database';

class PrestamistaController{
    public async list (req: Request, res: Response) {
        const prestamista = await pool.query('SELECT * FROM prestamista');
        res.json(prestamista);
    } 

    public async listOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const prestamista = await pool.query('SELECT * FROM prestamista WHERE id_prestamista = ?', [id]);
        
        if (prestamista.length>0){
            return res.json(prestamista[0])
        }
        res.status(404).json({text: "El prestamista no existe"})
    } 

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO prestamista set ?', [req.body])
        res.json({message: 'Prestamista Creado Exitosamente'});
    }

    public async update (req: Request, res: Response){
        const { id } = req.params;
        await pool.query('UPDATE prestamista set ? WHERE id_prestamista = ?', [req.body, id]);
        res.json({message: 'Prestamista Actualizado Exitosamente'})
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM prestamista WHERE id_prestamista = ?', [id]);
        res.json({message: 'Prestamista Eliminado Exitosamente'})
    }
}

export const prestamistaController = new PrestamistaController();
export default prestamistaController;
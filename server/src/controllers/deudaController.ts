import { Request, Response } from 'express';

import pool from '../database';

class DeudaController{
    public async list (req: Request, res: Response) {
        const deuda = await pool.query('SELECT * FROM deuda');
        res.json(deuda);
    } 

    public async listOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const deuda = await pool.query('SELECT * FROM deuda WHERE id_deuda = ?', [id]);
        
        if (deuda.length>0){
            return res.json(deuda[0])
        }
        res.status(404).json({text: "El deuda no existe"})
    } 

    public async listOneComplete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const deuda = await pool.query('SELECT A.*,B.*, C.*  FROM deuda AS A INNER JOIN cliente as B INNER JOIN prestamista as C ON A.cliente=B.dni AND A.prestamista=C.cuil AND cliente = ?', [id]);
        
        if (deuda.length>0){
            return res.json(deuda)
        }
        res.status(404).json({text: "El deuda no existe"})
    } 

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO deuda set ?', [req.body])
        res.json({message: 'Deuda Creada Exitosamente'});
    }

    public async update (req: Request, res: Response){
        const { id } = req.params;
        await pool.query('UPDATE deuda set ? WHERE id_deuda = ?', [req.body, id]);
        res.json({message: 'Deuda Actualizada Exitosamente'})
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM deuda WHERE id_deuda = ?', [id]);
        res.json({message: 'Deuda Eliminada Exitosamente'})
    }
}

export const deudaController = new DeudaController();
export default deudaController;
import { Request, Response } from 'express';

import pool from '../database';

class ClienteController{
    public async list (req: Request, res: Response) {
        const cliente = await pool.query('SELECT * FROM cliente ORDER BY dni ASC');
        res.json(cliente);
    } 

    public async listOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const cliente = await pool.query('SELECT * FROM cliente WHERE id_cliente = ?', [id]);
        
        if (cliente.length>0){
            return res.json(cliente[0])
        }
        res.status(404).json({text: "El cliente no existe"})
    } 

    public async listById (req: Request, res: Response): Promise<any>{
        const cliente = await pool.query('SELECT nombre, apellido, dni FROM cliente WHERE dni = ?', [req.body]);
        
        if (cliente.length>0){
            return res.json(cliente[0])
        }
        res.status(404).json({text: "El cliente no existe"})
    } 

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO cliente set ?', [req.body])
        res.json({message: 'Cliente Creado Exitosamente'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE cliente set ? WHERE id_cliente = ?', [req.body, id]);
        res.json({message: 'Cliente Actualizado Exitosamente'})
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM cliente WHERE id_cliente = ?', [id]);
        res.json({message: 'Cliente Eliminado Exitosamente'})
    }
}

export const clienteController = new ClienteController();
export default clienteController;
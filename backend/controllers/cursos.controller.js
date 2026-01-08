// import * as cursosModel from "../models/cursos.model.js";

 
/**
 * ==========================================
 * 📦 CONTROLADOR DE CURSOS
 * ==========================================
*/

import { CursosModel } from '../models/cursos.model.js';

export const CursosController = {

  async getCursos(req, res) {
    const cursos = await CursosModel.getCursos();
    res.json(cursos);
  },

  async getCurso(req, res) {
    const curso = await CursosModel.getCurso(req.params.id);

    if (!curso) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    res.json(curso);
  },

  async createCurso(req, res) {
    const id = await CursosModel.createCurso(req.body);
    res.status(201).json({ id });
  },

  async updateCurso(req, res) {
    await CursosModel.updateCurso(req.params.id, req.body);
    res.sendStatus(204);
  },

  async deleteCurso(req, res) {
    await CursosModel.deleteCurso(req.params.id);
    res.sendStatus(204);
  }

};
 

// export async function getCursos(req, res) {
//   try {
//     console.log('📦 Obteniendo cursos...');
   
//     const cursos = await cursosModel.obtenerCursos();
   
//     res.status(200).json({
//       success: true,
//       message: `Se encontraron ${cursos.length} cursos`,
//       data: cursos
//     });
   
//   } catch (error) {
//     console.error('❌ Error al obtener cursos:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error interno del servidor',
//       error: error.message
//     });
//   }
// }
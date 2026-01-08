import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/user.model.js';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/jwt.js';

export const AuthController = {

  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña requeridos' });
    }

    const user = await UserModel.findByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Usuario no válido' });
    }

    // Soporta passwords en claro (legacy) o hasheadas
    const validPassword =
      user.pasword.startsWith('$2')
        ? await bcrypt.compare(password, user.pasword)
        : password === user.pasword;

    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      {
        id: user.id_usuario,
        nombre: user.nombre
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.json({
      token,
      user: {
        id: user.id_usuario,
        nombre: user.nombre,
        email: user.email
      }
    });
  }

};

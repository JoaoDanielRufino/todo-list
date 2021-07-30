import { Request, Response } from 'express';

import AuthenticationService from '../services/AuthenticationService';

class SessionController {
  login(req: Request, res: Response) {
    const { login, senha } = req.body;

    const authenticationService = new AuthenticationService();

    try {
      const token = authenticationService.execute({ login, senha });

      res.json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(401).json({ message: err.message });
    }
  }
}

export default new SessionController();

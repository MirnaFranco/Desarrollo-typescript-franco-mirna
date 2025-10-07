import type { Request, Response, NextFunction } from "express";

export const permit = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user || !roles.includes(user.rol)) {
      return res.status(403).json({ message: "No autorizado" });
    }
    next();
  };
};

import type { Usuario } from "../Entidades/Usuario";


declare module "express" {
  export interface Request {
    user?: Usuario;
  }
}

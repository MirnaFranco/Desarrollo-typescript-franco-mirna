import { AppDataSource } from "../databaseFormotex";
import { Usuario } from "../Entidades/Usuario";
import { ApiError } from "../utils/ApiError";

export const getUsuariosService = async () => {
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  return await usuarioRepo.find();
};

export const getUsuarioService = async (id: number) => {
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const usuario = await usuarioRepo.findOneBy({ id_usuario: id });
  if (!usuario) throw new ApiError(404, "Usuario no encontrado");
  return usuario;
};

export const updateUsuarioService = async (id: number, data: Partial<Usuario>) => {
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const usuario = await getUsuarioService(id);
  usuarioRepo.merge(usuario, data);
  return await usuarioRepo.save(usuario);
};

export const deleteUsuarioService = async (id: number) => {
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const usuario = await getUsuarioService(id);
  return await usuarioRepo.remove(usuario);
};

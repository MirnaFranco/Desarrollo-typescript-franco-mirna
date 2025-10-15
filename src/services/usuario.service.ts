import { Database } from "../databaseFormotex";
import { Usuario } from "../Entidades/Usuario";
import { ApiError } from "../utils/ApiError";

export const getUsuariosService = async () => {
  const ds = await Database.connect();
  const usuarioRepo = ds.getRepository(Usuario);
  return await usuarioRepo.find();
};

export const getUsuarioService = async (id: number) => {
  const ds = await Database.connect();
  const usuarioRepo = ds.getRepository(Usuario);
  const usuario = await usuarioRepo.findOneBy({ id_usuario: id });
  if (!usuario) throw new ApiError(404, "Usuario no encontrado");
  return usuario;
};

export const updateUsuarioService = async (id: number, data: Partial<Usuario>) => {
  const usuario = await getUsuarioService(id);
  const ds = await Database.connect();
  const usuarioRepo = ds.getRepository(Usuario);
  usuarioRepo.merge(usuario, data);
  return await usuarioRepo.save(usuario);
};

export const deleteUsuarioService = async (id: number) => {
  const usuario = await getUsuarioService(id);
  const ds = await Database.connect();
  const usuarioRepo = ds.getRepository(Usuario);
  return await usuarioRepo.remove(usuario);
};

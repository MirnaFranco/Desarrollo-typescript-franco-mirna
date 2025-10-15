import { Database } from "../databaseFormotex"; 
import { Equipo } from "../Entidades/Equipo";
import { Usuario } from "../Entidades/Usuario";
import { ApiError } from "../utils/ApiError";

export const crearEquipoService = async (data: Partial<Equipo>) => {
  if (!data.numero_serie) throw new ApiError(400, "Número de serie es obligatorio");

  const ds = await Database.connect();
  const repo = ds.getRepository(Equipo);

  const existing = await repo.findOneBy({ numero_serie: data.numero_serie });
  if (existing) throw new ApiError(409, "Número de serie ya registrado");

  const equipo = repo.create(data);
  return await repo.save(equipo);
};

export const getEquiposService = async () => {
  const ds = await Database.connect();
  const repo = ds.getRepository(Equipo);
  return await repo.find({ relations: ["responsable", "especificacion"] });
};

export const getEquipoService = async (id: number) => {
  const ds = await Database.connect();
  const repo = ds.getRepository(Equipo);
  const equipo = await repo.findOne({
    where: { id_equipo: id },
    relations: ["responsable", "especificacion"]
  });
  if (!equipo) throw new ApiError(404, "Equipo no encontrado");
  return equipo;
};

export const updateEquipoService = async (id: number, data: Partial<Equipo>) => {
  const equipo = await getEquipoService(id);
  const ds = await Database.connect();
  const repo = ds.getRepository(Equipo);
  repo.merge(equipo, data);
  return await repo.save(equipo);
};

export const deleteEquipoService = async (id: number) => {
  const equipo = await getEquipoService(id);
  const ds = await Database.connect();
  const repo = ds.getRepository(Equipo);
  return await repo.remove(equipo);
};

// Asignar equipo a usuario
export const asignarEquipoService = async (id_equipo: number, id_usuario: number, observaciones?: string) => {
  const ds = await Database.connect();
  const equipoRepo = ds.getRepository(Equipo);
  const usuarioRepo = ds.getRepository(Usuario);

  const equipo = await getEquipoService(id_equipo);
  const usuario = await usuarioRepo.findOneBy({ id_usuario });
  if (!usuario) throw new ApiError(404, "Usuario no encontrado");

  equipo.responsable = usuario;
  return await equipoRepo.save(equipo);
};

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Equipo } from "./Equipo";
import { Asignacion } from "./Asignacion";


@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario!: number;

  @Column()
  nombre!: string;

  @Column({ unique: true })
  correo!: string;

  @Column()
  contrasena!: string;

  @Column({ default: "user" })
  rol!: string;

  @OneToMany(() => Equipo, (equipo) => equipo.responsable)
  equipos!: Equipo[];

  //  Agregar propiedad inversa para Asignaciones
  @OneToMany(() => Asignacion, (a) => a.usuario)
  asignaciones!: Asignacion[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Equipo } from "./Equipo";
import { Asignacion } from "./Asignacion";


@Entity({name: "usuarios"})
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario!: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  nombre!: string;

  @Column({type: "varchar", length: 100, unique: true, nullable: false})
  correo!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  contrasena!: string;

  @Column({ type: "varchar", length: 50, default: "user" })
  rol!: string;

  @OneToMany(() => Equipo, (equipo) => equipo.responsable)
  equipos!: Equipo[];

  //  Agregar propiedad inversa para Asignaciones
  @OneToMany(() => Asignacion, (a) => a.usuario)
  asignaciones!: Asignacion[];
}

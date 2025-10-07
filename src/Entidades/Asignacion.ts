import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Equipo } from "./Equipo";
import { Usuario } from "./Usuario";


@Entity({ name: "asignaciones" })
export class Asignacion {
@PrimaryGeneratedColumn({ name: "id_asignacion" })
id_asignacion!: number;


@ManyToOne(() => Equipo, (e) => e.asignaciones, { onDelete: "CASCADE" })
@JoinColumn({ name: "id_equipo" })
equipo!: Equipo;


@ManyToOne(() => Usuario, (u) => u.asignaciones, { onDelete: "CASCADE" })
@JoinColumn({ name: "id_usuario" })
usuario!: Usuario;


@Column({ type: "datetime", name: "fecha_asignacion", default: () => "CURRENT_TIMESTAMP" })
fecha_asignacion!: Date;


@Column({ type: "datetime", name: "fecha_devolucion", nullable: true })
fecha_devolucion?: Date | null;


@Column({ type: "text", nullable: true })
observaciones?: string;
}
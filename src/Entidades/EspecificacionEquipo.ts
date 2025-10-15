import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Equipo } from "./Equipo";


@Entity({ name: "especificaciones_equipo" })
export class EspecificacionEquipo {
@PrimaryGeneratedColumn({ name: "id_especificacion" })
id_especificacion!: number;


@OneToOne(() => Equipo, (equipo) => equipo.especificacion, { onDelete: "CASCADE" })
@JoinColumn({ name: "id_equipo" })
equipo!: Equipo;


@Column({ type: "varchar", length: 200, nullable: true })
cpu?: string;


@Column({ type: "int", nullable: true, name: "ram_gb" })
ram_gb?: number;


@Column({ type: "int", nullable: true, name: "almacenamiento_gb" })
almacenamiento_gb?: number;


@Column({ type:"varchar",length: 150, nullable: true, name: "sistema_operativo" })
sistema_operativo?: string;
}
import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity({ name: "etiquetas_equipo" })
export class EtiquetaEquipo {
@PrimaryColumn({ name: "id_equipo", type: "int" })
id_equipo!: number;


@PrimaryColumn({ length: 100 })
etiqueta!: string;


@Column({ type: "datetime", name: "fecha_creacion", default: () => "CURRENT_TIMESTAMP" })
fecha_creacion!: Date;
}
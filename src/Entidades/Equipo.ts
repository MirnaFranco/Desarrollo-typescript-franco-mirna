import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany} from "typeorm";
import { Usuario } from "./Usuario";
import { EspecificacionEquipo } from "./EspecificacionEquipo";
import { Asignacion } from "./Asignacion";

@Entity({name:"equipos"})
export class Equipo {
  @PrimaryGeneratedColumn({name: "id_equipo"})
  id_equipo!: number;

  @Column({ type: "varchar",length: 100, nullable: false })
  nombre!: string;

  @Column( { type: "varchar", length: 100, unique: true, nullable: false})
  numero_serie!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  modelo!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  ubicacion!: string;

  @Column({type: "varchar", length: 50, default: "disponible" })
  estado!: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.equipos, { onDelete: "SET NULL", nullable: true })
  responsable!: Usuario;

  //  Relación con EspecificacionEquipo
  @OneToOne(() => EspecificacionEquipo, (esp) => esp.equipo, { cascade: true })
  especificacion?: EspecificacionEquipo;

  //  Agregar propiedad inversa para Asignaciones
  @OneToMany(() => Asignacion, (a) => a.equipo)
  asignaciones!: Asignacion[];

}

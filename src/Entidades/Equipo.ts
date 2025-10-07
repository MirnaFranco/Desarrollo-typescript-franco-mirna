import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany} from "typeorm";
import { Usuario } from "./Usuario";
import { EspecificacionEquipo } from "./EspecificacionEquipo";
import { Asignacion } from "./Asignacion";

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id_equipo!: number;

  @Column()
  nombre!: string;

  @Column({ unique: true })
  numero_serie!: string;

  @Column()
  modelo!: string;

  @Column()
  ubicacion!: string;

  @Column({ default: "disponible" })
  estado!: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.equipos)
  responsable!: Usuario;

  //  Relación con EspecificacionEquipo
  @OneToOne(() => EspecificacionEquipo, (esp) => esp.equipo, { cascade: true })
  especificacion?: EspecificacionEquipo;

  //  Agregar propiedad inversa para Asignaciones
  @OneToMany(() => Asignacion, (a) => a.equipo)
  asignaciones!: Asignacion[];

}

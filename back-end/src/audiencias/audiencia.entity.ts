import { Table, Column, Model, BelongsToMany, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Idioma } from 'src/idiomas/idioma.entity';
import { Posto } from 'src/postos/posto.entity';
import { AudienciaIdioma } from 'src/audienciasIdiomas/audienciaIdioma.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Table
export class Audiencia extends Model {
  /**
   * Atributos
   */

  @Column({primaryKey: true, autoIncrement: true})
  audienciaId: number;

  @Column
  audienciaProcesso: string;

  @Column
  audienciaDuracao: number;

  @Column
  audienciaStatus: boolean;

  @Column
  audienciaDataHorario: Date;

  @Column
  audienciaDescricao: string;

  /**
   * Foreign Keys
   */

   @ForeignKey(() => Usuario)
   @Column
   usuarioCpf: string;

  /*
    Relações da tabela
  */

  @BelongsToMany(() => Idioma, () => AudienciaIdioma)
  idioma: Idioma[]

  @BelongsTo(() => Usuario)
  usuario: Usuario

  @HasMany(() => Posto)
  posto: Posto[];
}
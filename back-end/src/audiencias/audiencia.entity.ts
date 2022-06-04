import { Table, Column, Model, BelongsToMany, HasMany, BelongsTo, ForeignKey, Unique, Default, AllowNull } from 'sequelize-typescript';
import { Idioma } from 'src/idiomas/idioma.entity';
import { Posto } from 'src/postos/posto.entity';
import { AudienciaIdioma } from 'src/audienciasIdiomas/audienciaIdioma.entity';
import { Usuario } from 'src/usuarios/usuario.entity';
import { Unidade } from 'src/unidades/unidade.entity';

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

  @Default(false)
  @Column
  audienciaCancelada: boolean;

  /**
   * Foreign Keys
   */

   @ForeignKey(() => Usuario)
   @Column
   usuarioCpf: string;
  
   @AllowNull(false)
   @ForeignKey(() => Unidade)
   @Column
   unidadeId: number;

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
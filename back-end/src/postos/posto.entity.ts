import { Table, Column, Model, BelongsTo, ForeignKey, BelongsToMany, Default } from 'sequelize-typescript';
import { Interprete } from 'src/interpretes/interprete.entity';
import { Audiencia } from 'src/audiencias/audiencia.entity';
import { InterpretePosto } from 'src/interpretesPostos/interpretePosto.entity';

@Table
export class Posto extends Model {
  /**
   * Atributos
   */
  
  @Column({primaryKey: true, autoIncrement: true}) 
  postoId: number;

  @Column
  postoDescricao: string;

  @Default(false)
  @Column
  postoCancelado: boolean;

  /**
   * ForeignKeys
   */

  @ForeignKey(() => Interprete)
  @Column
  interpreteCpf: string;

  @ForeignKey(() => Audiencia)
  @Column
  audienciaId: number;

  /**
   * Relações das tabelas
   */
  @BelongsToMany(() => Interprete, () => InterpretePosto)
  interprete: Interprete[];

  @BelongsTo(() => Audiencia)
  audiencia: Interprete;
}
import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Interprete } from 'src/interpretes/interprete.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Table
export class Credencial extends Model {
  /**
   * Atributos
   */

  @Column({primaryKey: true, autoIncrement: true})
  credencialId: number;

  @Column
  credencialLink: string;

  @Column
  credencialValidacao: boolean;

  @Column
  credencialFeedback: string;

  @Column
  credencialDescricao: string;

  /**
   * Foreign Keys
   */

  @ForeignKey(() => Interprete)
  @Column
  interpreteCpf: string;

  @ForeignKey(() => Usuario)
  @Column
  usuarioCpf: string;

  /**
   * Relações da tabela
   */

  @BelongsTo(() => Interprete)
  interprete: Interprete;

  @BelongsTo(() => Usuario)
  usuario: Usuario  
}
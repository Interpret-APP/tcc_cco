import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Interprete } from 'src/interpretes/interprete.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Table
export class Pais extends Model {
  /**
   * Atributos
   */

  @Column({primaryKey: true, autoIncrement: true})
  paisId: number;

  @Column
  paisNome: string;

  /**
   * Relações da tabela
   */
  
  @HasMany(() => Interprete)
  interprete: Interprete[];

  @HasMany(() => Usuario)
  usuario: Usuario[];
}
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Usuario } from 'src/usuarios/usuario.entity';

@Table
export class Unidade extends Model {
  /**
   * Atributos
   */
  
  @Column({primaryKey: true, autoIncrement:true})
  unidadeId: number;

  @Column
  unidadeTipo: number;

  @Column
  unidadeNome: string;

  @Column
  unidadeNomeAbreviado: string;

  @Column
  unidadeEndereco: string;

  @Column
  unidadeComplemento: number;

  @Column
  unidadeCep: number;

  @Column
  unidadeCidade: string;

  @Column
  unidadeUf: string;

  @Column
  unidadeTelefone: number;

  @Column
  unidadeEmail: string;

  /**
   * Relações da tabela
   */

   @HasMany(() => Usuario)
   usuario: Usuario[];
}
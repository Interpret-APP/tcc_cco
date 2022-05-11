import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Usuario } from 'src/usuarios/usuario.entity';

@Table
export class Certificadora extends Model {
  /**
   * Atributos
   */

  @Column({primaryKey: true})
  certificadoraCnpj: string;

  @Column
  certificadoraNome: string;

  @Column
  certificadoraNomeAbreviado: string;

  @Column
  certificadoraEndereco: string;

  @Column
  certificadoraComplemento: number;

  @Column
  certificadoraCep: number;

  @Column
  certificadoraCidade: string;

  @Column
  certificadoraUf: string;

  @Column
  certificadoraTelefone: number;

  @Column
  certificadoraEmail: string;

  /**
   * Relações da tabela
   */

   @HasMany(() => Usuario)
   usuario: Usuario[];
}
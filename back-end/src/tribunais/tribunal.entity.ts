import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Usuario } from 'src/usuarios/usuario.entity';

@Table
export class Tribunal extends Model {
  /**
   * Atributos
   */

  @Column({primaryKey: true})
  tribunalCnpj: string;

  @Column
  tribunalRazaoSocial: string;

  @Column
  tribunalNomeAbrviado: string;

  @Column
  tribunalEndereco: string;
  
  @Column
  tribunalComplemento: number;

  @Column
  tribunalCEP: number;

  @Column
  tribunalCidade: string;

  @Column
  tribunalUf: string;

  @Column
  tribunalTelefone: number;

  @Column
  tribunalEmail: string;

  /**
   * Relações da tabela
   */

   @HasMany(() => Usuario)
   usuario: Usuario[];
}
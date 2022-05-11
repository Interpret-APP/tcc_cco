import { Table, Column, Model, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Audiencia } from 'src/audiencias/audiencia.entity';
import { Certificadora } from 'src/certificadoras/certificadora.entity';
import { Credencial } from 'src/credencial/credencial.entity';
import { Pais } from 'src/paises/pais.entity';
import { Tribunal } from 'src/tribunais/tribunal.entity';
import { Unidade } from 'src/unidades/unidade.entity';

@Table
export class Usuario extends Model {
  @Column({primaryKey: true})
  usuarioCpf: string;

  @Column
  usuarioCargo: number;

  @Column
  usuarioNome: string;

  @Column
  usuarioEndereco: string;

  @Column
  usuarioComplemento: number;

  @Column
  usuarioCep: number;

  @Column
  usuarioCidade: string;

  @Column
  usuarioUf: string;

  @Column
  usuarioTelefone: number;

  @Column
  usuarioEmail: string;

  /**
   * Foreign Keys
   */

   @ForeignKey(() => Pais)
   @Column
   paisId: number;

   @ForeignKey(() => Certificadora)
   @Column
   certificadoraCnpj: string;

   @ForeignKey(() => Tribunal)
   @Column
   tribunalCnpj: string;

   @ForeignKey(() => Unidade)
   @Column
   unidadeId: number;

  /**
   * Relações da tabela
   */

  @HasMany(() => Audiencia)
  audiencia: Audiencia[];

  @HasMany(() => Credencial)
  credencial: Credencial[];

  @BelongsTo(() => Pais)
  pais: Pais;

  @BelongsTo(() => Certificadora)
  certificadora: Certificadora;

  @BelongsTo(() => Tribunal)
  tribunal: Tribunal;

  @BelongsTo(() => Unidade)
  unidade: Unidade;
}
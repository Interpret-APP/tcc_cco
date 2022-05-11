import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Interprete } from 'src/interpretes/interprete.entity';
import { Audiencia } from 'src/audiencias/audiencia.entity';
import { InterpreteIdioma } from 'src/interpretesIdiomas/interpreteIdioma.entity';
import { AudienciaIdioma } from 'src/audienciasIdiomas/audienciaIdioma.entity';

@Table
export class Idioma extends Model {
  /**
   * Atributos
   */
  
  @Column({primaryKey: true, autoIncrement: true})
  idiomaId: number;

  @Column
  idiomaNome: string;

  @Column
  idiomaValidacao: boolean; //validação do idioma, em caso de inserção pelo usuário

  /**
   * Relações da tabela
   */

  @BelongsToMany(() => Interprete, () => InterpreteIdioma)
  interprete: Interprete[];

  @BelongsToMany(() => Audiencia, () => AudienciaIdioma)
  audiencia: Audiencia[];
}
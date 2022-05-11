import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Interprete } from 'src/interpretes/interprete.entity';
import { Posto } from 'src/postos/posto.entity';


@Table
export class InterpretePosto extends Model {
  /**
   * Atributos
   */
  
  @Column
  interpretePostoSelecionado: boolean; // Se o intérprete X foi selecionado

  @Column
  interpretePostoStatus: boolean; // Se o intérprete X permanece inscrito na audiência
  
  /**
   * Foreign Keys
   */

   @ForeignKey(() => Interprete)
   @Column
   interpreteCpf: string;
 
   @ForeignKey(() => Posto)
   @Column
   postoId: number;
}
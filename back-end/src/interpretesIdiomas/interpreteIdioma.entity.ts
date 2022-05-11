import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Interprete } from 'src/interpretes/interprete.entity';
import { Idioma } from 'src/idiomas/idioma.entity';

@Table
export class InterpreteIdioma extends Model {
    /**
     * Atributos
     */

    @Column({primaryKey: true, autoIncrement: true})
    interpreteIdiomaId: number;

    @Column
    interpreteIdiomaNativo: boolean;
    
    @Column
    interpreteIdiomaPara: string;
    
    /**
     * Foreign Keys 
     */

    @ForeignKey(() => Interprete)
    @Column
    interpreteCpf: string;
  
    @ForeignKey(() => Idioma)
    @Column
    idiomaId: number;
}
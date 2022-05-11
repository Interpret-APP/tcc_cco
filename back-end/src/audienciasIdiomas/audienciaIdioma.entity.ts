import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Audiencia } from 'src/audiencias/audiencia.entity';
import { Idioma } from 'src/idiomas/idioma.entity';

@Table
export class AudienciaIdioma extends Model {
    /**
     * Atributos
     */
    
    @Column({primaryKey: true, autoIncrement: true})
    audienciaIdiomaId: number;

    /**
     * Foreign Keys
     */
    
    @ForeignKey(() => Audiencia)
    @Column
    audienciaId: number;
  
    @ForeignKey(() => Idioma)
    @Column
    idiomaId: number;
}
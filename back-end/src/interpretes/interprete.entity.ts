import { Table, Column, Model, BelongsToMany, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Idioma } from 'src/idiomas/idioma.entity';
import { Credencial } from 'src/credencial/credencial.entity';
import { Posto } from 'src/postos/posto.entity';
import { Pais } from 'src/paises/pais.entity';

import { InterpreteIdioma } from 'src/interpretesIdiomas/interpreteIdioma.entity';
import { InterpretePosto } from 'src/interpretesPostos/interpretePosto.entity';

@Table
export class Interprete extends Model {
  
  @Column({primaryKey: true})
  interpreteCpf: string;

  @Column
  interpreteNome: string;

  @Column
  interpreteFoto: string;

  @Column
  interpreteCadastroAjg: boolean;

  @Column 
  interpreteComunidadeMinoritaria: string;

  @Column
  interpreteGenero: string;

  @Column
  interpreteDataNascimento: Date;

  @Column
  interpreteEndereco: string;

  @Column
  interpreteComplemento: number;

  @Column
  interpreteCep: number;

  @Column
  interpreteCidade: string;

  @Column
  interpreteEstadoProvincia: string;
  
  @Column
  interpreteCelular: number;

  @Column
  interpreteWhatsapp: boolean;

  @Column
  interpreteTelegram: boolean;

  @Column
  interpreteZoom: boolean;

  @Column
  interpreteTeams: boolean;

  @Column
  interpreteGoogleMeet: boolean;

  @Column
  interpreteWhereby: boolean;
    
  @Column
  interpreteEmail: string;

  @Column
  interpreteRestricao: string;

  @Column
  interpreteValidacaoEntrevista: boolean;

  @Column
  interpreteValidacaoTresRecomendacoes: boolean;
  
  @Column
  interpreteSenha: string;

  /**
   * Foreign Keys
   */

   @ForeignKey(() => Pais)
   @Column
   paisId: number;

  /*
  *  Relações da tabela
  */ 
  
  @BelongsToMany(() => Idioma, () => InterpreteIdioma)
  idioma: Idioma[];

  @BelongsToMany(() => Posto, () => InterpretePosto)
  posto: Posto[];

  @BelongsTo(() => Pais)
  pais: Pais;

  @HasMany(() => Credencial)
  certificado: Credencial[];  
}
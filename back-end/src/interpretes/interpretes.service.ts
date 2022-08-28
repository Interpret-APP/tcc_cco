import { Injectable, Inject } from '@nestjs/common';
import { Interprete } from './interprete.entity';
import { Idioma } from '../idiomas/Idioma.entity';
import { Credencial } from '../credencial/credencial.entity';
import { InterpretesIdiomasService } from '../interpretesIdiomas/interpretesIdiomas.service';


@Injectable()
export class InterpretesService {
  constructor(
    @Inject('INTERPRETES_REPOSITORY')
    private readonly interpretesRepository: typeof Interprete,
    @Inject('IDIOMAS_REPOSITORY')
    private readonly idiomasRepository: typeof Idioma,
    @Inject('CREDENCIAIS_REPOSITORY')
    private readonly credenciaisRepository: typeof Credencial,
    private readonly interpretesIdiomasService: InterpretesIdiomasService
  ) {}

  async getInterpretes(offset: number, limit: number) {
    offset = isNaN(offset) || offset < 0 ? 0 : offset;
    limit = isNaN(limit) || limit < 0 || limit > 10 ? 10 : limit;

    return this.interpretesRepository.findAndCountAll({ 
      attributes: [
        'interpreteCpf', 
        'interpreteNome', 
        'interpreteCadastroAjg',
        'interpreteEmail',
        'interpreteCidade',
        'interpreteStatus'
      ],
      offset, 
      limit,
      include: [{
        model: this.idiomasRepository,
        as: 'idiomas',
        attributes: ['idiomaNome'],
      }]
    });
  }

  async deleteInterprete(interpreteCpf: string) {
    return await this.interpretesRepository.update(
      { interpreteRemovido: true, interpreteStatus: false },
      {where: {
        interpreteCpf,
        interpreteRemovido: false
      }}
    );
  }

  async createInterprete(interprete: any, idiomas: any, certificados: any) {
    let newInterprete = await this.interpretesRepository.create<Interprete>(interprete);
    let promises = [];

    for (let idioma of idiomas) {
      promises.push(this.interpretesIdiomasService.createInterpreteIdioma(idioma, interprete.interpreteCpf));
    }

    for (let certificado of certificados) {
      promises.push(this.credenciaisRepository.create<Credencial>({
        credencialLink: certificado.credencialLink,
        credencialValidacao: certificado.credencialValidacao,
        credencialFeedback: certificado.credencialFeedback,
        credencialDescricao: certificado.credencialDescricao,
        interpreteCpf: interprete.interpreteCpf
      }));
    }
    
    try { await Promise.allSettled(promises);
    } catch(e) { console.log('Erro ao adicionar idiomas', e); }

    return newInterprete;

  }

  async getInterpreteByCPF(interpreteCpf: string): Promise<Interprete> {
    return this.interpretesRepository.findOne<Interprete>({
      where: {interpreteCpf},
      include: [{
          model: this.idiomasRepository,
          attributes: ['idiomaNome', 'idiomaValidacao'],
        },
        {
          model: this.credenciaisRepository,
          as: 'certificados'
        }
      ]
    });
  }

  async updateInterprete(interpreteCpf: string, interprete: any) {
    //cruzar com a tabela de idiomas e credenciais
    return this.interpretesRepository.update(
      interprete,
      {where: {
        interpreteCpf,
        interpreteRemovido: false
      }}
    );
  }
}
// export interface Country {
//     name?: string;
//     code?: string;
//   }
  
  export interface Representative {
    name?: string;
    image?: string;
  }
  
  export interface Certificado {
    id?: string;
    imagem?: string;
    titulo?: string;
    interprete?: string;
    date?: string | Date;
    status?: string;
    tipo?: string;
    visualizar?: string;
    acoes?: string;
    validacao?: string;

    // id?: number;
    // name?: string;
    // country?: Country;
    // company?: string;
    // date?: string | Date;
    // status?: string;
    // activity?: number;
    // representative?: Representative;
    // verified?: boolean;
    // balance?: boolean;
  }
  
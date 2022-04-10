## Node.js

- O projeto utiliza a versão 16.14.2 do Node.js
    - Atualmente essa é a versão LTS
- O projeto utiliza a versão 8.5.0 do npm 

#### Métodos de download

##### Recomendado
- Fazer a instalção por meio do `asdf`, assim conseguimos ter mais de uma versão do Node.js instalada em nossas máquinas
    - Faça a instalação do [asdf](http://asdf-vm.com/guide/getting-started.html#core-installation-complete) 
        - A instalação varia de acordo com o tipo de sistema operacional e terminal utilizados 
    - Faça a instação do node via asdf. A instalação é padrão para todos os sistemas operacinais. Listei o passo a passo abaixo, mas caso prefira, pode seguir o tutorial pelo [site](https://github.com/asdf-vm/asdf-nodejs)
        - `asdf install nodejs 16.14.2`
        -  Para tornar essa versão do node.js global utilize o comando
            - `asdf global nodejs 16.14.2`  
        -  Caso prefira utilizar essa versão do Node.js somente no projeto atual, utilize o comando
            - `asdf local nodejs 16.14.2`  
        - Confira se a versão correta está sendo executada por meio do comando:
            - `node --version`  (v16.14.2) 
##### Alternativo
- Fazer o download da versão 16.14.2 pelo próprio site do Node.js 
    - https://nodejs.org/en/

### npm
- Execute o comando
    - `npm --version`
- Caso a versão impressa seja diferente da `8.5.0`, rode o comando
    - `npm install npm@8.5.0 -g` 

## Back-end

- `cd back-end/`
- `npm i` (o comando é apenas necessário antes de rodar o servidor pela primeira vez, ou após atualizarmos a versão de alguma biblioteca, ou adicionar uma biblioteca nova ao projeto)
- `npm run start`


## Mobile
- `npm install -g @ionic/cli`
- `cd mobile/Interpretari`
- `npm i` (o comando é apenas necessário antes de rodar o servidor pela primeira vez, ou após atualizarmos a versão de alguma biblioteca, ou adicionar uma biblioteca nova ao projeto)
- `ionic serve`

## Front-web

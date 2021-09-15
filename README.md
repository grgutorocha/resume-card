# Resume Card

Este projeto foi criado utilizando-se [Create React App](https://github.com/facebook/create-react-app) com template `Typescript` e o gerenciador de pacote `npm`.

## Estrutura de diretórios

```
|-- public
|-- src
    |-- components
    |-- containers
    |-- pages
    |-- routes
    |-- utils
```

## Como rodar o projeto

O projeto utiliza o gerenciador de pacotes `npm` por padrão. Mas, se for de preferência da equipe, pode ser utilizado o `yarn` em ambiente de desenvolvimento.

## Variáveis de ambiente

No momento, essas são as variáveis de ambiente utilizadas pelo sistema. Para utilizá-las, basta criar um arquivo `.env` na raíz do projeto. O mesmo será ignorado pelo controle de versão.

    REACT_APP_API_URL=          # Url de integração com a API
    REACT_APP_REQUEST_TOKEN=    # Token da requisicão ao graphQl

### `Ambiente de Desenvolvimento`

Para subir o servidor e rodar a aplicação em ambiente local, utilize o comando:

    npm start

Uma vez finalizado o comando, é possível visualizar a aplicação acessando no navegador o endereço [http://localhost:3000](http://localhost:3000). Sempre que algum arquivo dentro do diretório `./src` for modificado, automaticamente a aplicação será recarregada. Caso algum arquivo de configuração ou arquivos fora do diretório `./src` sejam modificados, será necessária subir a aplicação novamente.

Para parar a aplicação, aperte juntamente as teclas:

    Ctrl+C ou Command+C

### `Ambiente de Produção`

Para gerar um pacote da aplicação para produção, utilize o comando:

    npm run build

Este comando gera uma versão da aplicação otimizada no diretório `build` localizada na raíz do projeto. Este pacote é pronto para utilização em produção.

### `Testes`

Para rodar os testes, utilize o comando:

    npm run test

Este comando roda todos os testes presentes na aplicação. Caso deseje rodar os testes de apenas um arquivo, basta adicionar o caminho para o mesmo logo após o comando.

## Qualidade de código

O projeto está configurado com as bibliotecas **eslint** (padrão do CRA) e **prettier** (instalado manualmente). Os arquivos de configuração do **prettier** (`.prettierignore`) encontram-se no diretório raíz do projeto e no arquivo **package.json** . No mesmo **package.json**, o **prettier** foi configurado para impedir o build da aplicação quando houver algum código necessitando ser ajustado para forçar a qualidade e padronização do projeto.

```
"eslintConfig": {
  "extends": [
    ...
    "prettier",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    ...
    "prettier"
  ],
  "rules": {
    ...
    "prettier/prettier": "error"
  }
},
```

## Mais informações

Você pode obter mais informações sobre documentações nos links abaixo:

- [React (Documentação)](https://reactjs.org/).
- [Create React App (Documentação)](https://facebook.github.io/create-react-app/docs/getting-started).

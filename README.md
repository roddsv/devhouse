# API de Cadastro e Reserva de Casas

Esta é uma API desenvolvida com **Node.js** (sem TypeScript) para o gerenciamento de cadastro e reservas de casas. A API utiliza **MongoDB** como banco de dados e oferece validação de campos para garantir a integridade dos dados.

## Tecnologias Utilizadas

* **Node.js**
* **dotenv**: Gerenciamento de variáveis de ambiente.
* **mongoose**: Modelagem de dados e interação com MongoDB.
* **eslint**: Padronização e linting do código.
* **yup**: Validação de esquemas de dados.
* **cors**: Controle de acesso entre diferentes origens.

## Funcionalidades

* Cadastro de casas.
* Consulta de casas cadastradas.
* Reserva de casas.
* Validação de dados de entrada (exemplo: formato de e-mail, campos obrigatórios, etc.).

## Requisitos

* **Node.js** (v14 ou superior).
* **Yarn** (gerenciador de pacotes).
* **MongoDB** (instância local ou na nuvem).

## Configuração e Execução

Siga os passos abaixo para configurar e rodar a API:

1. **Clone o repositório**
   ```
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```
2. **Instale as dependências**
   ```
   yarn install
   ```
3. **Configure as variáveis de ambiente**
   Crie um arquivo `<span>.env</span>` na raiz do projeto e configure as variáveis de ambiente conforme o exemplo abaixo:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/nome_do_banco
   ```
4. **Inicie o servidor**
   ```
   yarn dev
   ```
5. **Acesse a API**
   Por padrão, a API estará rodando em: [http://localhost:3000]()

## Endpoints Disponíveis

### Casas

* **GET /houses**: Retorna todas as casas cadastradas.
* **POST /houses**: Cadastra uma nova casa.
* **PUT /houses/:house_id**: Atualiza os dados de uma casa.
* **PUT /houses/**: Deleta uma casa.

### Reservas

* **GET /reservations**: Retorna todas as reservas cadastradas.
* **POST /reservations**: Cadastra uma nova reserva.

## Validação de Campos

Os dados enviados são validados com **Yup** para garantir que os campos estejam no formato correto e que os requisitos de cada endpoint sejam atendidos. Exemplo de campos validados:

* **Nome** (obrigatório)
* **Endereço** (obrigatório)
* **Preço por noite** (obrigatório, numérico)
* **Datas da reserva** (obrigatórias e no formato correto)

## Padrões de Código

Para manter a consistência e a qualidade do código, o projeto utiliza **ESLint**. Você pode verificar e corrigir os problemas de linting com os comandos:

```
yarn lint # Para verificar problemas de linting.
yarn lint:fix # Para corrigir automaticamente os problemas detectados.
```

## Observações Importantes

1. **Conexão com o MongoDB**: Certifique-se de que sua instância do MongoDB esteja em execução e que a URI de conexão configurada no `<span>.env</span>` seja válida.
2. **CORS**: O middleware **cors** está configurado para permitir requisições de origens diferentes. Caso precise de configurações específicas, ajuste no arquivo de configuração.

# NLW_04
**Obs:** Como anotei bastante, por serem conteúdos novos para mim, acabei não tendo tempo de completar o evento. Por isso, a API, aqui, não está compelta.

# O QUE É UMA API
Uma API não é uma linguagem, nem uma biblioteca que se instala na máquina ou no aplicativo.
API é um conjunto de , de regras, que quando definidas na aplicação, então podemos dizer que nossa aplicação é uma API.
* Iremos utilizar a API REST.
* [Imagem "mapa-mental_01"]
    * Em uma API precisamos ter um cliente (HTML, CSS...) e um servidor (backend, acesso a BD, autenticação, envio de e-mail, regras de negócios...).
    * Para fazer uma busca, por exemplo, em procurar um mouse em uma e-commerce, é necessário que o browser (cliente) faça uma requisição disso ao servidor.
    * O que é uma requisição? O que são /produtos/mouse no mapa mental?
        * Em uma API, toda requisição ao nosso servidor, ela precisa de uma identificação, que chamamos de rotas.
            * Toda rota precisa ter um recurso.
            * No caso o servidor vai entrar nos produtos, para então pesquisar o tipo mouse, lá dentro.
            * Então ele retorna o que achou ao cliente
                * Para retornar, podemos fazer isso de várias formas, xml, yml, json e outros.
                * Nós iremos usar json que é o formato mais comum de retornos em APIs.
Por que usar uma API?
* Vamos supor que temos uma aplicação apenas na web, mas iremos implementar um sistema mobile.
    * Com uma API, eu não preciso fazer todo o sistema do servidor, novamente.
    * Apenas faço com que a interface do mobile (novo cliente) acesse o servidor já desenvolvido, no mesmo esquema de requisição.

# O QUE É O node.js
[Imagem "nodeJS-explicacao" exemplifica o qual é o papel do node]
O node.js é uma plataforma open source que nos permite utilizar JS do lado do servidor.
O node.js veio para resolver a parte de io assincrona, pois antes as tecnologias da época não tinham prrocessos IO (input, output - sistema de entrada e saída) bons quanto o do node.
    * Antes, semore que fazia uma requisição, a mesma ficava parada e uma nova requisição só poderia ser feita, ter sua função executada, se a requisição anterior terminasse a sua execução.
    * O node então veio para resolver isso.
O JavaScript foi a linguagem escolhida com uma linguagem para estar dentro do node justamente por trabalhar de forma assincrona, o que ajuda no processo.
Dentro do node temos o EventLoop.
    * O papel do EventLoop é ficar "ouvindo" as requisições.
    * Ele pega uma requisisção, assim que ela chega, envia para uma thread disponível, para já poder processar e retornar a resposta.
    * Assim, não há mais o problema de uma requisição ter que ficar esperando outra. Ou seja, o sistema é mais rápido, sendo possível fazer mais de uma requisição em um momento.

# O QUE É O TypeScript
O TS é um superset do JS. Isso significa que é um JS com features a mais, como ter tipagem.
Vantagens
[Exemplo no "apresentandoTS.ts"]
    * Trabalhamos com tipos de variáveis, isso facilita para saber melhor como um sistema funciona, evitando erros.
    * Podemos criar interfaces para o código, como para parâmetros de uma função.
        * Para usar a interface então, é só chamar e utiliza-lo em forma de objeto, com o nome que quiser.
            * Tratando em forma de objeto, até mesmo na hora de chamar uma a função, passando os parametros como objeto fica mais acil identificar qual dado é sobre o que no objeto.
        * Podemos também usar forma de desestruturação. Não nomeia como onjeto, mas cita os tipos de dados que serão usados.
            * A vantagem é a mesma de objeto ao chamar a função. E mais uma vantagem é não ter que usar muitos "nomeObjeto.atributo", ao usar os parametros da função.
```ts
// EXEMPLO
interface NomeIdade {
    nome: string,
    idade: int
}

//Em forma de objeto:
function funcaoNomeIdade(infs: NomeIdade){
    console.log(infs.nome, infs.idade);
}

//Em forma de desestruturação:
function funcaoNomeIdade({nome, idade}: NomeIdade){
    console.log(nome, idade);
}
```
TS é JS de forma melhorada.

# PASTAS QUE ESTAMOS UTILIZANDO NA API
* **node_module** = ficam todos os módulos do node, tudo o que for instalado no projeto
    * São muitas e muitas pastas, então não da para descrever cada uma.
    * Camadas mais abstratas do projeto, as mais internas.

* **src** = todas as pastas que estamos criando em nosso projeto, para desenvolver a aplicação. Toda a camada mais externa, menos abstrata.
    * **controllers** = controlador, onde ficará cada função do nosso server, execuções e regras de negócio. Então o `server.ts` ficarão responsáveis apenas por chamar o que for necessário, dentro do controlador.
    * **database** = todos os arquivos relacionados ao banco de dados.
    * **models** = todos as classes modelos com o mapeamento para banco de dados (as classes virarão entidades/tabelas, atributos virarão atributos/colunas, e assim por diante).
    * **repositories** = todos os nossos repositório, utilizados para acesso ao banco de dados, estão guardados nessa pasta.
        *Todos os repositórios são classes.
    * **__tests__** = todos os arquivos de testes

# COMANDOS TERMINAL
`yarn init -y`
* Cria um json com alguma informações.
* Como ele sabe informações?
    * Este comando, com o -y, como que diz: "yarn, eu quero que você crie utilizando as informações que você tem. Não precisa me perguntar."

* Instalando dependências
`yarn add express`
* Instala o express, os arquivos de dependências do express.
Express é um micro-framwork para trabalhar com node.
    * Ele possibilita criar rotas, o servidor e muitas coisa úteis com node.js
    * Express é o framworkmais utilizado pela comunidade de node.js
    * Ele atende super bem o que precisamos com node.js

`yarn add '@types/express' -D`
* Instala as biblitoecas externas do Express como dependências de desenvolvimento.

yarn add typescript -D
* Instala o typescrpit para poder utilizar ts com node. Como node é para JS, precisamos de um tradutor, por assim dizer.
* Após instalar o typescript rodamos o próximo comando para criar um arquivo "tsconfig.js", onde iremos configurar algumas coisa no typescript.
`yarn tsc --init`
* Após isto, rodamos o comando na linha abaixo, que irá, no tempo de compilação, converter TS para JS
`yarn add ts-node-dev -D`

`yarn add typeorm reflect-metadata`
* Instala o TypeORM e a biblioteca reflect-metadata, utilizada no TypeORM

`yarn add sqlite3`
* Instala o driver de banco de dados SQLite

`yarn add uuid`
* Instala as dependências de UUID, para que em nosso código já façamos o autoincremento e geração dos IDs das Entidade do DB
    *Não deixaremos isto para o BD fazer, pois alguns não são bons ou fáceis para geração de UUID

`yarn add '@types/uuid' -D`
* Instalando os tipos do UUID
    * Uma biblioteca que ficará responsável de criar os tipos de IDs.

## Comando para rodar as partes da aplicação
Esses comandos são baseados nos atributos de uma classe `script`, que precisamos criar no `package.json`.
O nome dos atributos pode-se escolher à vontade, pois quando você rodar o atributo, ele rodará o arquivo que você definiu para esse atributo (o caminho de arquivo na frente dos ":", na frente do atributo, ex: `nomeDoAtributo: caminhoDoArquivo`).

`yarn dev`
* Em nosso caso, rodando o nosso server (`server.ts`).
    *Necessário para rodar o app.

`yarn typeorm`
* Em nosso caso, rodando o arquivo `cli.js`, dentro da pasta typeorm, dentro da pasta node_module.
    * Necessário para poder criar migrations.

## Comandos Migrations

`yarn typeorm migration:create -n NomeParaAMigration`
* Cria uma migration

`yarn typeorm migration:run`
* Roda todas as migrations

`yarn typeorm migration:revert`
* Da um rowback, desfaz a última migration rodada

## Comandos para a criação de nossos testes automatizado

`yarn add jest '@types/jest' -D`
* Instalando dependencias jest, que vamos utilizar para fazer nossos testes.

`yarn jest --init`
* Cria arquivo de configuração do jest
    * Perguntas para a criação do arquivo:
        * Se queremos definir um script de "teste" no package.json
        R: Sim
        * Utilizar TypeScript
        R: Sim
        * Qual ambiente queremos utilizar
        R: node
        * Se queremos usar report coverage do Jest.
            * Mostra partes que ainda não foram cobridas com o teste, o que podemos melhorar no projeto e muitas outras ajuda.
        R: Não. Não irmeos utilizar, por enquanto.
        * Qual provedor do coverage iremos utilizar.
        R: v8
        * Limpar automaticamente mock calls e instancias entre todos os teste.
        R: Sim

`yarn add ts-jest -D`
* Biblioteca para os testes
    * Preset para trabalhar com TS dentro dos testes.

`yarn test`
* Rodar o teste escrito em um arquivo .test.ts
    * Se retornar verde é que passou

`yarn add supertest '@type/supertest' -D`
* Instalando a ferramente supertest, que auxilia o jest em testes de integração

# AJUDAS PELO POWERSHELL
`Set-ExecutionPolicy Unrestricted`
* Se o sistema não puder executar algum comando, como o yarn, após ter instalado tudo corretamento para ele, tem que habilitar alguns comando de scripts, pelo powershell como administrador.
    * Após utilizar este comando, faça o necessário e restrinja novamente os comandos bloqueados pela Diretiva de Execução, usando o comando da linha abaixo:
    `Set-ExecutionPolicy Restricted`

# FUNÇÕES EXPRESS
```ts
app.listen(porta);
```
* Definir a porta onde o servidor irá rodar. Importante não ser uma porta já sendo utilizada.
* Exemplo:
```ts
app.listen(3333, () => console.log("Server is running!"));
```
* abre o servidor na por 3333 e imprime a mensagem de que o servidor está rodando.

A função GET, de busca, no HTTP é da seguinte forma (um exemplo):
```ts
app.get("/users", (request, response) => {
    return response.send("Hello World - NLW04!");
})
```
* "/users" é a rota do servidor que será acessado, então se digitarmos a URL (lembrando que estamos com host local) http://localhost:3333/users, acessará o conteúdo da rota
    * No caso, o conteúdo era uma simples mensagem não formatada, escrita: "Hello World - NLW04!"
* request e response é o que vimos sobre o processo IO, ele recebe um request (requisição) e retorna um response (resposta da busca)
* E temos depois um arrow function com o que será feito na rota.
# BIBLIOTECAS EXTERNAS
Na maioria das vezes, as bibliotecas que estamos utilizando terão suas tipagens em uma biblioteca externa.
* O que isso quer dizer?
    * Embora estejamos trabalhando com o express, toda tipagem dele está em uma outra biblioteca.
        * Assim precisamos baixar essa outra biblioteca para termos acesso às funções dele

# scripts de package.json
```json
"scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts", /* Define como rodará o projeto, em nível de produção */
    "typeorm": "ts-node-dev node_modules/typeorm/cli.js", /*Define coisas do TypeORM, como definidno o caminho da CLI (Command Line Interface), uma interface de linha de comando, a CLI, em nosso projeto, está sendo criada para que seja possível executar linhas de comando para gerar e executar migrations.*/
    "test": "set NODE_ENV=test jest" /* A variável NODE_ENV vai enviar que está utilizando um ambiente de teste, ao rodar um uarn test, para,então, utilizar o banco de dados de teste e não atrapalhar o de produção*/ //"set" só coloca se o SO for Widnows
},
```
**dev**
* Faz com que a todo tempo, o nosso typescript já seja compilado em JS automaticamente.
* A linha dentro de "scripts" é "nome do atributo": "extensão que instalamos --regrasErestrições local do arquivo"
    * O nome do atributo pode ser qualquer um.
    * Instalamos a extensão ts-node-dev, então colocamos ela lá.
    * Restringimos para não ficar fazendo checkagens de erros e apenas compile, e ignorar módulos node que estajam sendo rodados
        * Isso faz com que rod direto, tudo, automaticamente, sendo convertido em JS automaticamente e compilando.

**typeorm**


# SERVIÇOS DE ROTAS
## server.ts
* Código antigo (não sendo mais utilizado, por causa de divisões para organização dos srviços de rotas, com modos mais aprimorados)
Em...
```ts
app.get("/users", (request, response) => {
    return response.send("Hello World - NLW04!");
})
```
...e outros métodos de rotas não foi necessário definir o tipo para `resquest` e `response`, pois pelo `app`, que utiliza o (está sendo atribuido ao) express, já reconhece o tipo.

Código antigo completo, sem imortações e o método listen para definir onde ser o servidor:
```ts
// http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

// 1 parametro => Rota(Recurso ApI)
// 2 parametro => request e response
app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso!" });
});
```

* Código antigo, vs. 2 (veio depois do antigo, acima, mas não é atual), sem imortações e o método listen para definir onde ser o servidor:
    * Este código passou para o app.ts, que serve para nossos testes. E o servidor funcionará de uma maneira diferente.

```ts
app.use(express.json()); //Habilitando no express, que nossa aplicação aceite requests em json
app.use(router); //Usando o router do routes.ts
```

* Importações (server.ts)
```ts
import { app } from "./app";
```

 * Importações (app.ts)
```ts
import "reflect-metadata"; //Biblioteca reflect-metadata para utilizar o TypeORM
import express, { request, response } from 'express'; //faznedo uma importação com nome de express, importando request e response do framework express, para fazermos as requisições e respostas das rotas
import "./database"; //index.ts da pasta database
import { router } from "./routes"; //constante router, que utiliza Router (métodos de rotas) do express, de routes.ts
```

* Código atual completo, sem imortações e o método listen para definir onde ser o servidor:

* Outros

```ts
const app = express(); //Definindo uma constante para utilizar métodos e recursos do express
app.listen(3333, () => console.log("Server is running!")); //Definindo a porta em que o servidor será aberto (no loclahost, em nosso caso) e uma mensagem para mostrar que ele está rodando/funcionando.
```

## routes.ts
Arquivo para trabalhar com as rotas.

```ts
import { Router } from 'express'; //Importando os métodos e o que for relacionado a rotas, que está em Router, dentro do express
import { UserController } from './controllers/UserController'; //Importando o nosso controlador de usários UserController.ts

const router = Router(); //Criando uma contante que acessa os métodos e coisas do Router (Como se fosse um objeto do tipo Router), para poder usar, facilmente, os métodos do Router.

const userController = new UserController(); //Criando objeto do tipo UserController, para usar os métodos do nosso controlador de usuários

router.post("/users", userController.create); //Usando o método post de rotas, na rota de usuários, usando o método create de UserController

export { router }; //Permitindo que o que fizermos, utilizando a variável, constante, router, seja acessado por outros arquivos, para utilizá-lo em nosso server.ts
```

# controllers
```ts
import { Request, Response } from 'express'; //Importando Resquest e Responde do express

class UserController {

    async create(request: Request, response: Response) {

    }
}

export { UserController }
```
Como toda rota, o nosso Controller também precisa de uma requisição e uma resposta de retorno.
    * Foi definido os tipos de `request` e `response`, pois nosso método create não está sendo atribuido ao express, então precisamos importar o Request e o Response do express, para definir esses tipos ao `resquest` e `response`, conforme os tipos que o express aceita para requisição e resposta.



# BANCO DE DADOS

[Diagrama do nosso banco de dados em uma imagem "DiagramaBD"]

Há três formas de inserir um banco de dados na aplicação. Mas o resultado final é sempre a mesma coisa.
* 1 forma: utilizando um driver do banco de dados (MySQL, MariaDB, etc);
    * Se optar por essa forma, além de ter que instalar, será necessário ver a documentação do driver.
    * Parte chata: Se houver mudança de driver, terá de aprender o novo driver e recriar toda a parte de acesso ao banco de dados da aplicação.
* 2 forma: Knex.js
    * Vantagem: Possui `query builders`
        *
    * Inatalação fácil, passando algumas informações sobre o banco de dados para ele.
    * Configuração para consultas.
    * Por mais que ele facilite em criação de queries, algumas consultas teremos que criar manualmente.
        * Manualmente, mas utilizando comandos do Knex.js, diferente do driver nativo.
* 3 forma: ORMs
    *ORM é uma forma de mapeamento entre Objetos, para criar as entidades no banco de dados, por meio das classes.
        *Ex: HIBERNATE é um ORM em Java.
    * O ORM TypeORM possui query builders, para facilitar na criação de queries.
        * Lógico que algumas vezes, consultas mais avançadas, qualquer ORM não será tão bom para o que precisamos. Então, em alguns momentos, precisaremos fazer nossas queries manualmente.
        * Na maioria das vezes, o ORM irá atender ao que precisamos.

Em nosso projeto iremos utilizar a forma de ORMs, com o `TypeORM`, pois ele trabalha bem com TypeScript que estamos utilizando. E, por ele ser mais genérico, se precisarmos mudar o driver, que estamos utilizando, só precisamos ir na configuração do TypeORM e mudar o driver, e ele próprio se adaptara sozinho, sem precisarmos fazer mudanças nas queries e métodos que estivermos utilizando.
* Precisamos instalar o typeORM, biblioteca reflect-metadata e o driver que iremos utilizar (SQLite, no caso dessa NLW).
    * `npm install typeorm --save` - no terminal
    * `npm install reflect-metadata --save` - no terminal
    * `import "reflect-metadata";` - no arquivo.ts
    * `npm install sqlite3 --save` - no terminal

Criamos uma pasta "database" para colocar um `arquivo.sqlite`, para que o ORM possa colocar as informações que estamos inserindo, onde estamos inserindo, enfim, tudo o que for sobre o nosso banco de daods, ficará dentro da pasta "database"

Dentro, apenas, da pasta API, colocamos um `ormconfig.json` para inserir as configurações para o Type ORM
```json
{
    "type": "sqlite", /*driver do BD*/
    "database": "./src/database/database.sqlite", /*local do arquivo com a extensão do driver*/
    "migrations": ["./src/database/migrations/**.ts"], /*defindo arquivos de migrations, ou seja, todo arquivo do tipo migration que estiver com .ts, ele vai rodar*/
    "entities": ["./src/models/**.ts"], /*definindo onde estão os modelos das entidades*/
    "logging": true, /*após fazer um cadastro, gera um log, no terminal node, de todo o SQL que está sendo gerado*/
    "cli": {
        "migrationsDir": "./src/database/migrations" /*local onde estamos guardando nossas migrations*/
    }
}
```

Dentro da pasta "database", em um arquivo `index.ts`
```ts
import { createConnection } from "typeorm";
```
* Importa a função createConection() do typeORM
```ts
createconnection();
```
* Cria a conexão com o banco de dados.
    * É a conexão mais básica, que foi criada, mas para nosso projeto, ela já é o suficiente.
```ts
```

No arquivo do servidor `server.ts`
```ts
import "reflect-metadata";
```
* Importando a biblioteca refeclt-metadata
    * Importante ela ser a primeira das importações, com relação à ordem em que as linha de código estão organizadas (essa importação vem na primeira linha do código).

```ts
import "./database";
```
* Importando nosso banco de dados.
    * Não preciso indicar qual arquivo, pois colocamos `index.ts`. E por padrão, a importação, quando não definido um arquivo e há um index na pasta definida na importação, ela já busca o index.

## Migration
Migration é um histórico de tudo o que estamos fazendo em nosso banco de dados.
* Exemplo: Você criou a migration 1, 2 e 3, e está criando a 4. Então alguém da sua equipe pega o código de uma das migrations ou faz uma inserção, atualização ou outra ação em uma migration, isso será refletido em todas as migrations, assim você também verá o que ele fez.
* Isso é bom para todos da equipe estarem trabalhando com a mesma base de dados.
* Pode ser que fique meio difícil de entender na teoria, mas na prática fica mais fácil.

## Entendendo como iremos receber os dados para guardar no banco de dados
Quando estamos trabalhando com aplicação REST e já entendemos quais são os métodos para trabalhar (os métodos de rotas - GET, POST, etc), sabemos que o POST é utilizado para salvar, mas para receber os dados é através do **body** (no Insomnia, que testa rotas, tem o body, de exemplo), ou seja, do corpo da requisição.
* Trabalharemos isso dentro do métodos `async create()`, dentro de um controlador (ex: nosso `UserController.ts`).
    * Para pegarmos os dados utilizaremos métodos, atributos, enfim, tudo de request (requisição), sempre.
        * `const body = request.body;` - dentro de um controlador.ts
        Pega o que tem dentro do corpo da requisição e salva na variável `body`.

## Repositórios (dentro dos controladores)
Servem para acessarmos alguns métodos do TypeORM.
Um repositório, aqui, é como se fosse um entityManager. Ele permite com que façamos algumas ações dentro do banco de dados (manipulação de dados, criação de tabelas, edição de atributos, etc). Então, toda comunicação com o BD, quem irá fazer isso serão os repositórios.
Cada entidade terá um repositório específico.

Salvando dados no banco de dados.
Antes de salvar um dado no banco de dados...
```ts
await repositorio.save(objetoOndeEstaoSalvosOsDados);
```
...é necessário criar um objeto do tipo da entidade do banco de dados...
```ts
const nomeParaOObjeto = repositorio.create({
    //atributos
})
```

### Refatoração do Controller na aula 3
Criar repositório para usuário.
* Por que isolar o repositório?
    * 1 motivo: Hoje a responsabilidade por fazer acesso ao banco de dados, por mais que estejamos utilizando o getRepository, a responsabilidade está sendo do Controller. Mas o correto é que o repositório tenha essa responsabilidade.
        * Não é bom que o controller tenha acesso ao que não é da responsabilidade dele (no, não é da responsabilidade dele o acesso ao banco de dados, pois isso quem cuida é o repositório).
        * Sobre o método getRepository TypeORM: reconhece e pega a entidade e a qual repositório ela pertence, fazendo o mapeamento para uma tabela.
    * 2 motivo: Quando temos um repositório isolado, nós conseguimos customizar nossas próprias funções.
        *Apesar que o TypeORM já dá algumas, com o repositório conseguimos criar as nossas próprias, que mais se adequam ao nosso projeto.

### Responsabilidades da classes de repositórios
* Ter acesso a todos os métodos que o repositório do TypeORM oferece.
    * Para isso, a classe vai ter como herança (extends de Programação Orientada a Objetos, que estamos utilizando) a classe Repository do TypeORM.
        * Herança permite que nossa classe tenha todos os métodos da classe de que está pegando a herança.
        * Em nosso caso, como a classe Repository é de acesso a banco de dados, após colocar o nome dela no extends, colocamos o nome da classe modelo da entidade entre sinal de maior e menor.

## Regras de negócios

* Não pode cadastrar duas contas com o mesmo e-mail.
```ts
const userAlreadyExists = await usersRepository.findOne({
    email
});

if(userAlreadyExists) { 
    return response.status(400).json({
        error: "User already exists.",
    });
}
```
-Código em UserController.ts

# Testes automatizados
## Tipos
* Testes unitários
    * Testes de cada função isolada.
    * São feitos no TDD, que é o desenvolvimento orientado a testes.
        * Criamos repositórios fakes, muitas vezes sem acesso a banco de dados, e utilizando dados fakes.
    * Depois do desenvolvimento TDD, quando tudo vai dando certo, vai passando para o desenvolvimento de produção.
* Teste de integração
    * Teste da função da nossa aplicação, por completa.
        *Ex, em nossa aplicação:
        Testamos as rotas, para ver se está tudo ok:
            * Nossa request
            -> routes -> controller -> repository
            * Nossa response
            <- routes <- controller <- repository
    * **Este teste é o que iremos aprender na NLW.**
* Teste de Ponta-a-Ponta (E2E)
    * Teste de toda ação que o usuário possa fazer.
        * É mais comum em teste de front-end.

No back-end focamos mais nos testes unitários e de integração.

* Na NLW iremos criar nossos teste. Só que ao rodar um comando que fará todos os testes, automaticamente, para nós.

# Variáveis de ambiente
Servem para verificar se um comando está sendo rodado em ambiente de produção ou ambiente de teste.

Dentro de "Meu Computador", no windows, temos as variáveis de ambiente, como PATH. Este é um exemplo.

Nós iremos utilizar a NODE_ENV.

# Outras informações
É possível usar a mesma rota em dois métodos desde que sejam métodos diferentes.
    * Eu posso usar a rota "/" em um método get() e em um método post().
    * Mas eu não posso usar a rota "/" em dois métodos get().

Rota "/" é a rota base. Por exemplo, na porta 3333 do localhost, para abrir a rota "/" é a seguinte URL: http://localhost:3333

O bom de trabalhar com um ORM é que não precisamos ter tantos conhecimentos em comandos de algum driver de DB puro. O próprio ORM já dá essa facilidade para nós.

**Métodos principais para rotas HTTP com node.js, no framework express**
* GET => Busca
* POST => Salvar
* PUT => Alterar
* DELETE => Deletar
* PATCH => Alteração específica

Nos controllers temos as sintaxes `async`. São elas que criam os métodos de um controlador, para passar às rotas depois.
* Cada `asyn` é um método;
```ts
import { Request, Response } from "express";
//Sintaxe de async
async nomeDoMetodo (request: Resquest, response: Response){
    //Bloco do que o método fará
}
```

Sobre migrations, repositórios e controladores.
    * Para cada entidade, deve ser criada primeiro uma migration, depois repositório, que utiliza a migration, e po último um controlador, que utiliza o repositório.

# RECAPITULAÇÕES
## Dia 1

* Conceitos básicos do node.js
    * O que é
    * Como é
    * Onde pode ser usado
* Demos início ao nosso projeto
    *Criamos as nossas duas primeiras rotas (GET e POST)
* Aprendemos alguns métodos que podemos utilizar em nossa aplicação
*Vimos alguns recursos para utilizar o json, o send(), vimos o que é, como é e a melhor forma de criar uma API.

## Dia 2

* Criamos o primeiro controller da nossa API.
* Fizemos nossa conexão ao banco de dados.
* Cadastramos nossos primeiros usuário.
* Aprendemos:
    * Alguns métodos do TypeORM;
    * Alguns tipos de acesso ao banco de dados;
    * O que são entidades e uma representação de banco de dados.
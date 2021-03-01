import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    /*Pegamos as imformações do ORMConfig
        Quando for teste, algumas informações serão alteradas para o banco de dados de teste, mas nossa aplicação tem que saber que as configurações certas/principais/padrões são essas.
        Por isso estamos criando essa constante, para poder controlar para qual banco de dados vai as informações, se é para o de produção ou o de teste
    */
    const defaultOptions = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOptions, {
            database: 
                process.env.NODE_ENV === 'test' 
                ? "./src/database/database.test.sqlite" 
                : defaultOptions.database,
                // Linhas acima: Usando um operador ternário para verificar se NODE_ENV recebendo o mesmo ambiente que 'teste' de scripts, dentro do package.json. E dando as instruções para se for (?) e  se não for (:).
        })
    );
};
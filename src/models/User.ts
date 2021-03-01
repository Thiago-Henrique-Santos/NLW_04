import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"; //Importando o necessário do TypeORM para as nossas anotações
import { v4 as uuid } from 'uuid'; //importando a biblioteca da versão 4 do uuid

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string; //o id será um UUID, mas no arquivo.ts se usa string
    //readonly, como o nome diz, restringe a apenas leitura do id. Não deixa que o UserController altere o id.

    @Column() //Se o nome de sua colunar for diferente do nome de seu atributo, você pode inserir @Column("nomeDaColuna"), mas se forem iguais, como no nosso caso, não precisa passar
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            /*
                Na condição:
                a negação (!) com o atributo na frente, indica que é para a condição ver se não existe ainda o atributo. (Em nosso caso, quando estiver CRIANDO uma entidade, 
                não haverá ID ainda).
            */
            this.id = uuid();
        }
    }
}

export { User }; //Exportando a classe, para outros arquivos, como o server,ts, poderem acessar fazer os cadastros e alterações nos dados do DB, utilizando a classe com mapeamento
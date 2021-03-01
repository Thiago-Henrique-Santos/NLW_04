import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

    async create(request: Request, response: Response) {
        const {name, email} = request.body;
        
        //Crinado uma constante para criar e manipular a tabela de usuários no BD.
        const usersRepository = getCustomRepository(UsersRepository); //Parâmetro é o nome da classe onde estamos criando o nosso repositório personalizado.
        //Só com essa mudança de getRepository() para getCustomRepository() vai fazer com que nosso Controller e a aplicação continuem funcionando.
        /*
            Antes estavamos apenas utilizando getRepository(), que acessava o mapeamento pela classe modelo, simples.
            //Parâmetro de getRepository() é o nome da classe modelo da tabela (entidade) do DB
        */

        /*O código embaixo deste comentário em SQL, seria:
            SELECT * FROM USERS WHERE EMAIL = "EMAIL"
        */
        const userAlreadyExists = await usersRepository.findOne({
            email
        }); //Busca um e-mail

        //Se existir um usuário (pelo e-mail buscado)
        if(userAlreadyExists) {
            //retornar um erro, com a mensagem "User already exists."
            return response.status(400).json({
                error: "User already exists.",
            });//em status(), podemos definir o status que queremos que retorne.
        }

        //Criando um objeto do tipo User
        const user = usersRepository.create({
            name, 
            email,
            //id e created_at serão gerados automaticamente
        });

        //Salvando os dados do Objeto no banco de dados
        await usersRepository.save(user); //Parâmetro de save() é o nome do objeto do tipo da Entidade

        return response.status(201).json(user);
    }
}

export { UserController };

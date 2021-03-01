import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)//Definindo que nossa classe é um repositório
class UsersRepository extends Repository<User> {}

export { UsersRepository }; //O export dentro do parenteses é usado, pois o intelisense do VSCode da uma ajuda, quando usamos dessa forma. E isso deixa um export mais limpo.
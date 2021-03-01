import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";


class SurveysController {

    async create(request: Request, response: Response) {
        const {title, description} = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        });

        await surveysRepository.save(survey);

        //Status 201 é o padrão definido para quando se cria alguma coisa
        return response.status(201).json(survey);

    }

    async show(request: Request, response: Response){

        const surveysRepository = getCustomRepository(SurveysRepository);
        
        //Find é o método para listar todos os registros do banco de dados
        const all = await surveysRepository.find();

        return response.json(all); //Retornando a lista
    }
}

export { SurveysController };
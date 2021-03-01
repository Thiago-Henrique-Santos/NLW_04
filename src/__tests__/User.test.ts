import { response } from 'express';
import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations(); //Rodando as migrations, pois seja para teste (caso desse arquivo) ou para produção, necessitamos de rodar as migrations
    }) //O que fazer antes de tudo

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });
    });// 1 parâmetro = descrição com máximo de detalhes possível, 2 parâmetro = função do teste

    expect(response.status).toBe(201);
}); // 1 parâmetro = Titulo do teste, 2 parâmetro = Função para o teste
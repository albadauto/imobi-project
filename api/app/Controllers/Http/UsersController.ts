import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async createNewUser({request, response}){
        try{
            const body = request.body();
            if (body){
                await User.create(body);
                return response.status(200).json({
                    created: true,
                    message: "Usuário criado com sucesso!"
                })
            }
        }catch(err){
            console.log(err)
        }
    }
}

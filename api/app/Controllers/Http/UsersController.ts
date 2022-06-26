import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async createNewUser({request, response}){
        try{
            return response.json({
                Teste:true
            })
        }catch(err){
            console.log(err)
        }
    }
}

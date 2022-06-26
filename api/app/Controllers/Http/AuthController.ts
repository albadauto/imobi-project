import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async verifyPassword({request,response,auth}: HttpContextContract){
        try{
            const { email, password } = request.body();
            const token = await auth.attempt(email, password);
            if(token){
                return response.status(200).json({
                    auth: true, 
                    token
                })
            }
        }catch(err){
            console.log(err);
        }
    }
}

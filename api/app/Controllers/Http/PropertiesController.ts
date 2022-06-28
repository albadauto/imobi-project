import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from "@ioc:Adonis/Core/Application";
import Property from 'App/Models/Property';
export default class PropertiesController {
    public async store({request, response}: HttpContextContract){
        try{
            const image = request.file("home_image");
            const body = request.body();
            if (body && image){
                await Property.create(body);
                await image.move(Application.tmpPath("uploads")); // Application tmpPath -> Pasta tmp, parametro é a pasta uploads
                return response.status(200).json({
                    created: true,
                    message: "Imóvel inserido com sucesso!"
                })
            }
        }catch(err){
            console.log(err);
        }
    }
}

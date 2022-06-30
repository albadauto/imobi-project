import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from "@ioc:Adonis/Core/Application";
import Property from 'App/Models/Property';
import uuid from "react-uuid";
export default class PropertiesController {
    public async store({ request, response }: HttpContextContract) {
        try {
            const image = request.file("property_image");
            image!.fileName = `${uuid}.${image?.extname}`
            const body = request.body();
            if (image) {
                await image.move(Application.tmpPath("uploads")); // Application tmpPath -> Pasta tmp, parametro é a pasta uploads
                await Property.create({ ...body, property_image: image?.fileName });
                return response.status(200).json({
                    created: true,
                    message: "Imóvel inserido com sucesso!"
                })
            } else {
                console.log("Não ha imagem")
            }

        } catch (err) {
            console.log(err);
        }
    }
}

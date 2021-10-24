import { MongoClient } from "mongodb";

// /api/new-city
// POST /api/new-city

const handler = async(req, res) => {
   if (req.method === 'POST') {
    const data = req.body;

    const {title, image, country, description} = data;

   await MongoClient.connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
   }
};

export default handler;
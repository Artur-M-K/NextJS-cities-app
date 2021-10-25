import { MongoClient } from "mongodb";

// /api/new-city
// POST /api/new-city

const handler = async(req, res) => {
   if (req.method === 'POST') {
    const data = req.body;

    const {title, image, country, description} = data;

   const client = await MongoClient.connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
   const db = client.db();

   const citiesCollection = db.collection('cities');

   const result = await citiesCollection.insertOne(data);

   console.log(result);

   client.close();

   res.status(201).json({message: 'city added'});
   }
};

export default handler;
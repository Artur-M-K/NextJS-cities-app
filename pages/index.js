import Head from 'next/head';
import { MongoClient } from 'mongodb';
import CityList from '../components/cities/CityList';


const HomePage = (props) => {

   return  (
    <>
       <Head>
           <title>Capitals around the World</title>
           <meta name="description" content="Capitals around the World. Browse a huge list of capitals" />
       </Head>
        <CityList cities={props.cities} />
    </>
   )
}


export const getStaticProps =  async() => {
    //fetch data from an api or database
    const client = await MongoClient.connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
   const db = client.db();

   const citiesCollection = db.collection('cities');

   const cities = await citiesCollection.find().toArray();
   client.close(); 

    return {
        props: {
            cities: cities.map(city => ({
                title: city.title,
                country: city.country,
                image: city.image,
                id: city._id.toString()
            }))
        },
        revalidate: 1
    };
}

export default HomePage;
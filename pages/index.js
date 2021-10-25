import Head from 'next/head';
import { MongoClient } from 'mongodb';
import CityList from '../components/cities/CityList';

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'Warsaw',
//         image: 'https://cdn.pixabay.com/photo/2015/11/01/19/45/warsaw-1017468_1280.jpg',
//         country: 'Poland',
//         description: 'Warsaw, officially the Capital City of Warsaw, is the capital and largest city of Poland. The metropolis stands on the River Vistula in east-central Poland and its population is officially estimated at 1.8 million residents within a greater metropolitan area of 3.1 million residents, which makes Warsaw the 7th most-populous capital city in the European Union.'
//     },
//     {
//         id: 'm2',
//         title: 'Dublin',
//         image: 'https://cdn.pixabay.com/photo/2017/05/15/14/33/dublin-2315013_1280.jpg',
//         country: 'Ireland',
//         description: 'Dublin is the capital of Ireland and is the largest city in the country. The city center is small but lively and full of characteristic pubs and restaurants, shopping districts, theaters, parks, government buildings, and museums. '
//     },
//     {
//         id: 'm3',
//         title: 'Berlin',
//         image: 'https://cdn.pixabay.com/photo/2019/02/16/23/47/berlin-4001319_1280.jpg',
//         country: 'Germany',
//         description: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed. In fact, the city is best known for its striking contrasts. Historical buildings stand alongside modern architecture as the past and present intermingle.'
//     },
//     {
//         id: 'm4',
//         title: 'Paris',
//         image: 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg',
//         country: 'France',
//         description: 'Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro).'
//     }

// ]

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

// export const getServerSideProps = async(context) => {

//     const req = context.req;
//     const res = context.res;

//     //fetch data from an api or database
//     return {
//         props: {
//             cities: DUMMY_DATA
//         }
//     };
// }

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
        revalidate: 10
    };
}

export default HomePage;
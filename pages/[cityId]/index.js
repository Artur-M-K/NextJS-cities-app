import React from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import CityDetail from '../../components/cities/CityDetail';

const CityDetails = (props) => {
    return (
        <>
        <Head>
           <title>{props.cityData.title}</title>
           <meta name="description" content={props.cityData.description} />
       </Head>
        <CityDetail
            image={props.cityData.image}
            title={props.cityData.title}
            country={props.cityData.country}
            description={props.cityData.description}
        />
        </>
    )
}

export const getStaticPaths = async() => {

    const client = await MongoClient.connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
   const db = client.db();

   const citiesCollection = db.collection('cities');

   const cities = await citiesCollection.find({}, {_id: 1}).toArray();

   client.close();

    return {
        fallback: false,
        paths: cities.map(city => ({params: {cityId: city._id.toString()}})),
    }
}

export const getStaticProps = async(context) => {

    const cityId = context.params.cityId;

    const client = await MongoClient.connect('mongodb+srv://artur:leeloo83@cluster0.mm3bc.mongodb.net/cities?retryWrites=true&w=majority');
   const db = client.db();

   const citiesCollection = db.collection('cities');

   const selectedCity = await citiesCollection.findOne({_id: ObjectId(cityId)});

   client.close();

    return {
        props: {
            cityData: {
                id: selectedCity._id.toString(),
                title: selectedCity.title,
                country: selectedCity.country,
                image: selectedCity.image,
                description: selectedCity.description
            },
        }
    }
}

export default CityDetails;
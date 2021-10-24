import React from 'react';
import CityDetail from '../../components/cities/CityDetail';

const CityDetails = () => {
    return (
        <CityDetail
            image='https://cdn.pixabay.com/photo/2015/11/01/19/45/warsaw-1017468_1280.jpg'
            title='Warsaw'
            country='Poland'
            description='description'
        />
    )
}

export const getStaticPaths = async() => {
    return {
        fallback: false,
        paths: [
            {params: {
                cityId: 'm1'
            }},
            {params: {
                cityId: 'm2'
            }},
            {params: {
                cityId: 'm3'
            }},
            {params: {
                cityId: 'm4'
            }},
        ]
    }
}

export const getStaticProps = async(context) => {

    const cityId = context.params.cityId;

    console.log(cityId)

    return {
        props: {
            cityData: {
                id:cityId,
                image:'https://cdn.pixabay.com/photo/2015/11/01/19/45/warsaw-1017468_1280.jpg',
                title:'Warsaw',
                country:'Poland',
                description:'description',
                
            }
        }
    }
}

export default CityDetails;
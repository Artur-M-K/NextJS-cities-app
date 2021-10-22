import CityList from '../components/cities/CityList';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Warsaw',
        image: 'https://cdn.pixabay.com/photo/2015/11/01/19/45/warsaw-1017468_1280.jpg',
        address: 'Poland',
        description: 'Warsaw, officially the Capital City of Warsaw, is the capital and largest city of Poland. The metropolis stands on the River Vistula in east-central Poland and its population is officially estimated at 1.8 million residents within a greater metropolitan area of 3.1 million residents, which makes Warsaw the 7th most-populous capital city in the European Union.'
    },
    {
        id: 'm2',
        title: 'Dublin',
        image: 'https://cdn.pixabay.com/photo/2017/05/15/14/33/dublin-2315013_1280.jpg',
        address: 'Ireland',
        description: 'Dublin is the capital of Ireland and is the largest city in the country. The city center is small but lively and full of characteristic pubs and restaurants, shopping districts, theaters, parks, government buildings, and museums. '
    },
    {
        id: 'm3',
        title: 'Berlin',
        image: 'https://cdn.pixabay.com/photo/2019/02/16/23/47/berlin-4001319_1280.jpg',
        address: 'Germany',
        description: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed. In fact, the city is best known for its striking contrasts. Historical buildings stand alongside modern architecture as the past and present intermingle.'
    },
    {
        id: 'm4',
        title: 'Paris',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg',
        address: 'France',
        description: 'Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro).'
    }

]

const HomePage = () => {
    return <CityList cities={DUMMY_DATA} />
}

export default HomePage;
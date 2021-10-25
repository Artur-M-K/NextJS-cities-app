import { useRouter } from "next/router";
import Head from "next/head";
import NewCityForm from "../../components/cities/NewCityForm";

const NewCityPage = () => {
    const router = useRouter();
    const addCityHandler =async(enteredCityData) => {
        const response = await fetch('/api/new-city', {
            method: 'POST',
            body: JSON.stringify(enteredCityData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    };

    return (
        <>
        <Head>
           <title>Add a new Capital</title>
           <meta name="description" content="Add a new Capital to the database" />
       </Head>
        <NewCityForm onAddCity={addCityHandler}/>
        </>
    )
}

export default NewCityPage;
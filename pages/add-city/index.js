import { useRouter } from "next/router";
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
        <NewCityForm onAddCity={addCityHandler}/>
    )
}

export default NewCityPage;
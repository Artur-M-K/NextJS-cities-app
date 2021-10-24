import NewCityForm from "../../components/cities/NewCityForm";

const NewCityPage = () => {

    const addCityHandler =(enteredCityData) => {
        console.log(enteredCityData);
    };

    return (
        <NewCityForm onAddCity={addCityHandler}/>
    )
}

export default NewCityPage;
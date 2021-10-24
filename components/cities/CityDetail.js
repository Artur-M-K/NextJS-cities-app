import classes from './CityDetail.module.css';

const CityDetail = (props) => {
    return (
    <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title} </h1>
        <h4>{props.country}</h4>
        <p>{props.description}</p>
    </section>
    )
}

export default CityDetail;
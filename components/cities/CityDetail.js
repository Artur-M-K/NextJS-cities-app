import { useRouter } from 'next/router';
import classes from './CityDetail.module.css';

const CityDetail = (props) => {
    const router = useRouter();
    const onClickHandler = () => {
        
        router.push('/');
    }

    return (
    <section className={classes.detail}>
        
        <div className={classes.name}>
            <h1>{props.title} </h1>
            <h4>{props.country}</h4>
        </div>
        <img src={props.image} alt={props.title} />
        <p>{props.description}</p>
        <div className={classes.actions}>
            <button onClick={onClickHandler}>Back</button>
        </div>
    </section>
    )
}

export default CityDetail;
import {useRouter} from 'next/router';
import Card from '../ui/Card';
import classes from './CityItem.module.css';

function CityItem(props) {

  const router = useRouter();

  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h1>{props.title.toUpperCase()}</h1>
          <hr className={classes.hr}/>
          <h3>{props.country}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default CityItem;

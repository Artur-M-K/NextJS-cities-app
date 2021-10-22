import MeetupItem from './CityItem';
import classes from './CityList.module.css';

function CityList(props) {
  return (
    <ul className={classes.list}>
      {props.cities.map((city) => (
        <MeetupItem
          key={city.id}
          id={city.id}
          image={city.image}
          title={city.title}
          address={city.address}
        />
      ))}
    </ul>
  );
}

export default CityList;

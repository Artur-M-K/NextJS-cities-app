import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Capitols</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Cities</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New City</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

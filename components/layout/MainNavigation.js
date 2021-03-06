import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="logo.jpg" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Cities</Link>
          </li>
          <li>
            <Link href='/add-city'>Add New City</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

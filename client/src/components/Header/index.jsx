import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import thisIsFine from '../../assets/images/thisisfine.jpeg'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-primary mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
<<<<<<< HEAD
          <img src={thisIsFine}></img>
        </div>
        <div>
          <Link className="text-light" to="/">
=======
          <Link className="text-primary" to="/">
>>>>>>> 9bb1fc20159faef2cdd47f99b477db56be9d5bed
            <h1 className="m-0">This Is Fine</h1>
          </Link>
          <p className="m-0">An emergency preparedness guide for when things are not so fine!
                   Click on the emergency you would like to learn more about.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-inf m-2" to="/tornado">
                Tornados
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/hurricain">
                Hurricains
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

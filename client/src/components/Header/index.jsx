import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
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

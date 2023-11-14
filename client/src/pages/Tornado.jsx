import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


const Tornado = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [tornado, { error, data }] = useMutation(LOGIN_USER);


  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-white p-2">Tornadoes</h4>
          <div className="card-body text-dark">Tornadoes can be deadly, so watch out! Follow this link to learn more or check your local weather down below.</div>
        </div>
      </div>
      <div className="col-12 col-lg-10">
        <div className="card disply-flex mb-4">
          <h4 className="card-header bg-dark text-white p-2">What to do in case of a tornado.</h4>
          <div className="flex-box justify-left flex-row text-dark">
            <ol>
              <li>Take shelter in a room with no outward facing walls.</li>
              <li>Have a flashlight and fresh water with you.</li>
              <li>Do not leave that spot until you are absolutly sure the storm is over.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-10">
        <div className="card disply-flex mb-4">
          <h4 className="card-header bg-dark text-white p-2">Check the Weather in Your Area.</h4>
          <div className="flex-box justify-left flex-row text-dark">
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tornado;

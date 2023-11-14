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
      <div className="col-6 col-lg-10">
       <div className="card disply-flex mr-5">
          <h4 className="card-header bg-dark text-white p-2">What to do in case of a tornado.</h4>
          <div className="flex-box justify-left flex-row justify-left mb-4 text-dark">1. Take shelter</div>
        </div>
      </div>
    </main>
  );
};

export default Tornado;

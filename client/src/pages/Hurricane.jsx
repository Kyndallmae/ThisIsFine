import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Weather from '../components/Weather/index';

const Hurricane = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-white p-2">Huricanes</h4>
          <div className="card-body text-dark">Hurricanes occur mostly in states that border the ocean, but have been known to travel farther inland.</div>
        </div>
      </div>
      <div className="col-12 col-lg-10">
        <div className="card disply-flex mb-4">
          <h4 className="card-header bg-dark text-white p-2">What to do in case of a hurricane.</h4>
          <div className="flex-box justify-left flex-row text-dark">
            <ol>
              <li>Take shelter in the lowest room with no outward facing walls or evacute if instructed to do so.</li>
              <li>If you are in a car, trailer, or mobile home, find a tornado shelter.</li>
              <li>Have a flashlight and fresh water with you.</li>
              <li>Protect your head and cover your body with a blanket or matress.</li>
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

export default Hurricane;

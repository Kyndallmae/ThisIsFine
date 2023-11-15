import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3 text-dark"
          style={{ border: '5px dotted #c96000' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Tips and Tricks"
            />
          )}
        </div>
      </div>
{/* 
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3 text-dark"
          style={{ border: '5px dotted #c96000' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Tips and Tricks"
            />
          )}
        </div>
      </div> */}

    </main>
  );
};

export default Home;




import  React from 'react';
import './style.css'; // You can create a separate CSS file for styling



const stylecss = () => {
  return (
<div className="container">
<div className="column">
  {/* Content for the first column */}
  <p>Column 1 Content</p>
</div>
<div className="column">
  {/* Content for the second column */}
  <p>Column 2 Content</p>
</div>
</div>
  );
};




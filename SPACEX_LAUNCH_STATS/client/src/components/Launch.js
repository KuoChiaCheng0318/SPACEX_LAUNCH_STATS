import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      name
      date_utc
      success
      rocket
    }
  }
`;

const Launch = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id: id }, // Use the id variable here
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { flight_number, name, date_utc, success, rocket } = data.launch;
  
  console.log(flight_number, name, date_utc, success, rocket)

  

  return (
    <Fragment>
      <h1 className='display-4 my-3'>
        <span>Mission: {name}</span>
      </h1>
      <h4 className='mb-3'>Launch Details</h4>
      <ul className='list-group'>
        <li className='list-group-item'>
            Flight Number: {flight_number}
        </li>
        <li className='list-group-item'>
            Launch Year: <Moment format="YYYY">{date_utc}</Moment>
        </li>
        <li className='list-group-item'>
            Launch Successful: {' '}
            <span
            className={classNames({
                'text-success': success,
                'text-danger': !success
            })}
            >
            {success ? 'Yes': 'No'}
            </span>
        </li>
      </ul>
      <hr />
      <Link to ='/' className='btn btn-secondary'>Back</Link>
    </Fragment>
  );
};

export default Launch;

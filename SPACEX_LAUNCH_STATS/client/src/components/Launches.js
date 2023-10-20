import React, { Component, Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY=gql`
query LaunchesQuery{
    launches{
        flight_number
        name
        date_utc
        success
        rocket
        id
    }
}`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(data)
    return (
      <Fragment>
        <h1 className='display-4 my-3'>Launches</h1>
        <MissionKey />
        <Fragment>
          {
            data.launches.map(launch => (
              <LaunchItem key={launch.id} launch={launch} />
            ))
          }
        </Fragment>


      </Fragment>
    )
  
}

export default Launches

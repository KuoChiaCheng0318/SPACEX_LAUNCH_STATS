import React from 'react'

export default function LaunchItem({launch: {flight_number, name,date_utc, success }}) {
    // console.log(props.launch)
    return (
        <div className='card card-body mb-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <h4>Mission: {name}</h4>
                    <p>Date: {date_utc}</p>
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-secondary'>Launch Details</button>
                </div>
            </div>
        </div>
    )
}

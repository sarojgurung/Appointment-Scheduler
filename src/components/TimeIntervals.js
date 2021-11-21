import React from 'react';

export default function TimeIntervals(props){
    
    // This functional class is meant to divide all the provided time intervals and display them in order
    // The value is found in value[i] when inside the map function is used
    // Unable to be shown in individual container/layout so far
    // The logic should be in MySchedule so that the value passed can be directly rendered only here
    // Basically should be making this component without any logic
    // THe return value is just showing the available time for a particular coach
    return (
        <div>
            {props.data.map(value => {
                return <div><button class="btn w-100 btn-secondary m-1">{value[0]}</button></div>
            })}
        </div>
    )
}
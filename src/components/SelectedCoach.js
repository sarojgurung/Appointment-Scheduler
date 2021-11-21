import React from 'react';

export default function SelectedCoach(props){
    return (
        <div class="row seven-cols">
            <div className="col">
                <h2 className="text-secondary display-6 mb-5">You have selected <span class="fw-bolder border-bottom">{props.coachName}</span></h2>
            </div>
        </div>
    )
}
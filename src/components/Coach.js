import React from 'react';

export default function Coach(props){
    // Displaying the Name of Individual Coaches to choose from
    return (
        <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3">
            <button className="btn w-100" onClick={()=>props.handleClick(props.name)}>
                <div className="display-7 p-3 d-flex align-items-center justify-content-center coach-container">{props.name}</div>
            </button>
        </div>
    )
}
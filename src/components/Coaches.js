import React, { Component } from 'react';
import MySchedule from "./MySchedule";
import Coach from "./Coach";
import '../css/styles.css';

class Coaches extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            coaches: null,
            totalCoaches: null,
            individualCoachAvailability: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // Waiting for the data to be mounted from the given API
    async componentDidMount(){
        const url = "https://raw.githubusercontent.com/suyogshiftcare/jsontest/main/available.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({coaches: data});
        this.setState({totalCoaches: Array.from(data.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()), loading: false});
    }

    // Function to add all the times for one Coach into an array
    handleClick = (name) => {
        let sameCoachObj = [];
        this.state.coaches.map(coach => {
            if (name === coach.name){
                sameCoachObj.push(coach);
            }
        this.setState({individualCoachAvailability: sameCoachObj});
        })
    }

    render(){
        // console.log(this.state.individualCoachAvailability);
        return (
            <div>
                {this.state.loading 
                ? 
                <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only"></span>
                </div> 
                : 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary bolder display-1 mb-5">Our Coaches</h2>
                        </div>
                    </div>
                    <div className="row g-3">
                        {this.state.totalCoaches.map(coach => {
                            return (
                                <Coach key={coach.name} name={coach.name} handleClick={this.handleClick}/>
                            )
                        })}
                    </div>
                </div>}
                {this.state.individualCoachAvailability ? <MySchedule data={this.state.individualCoachAvailability}/> : <div></div>}
            </div>
            
        )
    }
}

export default Coaches; 
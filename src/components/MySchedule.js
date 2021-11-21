import React from 'react';
import moment from 'moment';
import TimeIntervals from './TimeIntervals';

class MySchedule extends React.Component{
    constructor(props){
        super(props);
        this.getBookingTimesRenderer = this.getBookingTimesRenderer.bind(this);
    }

    // Function to get the Time Range and convert them into 30 Time Frames
    getBookingTimesRenderer(day){
        let timeRange = this.props.data.map(coach => {
            let a = [];
            if (day === coach.day_of_week){
                let available_at = moment(coach.available_at, 'hh:mmA').format('HH:mm');
                let available_until = moment(coach.available_until, 'hh:mmA').format('HH:mm');
                let intervalValue = 30;//hardcoded for 30 mins
                var startDate = new Date("1/1/2015 " + available_at);
                var endDate = new Date("1/1/2015 " + available_until);
                var offset = intervalValue * 1000 * 60;
                do {
                    if (startDate < endDate)
                        a.push(moment(startDate).format('HH:mm'));
                    startDate = new Date(startDate.getTime() + offset);  
                } while(startDate < endDate);
            }
            return a;
        })
        return timeRange;
    }

    render(){
        return(
            <div class="container">
                <div class="row seven-cols">
                    <div class="col-sm-12 col-md-2">
                        <div>Monday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Monday")} />
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <div>Tuesday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Tuesday")} />
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <div>Wednesday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Wednesday")}/>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <div>Thursday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Thursday")}/>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <div>Friday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Friday")}/>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <div>Saturday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Saturday")}/>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <div>Sunday</div>
                        <TimeIntervals data={this.getBookingTimesRenderer("Sunday")}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySchedule
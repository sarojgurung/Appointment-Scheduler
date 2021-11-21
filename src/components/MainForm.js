import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Coaches from './Coaches';

export class MainForm extends Component {
    state = {
        step: 1,
        userName: ''
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1
        });
    };

    // Handle fields change
        handleChange = input => e => {
            this.setState({ [input]: e.target.value });
        };

    render() {
        const { step } = this.state;
        const { userName} = this.state;
        const values = { userName };

        switch (step) {
        case 1:
            return (
            <LoginForm
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
            );
            case 2:
            return (
            <Coaches
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
            );
        default:
            (console.log('This is an Appointment Scheduler.'))
        }
    }
}

export default MainForm;
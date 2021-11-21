import React, { Component } from 'react';

export class LoginForm extends Component {
    continue = e => {
        e.preventDefault();
        if (this.props.values.userName){
            this.props.nextStep();
        }
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <form>
                            <div class="display-6 p-3">Login Details</div>
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter Username" label="username" onChange={handleChange('userName')} defaultValue={values.userName} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" onClick={this.continue} type="button">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="display-3 p-2">Welcome to <span className="fst-italic">Appointment Scheduler</span></h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
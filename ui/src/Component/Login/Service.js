import Register from './Register';
import  LoginPage  from './LoginPage';
import './Login.css';


import React, { Component } from 'react';

class Service extends Component {

    render() {
    
    return <>
            <section id="services">
                <section id="login-services" className="log-reg-services"><h1>Logowanie</h1> <LoginPage />

                    <section id="reg-results"></section>
                </section>


                <section id="register-services" className="log-reg-services"><h1>Rejestracja</h1> <Register /> </section>
            </section>
        </>
    }

}

export default Service;
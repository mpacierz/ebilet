

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

class Register extends Component {

    handleSubmit = event => {
        event.preventDefault();
        this.registerUser(event.target.username.value, event.target.password.value, event.target.name.value, event.target.surname.value, event.target.email.value, event.target.phone.value);
    }

    registerUser(username, password, name, surname, email, phone) {
        fetch('http://localhost:8082/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                username: username,
                password: password,
                name: name,
                surname: surname,
                email: email,
                phone: phone,
            })
        }).then(function (response) {
            if (response.status === 201) {
                console.log("uzytkownik zarejestrowany");
                document.getElementById('reg-results').innerHTML = "Użytkownik zarejestrowany!";
            } else {
                console.log("nie udalo sie");
                document.getElementById('reg-results').innerHTML = "Nie udało się zarejestrować użytkownika!";
            }
        }).catch(function (error) {
            console.log("error");
            document.getElementById('reg-results').innerHTML = "Nie udało się zarejestrować użytkownika!";
        });
    }


    render() {
        return <>
            <section>
                <section>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="username" size="lg">
                            <Form.Label>Nazwa Uzytkownika </Form.Label><br />
                            <Form.Control autoFocus name="username" required />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="password" size="lg">
                            <Form.Label>Hasło </Form.Label><br />
                            <Form.Control type="password" autoFocus name="password" required />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="name" size="lg">
                            <Form.Label>Imie </Form.Label><br />
                            <Form.Control autoFocus name="name" required />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="surname" size="lg">
                            <Form.Label>Nazwisko </Form.Label><br />
                            <Form.Control autoFocus name="surname" required />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="email" size="lg">
                            <Form.Label>Email </Form.Label><br />
                            <Form.Control type="email" autoFocus name="email" />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="phone" size="lg">
                            <Form.Label>Telefon (opcjonalnie)</Form.Label><br />
                            <Form.Control type="tel" autoFocus name="phone" placeholder="601-102-203" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                        </Form.Group>
                        <br />

                        <Button type="submit" className="register-services-button">Utwórz konto</Button>
                    </Form>
                </section>
            </section>
        </>;
    }

}

export default Register;
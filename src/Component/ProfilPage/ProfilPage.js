import { Component, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { saveAs } from 'file-saver';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

import infoIcon from "../../assets/img/icons/info2.png"
import basketIcon from "../../assets/img/icons/basket.png"
import downloadIcon from "../../assets/img/icons/download.png"
import "./ProfilPage.css"



export default function ProfilPage() {

    const [users, setUsers] = useState([]);
    const [...usersunpacked] = [users];

    useEffect(() => {
        fetch(`http://localhost:8082/users/1`)
            .then(response => response.json())
            .then(response => setUsers(response))
    }, []);



    const downloadImage = (e) => {
        saveAs(`http://localhost:8082/downloadFile/order${e.target.value}.pdf`, `order${e.target.value}.pdf`)
    }


    return (
        <>
            {usersunpacked.map(user => (
                <>
                    <section id="profile-page">
                        <section id="profile-page-info">

                            <h1>Witaj {user.name}!</h1>

                            <img src={infoIcon} width="24px" height="24px" />
                            W tej sekcji znajdziesz informacje o aktualnych zamówieniach oraz inforamcje o użytkowniku<br /><br /><br />

                            <h2>Dane kontaktowe</h2><br />
                            <b>Imie:</b> {user.name} <br />
                            <b>Nazwisko:</b> {user.surname}<br />
                            <b>Email:</b>{user.email} <br />
                            <b>Telefon:</b> {user.phone}<br /><br />

                            <h2>
                                Zamówione bilety
                            </h2><br />

                            Akutalne zamówienia i ich status.<br /><br />

                            {
                                user.orders && user.orders.map(orders => {
                                    return (<>
                                        <section id="ticket">
                                            <section id="ticket-left">
                                                <b>ID zamowienia:</b> {orders.id}<br /> 
                                                
                                                <b>Status zamowienia:</b> {orders.status}<br />
                                            </section>

                                            <section id="ticket-right">

                                                {orders.status == "zrealizowano" && <>

                                                    <Button onClick={downloadImage} value={orders.id}>
                                                        Pobierz bilet!
                                                        <img src={downloadIcon} width="25px" height="25px" />
                                                    </Button>

                                                </>}

                                            </section>

                                        </section>
                                    </>)
                                })
                            }

                            <br />
                            <h2>
                                Aktualizacja danych kontaktowych  
                            </h2><br />
                                <button className='object-check-button'>Przejdź do aktualizacji danych kontaktowych</button><br /><br />
                                <button className='object-check-button'>Usuń konto</button><br />
                                
                                

                        </section>
                    </section>
                </>
            ))}
        </>
    )
}
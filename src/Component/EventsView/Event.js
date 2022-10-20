import React, { Component, useState, useEffect } from 'react';
import HeaderMain from '../Header/HeaderMain';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router';
import './EventsView.css';
import './EventDetail.css';

import logoWhite from '../../assets/img/logo/logo-white.png';
import locationWhitePng from '../../assets/img/icons/location-white.png';
import calendarWhitePng from '../../assets/img/icons/calendar-white.png';
import priceWhitePng from '../../assets/img/icons/price-white.png';


function Event(props) {

    const event = props.event;
    const [...eventunnpacked] = event;

    return (
        <>
            {event.length == 0 ? (
                <div id="error-info-page">
                    <div id="error-info">
                        <b>Aktualnie brak dostępnych wydarzeń</b><br />
                    </div>
                </div>
            ) : <>
                {event.map(item => (

                    <>
                        <section className="recommended-class">

                            <div id="main-min-photo" style={{ backgroundImage: `url("http://localhost:8082/downloadFile/${item.id}.jpg")` }} >

                                <div id="main-min-photo-info">
                                    <img src={logoWhite} width="150" height="63" /><br />
                                    <img src={locationWhitePng} /> {item.date}<br />
                                    <img src={calendarWhitePng} /> {item.location}<br />
                                    <img src={priceWhitePng} /> już od {item.price} zł<br />
                                </div>

                            </div>

                            <article id="main-min-description">
                                <section className='event-title'>
                                    <b>{item.title}</b><br />
                                </section>

                                <section className='cat'>
                                    <b>{item.category}/{item.subcategory}</b><br />
                                </section>

                                <section className="desc">
                                    {item.description}
                                </section>

                            </article>

                            <Link to={"/events/subcategory/" + item.subcategory + "/" + item.title} >
                                <button type="button" className="min-buy-button">Sprawdź</button>
                            </Link>

                        </section>
                    </>

                ))
                }


            </>
            }



        </>
    );

}





export default Event;
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ObjectDetail.css';
import { Link } from 'react-router-dom';

import locationIconPng from '../../assets/img/icons/location.png'
import phoneIconPng from '../../assets/img/icons/phone.png'
import emailIconPng from '../../assets/img/icons/email.png'
import locationIcon from "../../assets/img/icons/location.png"
import dateIcon from "../../assets/img/icons/date.png"
import timeIcon from "../../assets/img/icons/time.png"
import microIcon from "../../assets/img/icons/micro.png"


export default function ObjectPage() {

    const [object, setObject] = useState([]);
    const [...objectunnpacked] = [object];
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8082/objects/name/${params.name}`)
            .then(response => response.json())
            .then(response => setObject(response))
    }, []);

    return (
        <>
            {objectunnpacked.map(obj => (
                <>
                    <div id="object-page">
                        <div id="object-page-top-info">
                            <div id="object-page-top-info-photo">
                                <img src={`http://localhost:8082/downloadFile/object${obj.id}.jpg`} width="400px" height="266px" allowfullscreen="" />
                            </div>

                            <div id="object-page-top-info-description">
                                <h1>{obj.name}</h1>
                                <img src={locationIconPng} className="object-info-icons" width="16px" height="16px" />

                                Adres: {obj.preciseLocation}<br /><br />
                                <b>Kontakt:</b><br />

                                <img src={phoneIconPng} className="object-info-icons" width="16px" height="16px" />
                                Telefon: {obj.phone}<br />

                                <img src={emailIconPng} className="object-info-icons" width="16px" height="16px" />
                                Email: {obj.email}<br /><br /><br />

                                <b>Historia: </b><br />
                                {obj.description}
                            </div>
                        </div>

                        <div id="object-page-map">
                            <iframe src={obj.mpob} className='object-detail-map' loading="lazy" />
                        </div>

                        <div id="object-page-events">
                            <h1>Aktualne wydarzenia na obiekcie</h1>
                            {
                                obj.events && obj.events.map(event => {
                                    return (<>

                                        <div className='artist-page-ticket-info'>

                                            <div className='artist-page-ticket-info-photo'>
                                                <img src={`http://localhost:8082/downloadFile/${event.id}.jpg`} width="300px" height="200px" />
                                            </div>


                                            <div className='artist-page-ticket-info-description'>
                                                <h1>
                                                    {event.title}
                                                </h1>

                                                <img src={microIcon} width="16px" height="16px" /> <b>Kategoria:</b> {event.category}/{event.subcategory}<br />
                                                <img src={locationIcon} /> <b>Lokalizacja:</b>{event.location} - {event.extendedLocation} <br />
                                                <img src={timeIcon} width="15px" height="16px" /> <b>Przewidywany czas trwania: </b>{event.duration}<br />
                                                <img src={timeIcon} width="15px" height="16px" /> <b>Godzina rozpoczęcia: </b>{event.time} <br /><br />

                                                <Link to={`/events/subcategory/${event.subcategory}/${event.title}`}>
                                                    <button className='artist-page-ticket-button'>
                                                        Bilety już od {event.price} zł<br />
                                                        Sprawdź szczegóły!
                                                    </button>
                                                </Link>

                                            </div>



                                        </div>

                                    </>)
                                })
                            }
                        </div>

                    </div>
                </>
            ))}
        </>
    );
}
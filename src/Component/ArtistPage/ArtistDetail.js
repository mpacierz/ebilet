import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./ArtistDetail.css";
import { Link } from 'react-router-dom';

import locationIcon from "../../assets/img/icons/location.png"
import dateIcon from "../../assets/img/icons/date.png"
import timeIcon from "../../assets/img/icons/time.png"
import microIcon from "../../assets/img/icons/micro.png"

export default function ArtistDetail() {

    const [artistdetail, setArtistdetail] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8082/artists/artisticname/${params.artisticName}`)
            .then(response => response.json())
            .then(response => setArtistdetail(response))
    }, []);

    const [...artisticdetailunpacked] = [artistdetail];


    return (
        <>
            {artisticdetailunpacked.map(artdet => {
                return (
                    <>
                        <div id="artist-page">
                            <div id="artist-page-top-info">
                                <div id="artist-page-top-info-photo">
                                    <img src={`http://localhost:8082/downloadFile/artist${artdet.id}.jpg`} width="318px" height="200px" />
                                </div>

                                <div id="artist-page-top-info-description">
                                    <h1>{artdet.artisticName}</h1>
                                    {artdet.name} {artdet.surname}  <br />
                                    Wiek: {artdet.age}  <br />
                                    Gatunki: {artdet.genre} <br />

                                    <h1>Kariera</h1>
                                    {artdet.description}
                                </div>
                            </div>

                            <div id="artist-page-events">
                                <h1>Aktualne wydarzenia artysty dostępne w serwisie</h1>

                                {
                                    artdet.events && artdet.events.map(event => {
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
                )
            })}
        </>
    );
}
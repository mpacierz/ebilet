import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './EventsView.css';
import './EventDetail.css';
import Event from './Event';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

import locationIcon from "../../assets/img/icons/location.png"
import dateIcon from "../../assets/img/icons/date.png"
import timeIcon from "../../assets/img/icons/time.png"
import timelineIcon from "../../assets/img/icons/timeline.png"
import favouriteIcon from "../../assets/img/icons/favourite.png"
import warningIcon from "../../assets/img/icons/warning.png"


function EventDetail() {

    const [detail, setDetail] = useState([]);

    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        fetch(`http://localhost:8082/events/subcategory/${params.name}/${params.title}`)
            .then(response => response.json())
            .then(response => setDetail(response))
    }, [params]);



    const [...eventdetail] = [detail];

    const removeFromFavourite = (e) => {
        localStorage.removeItem(`fav${e.target.value[6]}`, `${e.target.value}`);
        navigate(`/events/subcategory/${params.name}/${params.title}`); 
    }

    const addToFavourite = (e) => {
        localStorage.setItem(`fav${e.target.value[6]}`, `${e.target.value}`);
        navigate(`/events/subcategory/${params.name}/${params.title}`); 
    }


    return (
        <>
            {eventdetail.map(det => (
                <div>
                    <section id="detail">
                        <section id="middle-box">
                            <section id="left-panel">
                                <section id="detail-picture"><img src={`http://localhost:8082/downloadFile/${det.id}.jpg`} width="300px" height="200px"></img> </section>

                                <section id="left-panel-artist">
                                    <h1>Artyści</h1>
                                    {
                                        det.artists && det.artists.map(artist => {
                                            return (<>

                                                <section id="left-panel-artist-info">
                                                    <Link to={"/artists/artisticname/" + artist.artisticName} >
                                                        <img src={`http://localhost:8082/downloadFile/artist${artist.id}.jpg`} width="250px" height="166px" /><br />
                                                    </Link>
                                                    <b>{artist.artisticName}</b><br />
                                                    <b>({artist.name}</b> <b>{artist.surname})</b><br />
                                                </section>

                                            </>)
                                        })
                                    }
                                </section>


                            </section>

                            <section id="detail-top-title">
                                <section id="detail-top-title-fav">
                                    <>
                                        <h1>
                                            {det.title}
                                        </h1>
                                    </>

                                    <div>

                                        {localStorage.getItem(`fav${det.id}`, JSON.stringify(det)) != null ? <>
                                            <Button onClick={removeFromFavourite} value={JSON.stringify(det)}>
                                                Usuń ulubionych<img src={favouriteIcon} width="26px" height="26px" className='favourite-icon' />
                                            </Button>

                                        </>
                                            :
                                            <>
                                                <Button onClick={addToFavourite} value={JSON.stringify(det)}>
                                                    Dodaj do ulubionych<img src={favouriteIcon} width="26px" height="26px" className='favourite-icon' />
                                                </Button>
                                            </>
                                        }

                                    </div>

                                </section>

                                <h2>{det.category}/{det.subcategory}</h2>

                                <section id="detail-description">
                                    {det.description}  <br /><br /><br />
                                    {det.extended}
                                </section>    <br />

                                <section id="detail-org-info">

                                    <h1>Informacje podstawowe </h1><br />

                                    <img src={locationIcon} className="detail-org-info-icons" /> <b>Lokalizacja: </b> {det.extendedLocation} {det.location}  <br />
                                    <img src={dateIcon} className="detail-org-info-icons" /> <b>Data: </b> {det.date} <br />
                                    <img src={timeIcon} className="detail-org-info-icons" /> <b>Godzina rozpoczęcia: </b> {det.time} <br />
                                    <img src={timelineIcon} className="detail-org-info-icons" /> <b>Przewidywany czas trwania: </b> {det.duration} <br /><br />

                                    <h1>Lokalizacja </h1><br />
                                    <section id="location-info">
                                        {
                                            det.objects && det.objects.map(object => {
                                                return (<>

                                                    <section id="location-info-left">
                                                        <h3>{object.name}</h3>
                                                        Adres: {object.preciseLocation}<br /><br />
                                                        <b>Kontakt:</b><br />
                                                        Telefon: {object.phone}<br />
                                                        Email: {object.email}<br /><br />


                                                        <Link to={`/objects/${object.name}`}>
                                                            <u>Szczegóły obiektu oraz dostępne wydarzenia</u>
                                                        </Link>
                                                    </section>

                                                    <section id="location-info-right">
                                                        <img src={`http://localhost:8082/downloadFile/object${object.id}.jpg`} width="400px" height="266px"></img>
                                                    </section>

                                                    <section id="location-info-bottom">
                                                        <iframe src={object.mpob} className='event-detail-map' loading="lazy" />
                                                    </section>

                                                </>
                                                )
                                            })}
                                    </section>



                                    <br />
                                    <h1>Bilety</h1><br />

                                    {
                                        det.tickets && det.tickets.map(ticket => {
                                            return (<>

                                                <section id="ticket-detail">
                                                    <div id="ticket-detail-left">
                                                        <h1>{ticket.ticketCol}</h1>
                                                        <b>Miejsce:</b> {ticket.seat} <br />
                                                        <b>Dodatkowe informacje:</b> {ticket.info}
                                                    </div>

                                                    {ticket.ticketQuantity == 0 ? <>
                                                        <div id="ticket-detail-right-null">
                                                            <s>Cena {ticket.price} zł</s><br />
                                                            <b>Brak biletów lub sprzedaż zakończona</b>
                                                        </div></>
                                                        :
                                                        <>
                                                            {ticket.ticketQuantity < 200 ? <>
                                                                <Link to={`/events/subcategory/${det.subcategory}/${det.title}/kup/${det.id}/${ticket.id}/`}>
                                                                    <div id="ticket-detail-right">
                                                                        Cena {ticket.price} zł<br />
                                                                        <b>Kup bilet</b><br />

                                                                        <div id="warning">
                                                                            <img src={warningIcon} width="16px" height="16px" />
                                                                            <b>Mała ilość!</b>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </> : <>
                                                                <Link to={`/events/subcategory/${det.subcategory}/${det.title}/kup/${det.id}/${ticket.id}/payment`}>
                                                                    <div id="ticket-detail-right">
                                                                        Cena {ticket.price} zł<br />
                                                                        <b>Kup bilet</b>
                                                                        
                                                                    </div>
                                                                </Link>
                                                            </>}
                                                        </>


                                                    }



                                                </section>

                                            </>)
                                        })
                                    }

                                    <>
                                        <br />
                                    </>
                                </section>

                            </section>
                        </section>
                    </section>
                </div>
            ))}
        </>
    );
}




export default EventDetail;



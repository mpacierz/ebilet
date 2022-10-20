import React, { Component, useState, useEffect } from 'react';
import HeaderMain from '../Header/HeaderMain';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router';
import './EventsView.css';
import './EventDetail.css';
import Event from './Event';

export default function EventsView() {

    const [event, setEvent] = useState([]);


    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8082/events/subcategory/${params.name}`)
            .then(response => response.json())
            .then(response => setEvent(response))
    }, [params.name]);

    return (<>
        <section id="event-category-top-info">

            <h1>
                Aktualnie dostępne wydarzenia w kategorii {params.name} 
            </h1>

        </section>
        <Event event={event} />
    </>)

}

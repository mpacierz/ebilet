import { Component, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import "./ObjectView.css";



import cityIcon from "../../assets/img/icons/city.png";
import locationIcon from "../../assets/img/icons/location.png";
import aboutusIcon from "../../assets/img/icons/calc.png";

export default function ObjectView() {

    const [objects, setObjects] = useState([]);
    const [querryObject, setQuerryObject] = useState("");


    useEffect(() => {
        fetch(`http://localhost:8082/objects`)
            .then(response => response.json())
            .then(response => setObjects(response))
    }, []);



    return (
        <>
            <section className='object-middle-box'>

                <section id="object-searchbar">
                    <form>
                        <input
                            type="text"
                            id="search"
                            placeholder="Wyszukiwanie obiektu - podaj nazwę lub miejscowość"
                            autoComplete="off"
                            onChange={(event) => setQuerryObject(event.target.value)}
                        />
                    </form>
                </section>


                {objects.filter((obj) => {
                    if (querryObject == "") {
                        return obj
                    } else if (obj.name.toLowerCase().includes(querryObject.toLowerCase())) {
                        return obj
                    }else if (obj.city.toLowerCase().includes(querryObject.toLowerCase())) {
                        return obj
                    }
                }).map((obj, key) => (
                    <>
                        <section className='object-view-box' key={key}>

                            <section className='object-view-photo'>
                                <img src={`http://localhost:8082/downloadFile/object${obj.id}.jpg`} width="400px" height="266px" />
                            </section>

                            <section className='object-view-description'>

                                <section className='object-view-description-info'>
                                    <h1>{obj.name}</h1><br />

                                    <img src={cityIcon} width="16px" height="16px" /> <b>Miasto:</b> {obj.city} <br /><br />
                                    <img src={locationIcon} width="16px" height="16px" /> <b>Adres:</b> {obj.preciseLocation} <br /><br />
                                    <img src={aboutusIcon} width="16px" height="16px" /><b> Pojemność:</b> {obj.capacity} <br /><br />

                                </section>

                                <section className='object-check'>
                                    <Link to={`/objects/${obj.name}`} >
                                        <button type="button" className="object-check-button">Sprawdź szczegóły i dostępne wydarzenia</button>
                                    </Link>
                                </section>

                            </section>
                        </section>
                    </>
                ))}
            </section>
        </>
    );
}
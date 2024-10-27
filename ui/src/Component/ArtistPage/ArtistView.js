import { Component, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import "./ArtistView.css"

export default function ArtistView() {

    const [artist, setArtist] = useState([]);
    const [querryArtist, setQuerryArtist] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8082/artists`)
            .then(response => response.json())
            .then(response => setArtist(response))
    }, []);

    return (
        <>
            <section className='artist-middle-box'>

                <section id="object-searchbar">
                    <form>
                        <input
                            type="text"
                            id="search"
                            placeholder="Wyszukiwanie artysty"
                            autoComplete="off"
                            onChange={(event) => setQuerryArtist(event.target.value)}
                        />
                    </form>
                </section>

                {artist.filter((art) => {
                    if (querryArtist == "") {
                        return art
                    } else if (art.artisticName.toLowerCase().includes(querryArtist.toLowerCase())) {
                        return art
                    }else if (art.name.toLowerCase().includes(querryArtist.toLowerCase())) {
                        return art
                    }else if (art.genre.toLowerCase().includes(querryArtist.toLowerCase())) {
                        return art
                    }
                    
                }).map((art,key) => (
                    <>
                        <section className='artist-view-box'>

                            <section className='artist-view-photo'>
                                <img src={`http://localhost:8082/downloadFile/artist${art.id}.jpg`} width="318px" height="200px" />
                            </section>

                            <section className='artist-view-description'>

                                <h1>
                                    {art.artisticName} <br />
                                </h1>

                                <h2>
                                    {art.name} {art.surname}<br />
                                </h2>

                                Kraj urodzenia: <br />
                                Wiek: {art.age} <br />
                                Gatunki: {art.genre}
                            </section>

                            <Link to={"/artists/artisticname/" + art.artisticName} >
                                <button type="button" className="min-buy-button">Sprawdź</button>
                            </Link>

                        </section>
                    </>
                ))}
            </section>
        </>
    );
}
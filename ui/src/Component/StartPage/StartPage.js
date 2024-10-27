import React, { useEffect, useState } from 'react';
import Event from '../EventsView/Event';
import promotionEvent from '../../assets/img/events/shm.jpg'
import { Link } from 'react-router-dom';
import "./startpage.css"
import "./newsletter.css"
import "./aboutus.css"
import Newsletter from './Newsletter'; 

import logoPng from "../../assets/img/logo/logo.png"
import aboutUsPng from "../../assets/img/pictures/pic2.jpg"


function StartPage() {

    const [recomended, setRecomended] = useState([]);
    const [last, setLast] = useState([]);
    const [email, setEmail] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8082/events/recommended`)
            .then(response => response.json())
            .then(response => setRecomended(response))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8082/events/last`)
            .then(response => response.json())
            .then(response => setLast(response))
    }, []);

    return (
        <>

            <section>

                <div className="top-title">
                    <h1><b>eBilet poleca</b></h1>
                </div>


                <section className="recommended">
                    <Event event={recomended} />

                </section>


                <section id="promotion-event">
                    <section id="promotion-description">
                        <h5>Legendarny zespół powraca do Polski! <br /><br />Zespół od lat uwielbiany przez fanów za fantastyczne występy na żywo sprzedał podczas poprzedniej trasy, “One Last Tour,” ponad 1,000,000 biletów. Trasa w 2022 roku nastąpi po ogłoszonym przez trio występie na festiwalu Coachella 2022, a koncerty odbywać się będą w arenach i na stadionach w USA i Europie.</h5>
                    </section>

                    <section id="promotion-image">
                        <img src={promotionEvent} height="400px" width="1030px"></img>
                    </section>

                    <section id="promotion-check-out">
                        <Link to={'/events/subcategory/Electro%20%7C%20Techno/Swedish%20House%20Mafia'}>
                            <button className='index-page-promotion-event-button'>Sprawdź</button>
                        </Link>
                    </section>
                </section>

                <section id="last-events-title">
                    <h1><b>Ostatnio dodane wydarzenia</b></h1>
                </section>

                <article id="last-events" className='recommended'>
                    <Event event={last} />

                </article>

                <section id="newsletter">
                  <Newsletter/>
                </section>

                <section id="about-us">
                    <section id="about-us-center">
                        <section id="about-us-left">
                            <img src={logoPng} width="450px" height="113px" />
                            <h2>Serwis eBilet dostarcza rozwiązania które zmieniają sposób sprzedawania i nabywania biletów już od 2005
                                roku. Nasza witryna to lider w internetowej sprzedaży biletów w branży kulturalno-rozrywkowej w Polsce.
                                Współpracujemy z największymi krajowymi i międzynarodowymi organizatorami imprez, świadcząc usługi sprzedaży
                                indywidualnej, korporacyjnej, a także promocji i kompleksowej obsługi imprez. Za pomocą technologii
                                dopasowujemy się do bieżących potrzeb naszych partnerów i użytkowników.
                            </h2>

                            <h6>eBilet 2022</h6>
                        </section>
                        <section id="about-us-right"> <img src={aboutUsPng} width="720px" height="375px" /></section>
                    </section>
                </section>



            </section>

        </>
    );
}

export default StartPage;
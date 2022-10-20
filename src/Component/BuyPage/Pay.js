import "./Pay.css"

import React, { Component, setState, useState, useEffect } from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';

export default function Pay(props) {

    const [blik, setBlik] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    let user = 1;
    let ticket = params.ticketid;
    const status = "realizacja";

    let fakeblik = 123456;
    let cardnumber = 111122223333444455556666;
    let date = "s07/24";
    let cvv = "56D";

    const item = { status, user, ticket };

    async function checkBlik() {

        {
            fakeblik == blik ? <>
                {
                    fetch("http://localhost:8082/orders", {
                        method: 'POST',
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(item)
                    }).then(() =>{
                       
                        navigate("info");
                    })

                }

            </> : <>
                {window.alert('Płatność nie została zaakceptowana. Zamówienie nie zostało zrealizowane.')}
            </>
        }

    }

    return (
        <>
            <section id="pay-box">
                <section id="pay-box-method">
                    <b>Metoda płatności</b> <br /><br /><br />

                    <div id="blik">

                        <b>Zapłać przez BLIK</b><br /><br />

                        <h6>XX1245156XX</h6>
                        <h6>home.pl</h6><br />

                        <input type="text" onChange={e => setBlik(e.target.value)}></input><br />
                        kod blik
                        <br /> <br />

                        <><button>
                            <Link to={`/events/subcategory/${params.name}/${params.title}`}>
                                anuluj
                            </Link>
                        </button>

                            <button onClick={checkBlik}>
                                wykonaj
                            </button></>

                        <br /><br /><br />
                    </div>



                    <div id="card">
                        <b>Karta płatnicza</b><br /><br />
                        <div id="card-number">
                            <input type="text"></input><br />
                            Numer karty<br />
                            <br />
                        </div>

                        <div id="card-number-date">
                            <div>
                                <input type="text"></input><br />
                                Ważna do<br />
                            </div>

                            <div>
                                <input type="text"></input><br />
                                Kod CVV/CVC2<br />
                            </div>
                        </div>

                        <button>Użyj karty</button>

                    </div>

                </section>
            </section>

        </>
    )
}
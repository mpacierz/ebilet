import "./PayInfo.css"
import React, { Component, setState, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function PayInfo(props) {

    const params = useParams();
    console.log(params);


    return (
        <>
            <section id="pay-info-box">
                <section id="pay-info-box-middle">
                    <h2>Zamówienie zostało zrealizowane!</h2>
                    Twoje zamówienie na wydarzenie: <br /><br />
                    <b>{params.title}</b> <br />
                    ({params.name})<br /><br />
                    zostało zrealizowane!<br /><br /><br />


                    Przejdź do strony profilu aby sprawdzić informacje o statusie zamówienia. <br /><br />

                    <Link to={"/profil"}>
                        <button>Przejdź do profilu</button>
                    </Link>
                </section>
            </section>

        </>
    )
}
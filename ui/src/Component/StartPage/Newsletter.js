
import React, { Component, setState, useState, useEffect } from 'react';


function Newsletter() {

    const [email, setEmail] = useState([]);

    async function sendNewsletter(){
        let item = {email};
        let result = await fetch("http://localhost:8082/newsletters",{
            method: 'POST',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
    }

    return (<>
        <section id="newsletter-info">

            <h1>Chcesz być na bieżąco?</h1>
            <h3>Zapisz się do naszego newslettera i bądź przed innymi!</h3><br /><br />

            <b>Adres e-mail</b><br />
            <input type='text'
                placeholder='Podaj adres e-mail'
                className='newsletter-input'
                onChange={e => setEmail(e.target.value)}
            >

            </input><br />

            <b>Miasto</b><br />
            <input type='text' placeholder='Podaj miasto' className='newsletter-input'></input><br />

            <input type="checkbox" className='checkbox-style' /> Zapoznałam (em) się i akceptuje <a>Regulamin serwisu ebilet.</a>

            <h1><button className='newsletter-input-style' onClick={sendNewsletter}><b>Zapisz się na newsletter!</b></button></h1>

        </section>
    </>
    )
}



export default Newsletter;
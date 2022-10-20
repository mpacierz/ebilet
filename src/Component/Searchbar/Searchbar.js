import React, { Component, useEffect, useState } from 'react';
import "./searchbar.css"
import searchIcon from "../../assets/img/icons/search.png"
import SearchView from './SearchView';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Searchbar() {

    const [data, setData] = useState([]);
    const [querry, setQ] = useState("");
    const clear = null;

    useEffect(() => {
        fetch("http://localhost:8082/events/")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    function search(rows) {
        return rows.filter(
            (row) =>
                row.title.toLowerCase().indexOf(querry) > -1 ||
                row.location.toLowerCase().indexOf(querry) > -1 ||
                row.extendedLocation.toLowerCase().indexOf(querry) > -1 ||
                row.category.toLowerCase().indexOf(querry) > -1 ||
                row.subcategory.toLowerCase().indexOf(querry) > -1
        );
    }


    return (
        <>

            <section id="searchbar">
                <form>
                    <input
                        type="text"
                        id="search"
                        placeholder="Wyszukiwanie wydarzenia - podaj tytuł"
                        value={querry}
                        autoComplete="off"
                        onChange={(e) => setQ(e.target.value)}
                    />

                    <button
                        type="button"
                        className='reset-button'
                        value=""
                        onClick={(e) => setQ(e.target.value)}
                    >x</button>

                    <Link to={"/wyszukiwanie"} >
                        <button>
                            <img src={searchIcon} className="searchbar-icon-style" />Wyszukiwanie <br />zaawansowane
                        </button>
                    </Link>
                </form>

                <div id="search-result">
                    {querry.length == 0 ? (<></>) : (<SearchView data={search(data)} />)}
                </div>


            </section>




        </>
    );
}

export default Searchbar;
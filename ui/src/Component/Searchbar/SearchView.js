import React from "react";
import { Link } from "react-router-dom";
import homeIconPng from "../../assets/img/icons/home.png"

export default function SearchView({ data }) {
    const columns = data[0] && Object.keys(data[0]);

    return (
        <>
            <div className="search-result-style">
                {data.map(row => (
                    <>
                        <Link to={"/events/" + row.subcategory + "/" + row.title} >
                            <li>
                                <div className="seatch-result-photo">
                                    <img src={`http://localhost:8082/downloadFile/${row.id}.jpg`} width='88px' height="50px" />
                                </div>
                                <div className="search-result-info">
                                    <b>{row.title} </b>| {row.location}<br />
                                    <h3>{row.category}/{row.subcategory}</h3>
                                </div>
                            </li>
                        </Link>
                    </>
                ))}
            </div>
        </>
    );
}
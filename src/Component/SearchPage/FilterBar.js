import "./searchpage.css"
import { Component, useEffect, useState } from "react"
import Event from "../EventsView/Event"


import infoIcon from "../../assets/img/icons/info.png"
import locationIcon from "../../assets/img/icons/location2.png"
import calendarIcon from "../../assets/img/icons/calendar.png"
import { render } from "react-dom"


const FilterBar = ({
    genders,
    onNameFilter,
    onEmailFilter,
    onGenderFilter,
    onDateFilter,
  }) => {
    const [filters, setFilters] = useState({
      name: "",
      email: "",
      gender: "",
      from: "",
      to: "",
    });
  
    const handleInput = (field) => (event) => {
      const { value } = event.target;
  
      setFilters({
        ...filters,
        [field]: value,
      });
  
      switch (field) {
        case "name":
          onNameFilter(value);
          break;
        case "email":
          onEmailFilter(value);
          break;
        case "gender":
          onGenderFilter(value);
          break;
        case "from":
          onDateFilter(value, "from");
          break;
        case "to":
          break;
        default:
          break;
      }
    };

    return (
        <>
            <nav id="search-filter-bar">
                <div className="search-filter-box">
                    <img src={calendarIcon} className="search-top-icons" />
                    Kiedy? <br />
                    od <input type="date" /><br />
                    do <input type="date" />
                </div>

                <div className="search-filter-box">
                    <img src={locationIcon} className="search-top-icons" />
                    Gdzie?<br />
                    <select name="voivodships" id="voivodships-select" className="search-select" >
                        <option value="">Wybierz województwo</option>
                        <option value="dolnośląskie">dolnośląskie</option>
                        <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
                        <option value="lubelskie">lubelskie</option>
                        <option value="lubuskie">lubuskie</option>
                        <option value="łódzkie">łódzkie</option>
                        <option value="małopolskie">małopolskie</option>
                        <option value="mazowieckie">mazowieckie</option>
                        <option value="opolskie">opolskie</option>
                        <option value="podkarpackie">podkarpackie</option>
                        <option value="podlaskie">podlaskie</option>
                        <option value="pomorskie">pomorskie</option>
                        <option value="śląskie">śląskie</option>
                        <option value="świętokrzyskie">świętokrzyskie</option>
                        <option value="warmińsko-mazurskie">warmińsko-mazurskie</option>
                        <option value="wielkopolskie">wielkopolskie</option>
                        <option value="zachodniopomorskie">zachodniopomorskie</option>
                    </select>
                    <br />
                    <input type="text" placeholder="Podaj miasto" ></input>

                </div>


                <div className="search-filter-box">
                    <img src={infoIcon} className="search-top-icons" />
                    Kategoria <br />
                    <select name="category" id="category-select" className="search-select"  >
                        <option value="">Wybierz kategorie</option>
                        <option value="koncerty">koncerty</option>
                        <option value="teatr">teatr</option>
                        <option value="klasyka">klasyka</option>
                        <option value="widowiska">widowiska</option>
                        <option value="dladzieci">dla dzieci</option>
                        <option value="sport">sport</option>
                        <option value="kino">kino</option>
                        <option value="inne">inne</option>
                    </select>
                </div>
            </nav>






            <nav id="search-filter-bar-lower">
                <div className="filter-count">ilość wyników: <b>hhhh</b></div>

                <div className="filter-sort">Sortowanie: {" "}
                    <select>
                        <option value="lowest">lowest</option>
                        <option value="highest">highest</option>
                    </select>
                </div>

                <div className="filter-voivode">Województwo {" "}
                    <select>
                        <option value="">Wybierz województwo</option>
                        <option value="małopolskie">małopolskie</option>
                        <option value="świętokrzyskie">świętokrzyskie</option>
                        <option value="warmińsko-mazurskie">warmińsko-mazurskie</option>
                    </select>
                </div>
            </nav>
        </>
    )

}

export default FilterBar;
import { Component, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import StartPage from '../StartPage/StartPage';
import Event from '../EventsView/Event';
import EventDetail from '../EventsView/EventDetail';
import HelpPage from '../HelpPage/HelpPage';
import SearchPage from '../SearchPage/SearchPage';
import Searchbar from '../Searchbar/Searchbar';
import Service from '../Login/Service';





import logoIcon from '../../assets/img/logo/logo.png'
import concertIcon from '../../assets/img/icons/concert.png'
import ballIcon from '../../assets/img/icons/ball.png'
import cinemaIcon from '../../assets/img/icons/cinema.png'
import classicIcon from '../../assets/img/icons/classic.png'
import kidIcon from '../../assets/img/icons/kid.png'
import maskIcon from '../../assets/img/icons/mask.png'
import padIcon from '../../assets/img/icons/pad.png'
import shoppingIcon from '../../assets/img/icons/shopping.png'
import userIcon from '../../assets/img/icons/user.png'
import tentIcon from '../../assets/img/icons/tent.png'
import buildingIcon from '../../assets/img/icons/building.png'
import artistIcon from '../../assets/img/icons/artist.png'
import favIcon from '../../assets/img/icons/favourite.png'

import './Nav.css';
import './Main.css';
import ObjectDetail from '../ObjectPage/ObjectDetail';
import ArtistView from '../ArtistPage/ArtistView';
import ArtistDetail from '../ArtistPage/ArtistDetail';
import ObjectView from '../ObjectPage/ObjectView';
import EventsView from '../EventsView/EventView';

import ProfilPage from '../ProfilPage/ProfilPage';
import FavouritesPage from '../FavouritesPage/FavouritesPage';
import Pay from '../BuyPage/Pay';
import PayInfo from '../BuyPage/PayInfo';


class HeaderMain extends Component {



  render() {

    let koncerty = [
      { name: 'Wszystkie', id: 1 },
      { name: 'Festivale', id: 2 },
      { name: 'Rock', id: 3 },
      { name: 'Pop', id: 4 },
      { name: 'Jazz | Blues', id: 5 },
      { name: 'Metal', id: 6 },
      { name: 'Electro | Techno', id: 7 },
      { name: 'Reggae', id: 8 },
      { name: 'Disco Polo', id: 9 },
      { name: 'inne', id: 10 },
    ]

    let teatr = [
      { name: 'Wszystkie', id: 11 },
      { name: 'Komedie', id: 12 },
      { name: 'Musicale', id: 13 },
      { name: 'Tragedia | Dramat', id: 14 },
      { name: 'Spektakle', id: 15 },
      { name: 'Inne', id: 16 },
    ]

    let klasyka = [
      { name: 'Wszystkie', id: 17 },
      { name: 'Opera', id: 18 },
      { name: 'Balet | Taniec', id: 19 },
      { name: 'Muzyka filmowa', id: 20 },
      { name: 'Inne', id: 21 },
    ]

    let widowiska = [
      { name: 'Wszystkie', id: 22 },
      { name: 'Kabarety', id: 23 },
      { name: 'Stand up', id: 24 },
      { name: 'Inne', id: 25 },
    ]

    let dladzieci = [
      { name: 'Wszystkie', id: 26 },
      { name: 'Teatr dla dzieci', id: 27 },
    ]

    let sport = [
      { name: 'Wszystkie', id: 28 },
      { name: 'Koszykówka', id: 29 },
      { name: 'Piłka Nożna', id: 30 },
      { name: 'Siatkówka', id: 31 },
      { name: 'MMA', id: 32 },
      { name: 'Inne', id: 33 },
    ]

    let kino = [
      { name: 'Wszystkie', id: 34 },
      { name: 'Dramaty', id: 35 },
      { name: 'Komedie', id: 36 },
      { name: 'Kryminały', id: 37 },
      { name: 'Bajki', id: 38 },
      { name: 'Inne', id: 39 },
    ]

    let inne = [
      { name: 'Wszystkie', id: 40 },
    ]


    return (
      <>

        <header>

          <section id="top">
            <div id="logo"><Link to={"/"}><img src={logoIcon} alt="logo" width="313px" height="80px"></img></Link></div>

            <Searchbar />

            <section id="top-extended">

              <div className='top-extended-fav'>
                <Link to={"/favourites"}>
                  <>
                  <img src={favIcon} width="17px" height="17px"/>
                    Ulubione
                  </>
                </Link>
              </div>

              <div className='top-extended-fav'>
                <Link to={"/profil"}> Profil </Link>
              </div>

              <section className="login">
                <Link to={"/login"}> Zaloguj </Link>
              </section>

            </section>

          </section>

          <nav className="navbar">
            <div>
              <ol>
                <li><a><img src={concertIcon} alt="icon" className="nav-icons" />Koncerty</a>
                  <ul>{koncerty.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name} value={item.name}>
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="#"><img src={tentIcon} alt="icon" className="nav-icons" />Teatr</a>
                  <ul>{teatr.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name}>
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="#"><img src={classicIcon} alt="icon" className="nav-icons" />Klasyka</a>
                  <ul>{klasyka.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name} >
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="#"><img src={maskIcon} alt="icon" className="nav-icons" />Widowiska</a>
                  <ul>{widowiska.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name} >
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="#"><img src={kidIcon} alt="icon" className="nav-icons" />Dla dzieci</a>
                  <ul>{dladzieci.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name} >
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="#"><img src={ballIcon} alt="icon" className="nav-icons" />Sport</a>
                  <ul>{sport.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name} >
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="#"><img src={cinemaIcon} alt="icon" className="nav-icons" />Kino</a>
                  <ul>{kino.map((item) =>
                    <><li><Link to={"/events/subcategory/" + item.name} >
                      <button value={item.name} onClick={this.handleEventChange}>{item.name}</button>
                    </Link></li></>)}
                  </ul>
                </li>

                <li><a href="events/Inne"><img src={padIcon} alt="icon" className="nav-icons" />Inne</a></li>


                <li className='navbar-right-side-menu'>
                  <Link to={"/artists"}>
                    <img src={artistIcon} alt="icon" className="nav-icons-padding" />Artyści
                  </Link>
                </li>


                <li className='navbar-right-side-menu'>
                  <Link to={"/objects"}>
                    <img src={buildingIcon} alt="icon" className="nav-icons-padding" />Obiekty
                  </Link>
                </li>

              </ol>
            </div>
          </nav>



        </header>


        <main id="main">
          <Routes>

            <Route exact path="/" element={<StartPage />} />
            <Route exact path="/pomoc" element={<HelpPage />} />
            <Route exact path="/wyszukiwanie" element={<SearchPage />} />

            <Route exact path="/artists" element={<ArtistView />} />
            <Route exact path="/artists/artisticname/:artisticName" element={<ArtistDetail />} />

            <Route exact path="/objects/:name" element={<ObjectDetail />} />
            <Route exact path="/objects" element={<ObjectView />} />

            <Route exact path="/events/subcategory/:name/" element={<EventsView />} />
            <Route exact path="/events/subcategory/:name/:title" element={<EventDetail />} />
            <Route exact path="/events/subcategory/:name/:title/kup/:eventid/:ticketid/payment" element={<Pay />} />
            <Route exact path="/events/subcategory/:name/:title/kup/:id/:id/payment/info" element={<PayInfo />} />

            <Route exact path="/favourites" element={<FavouritesPage />} />

            <Route exact path="/profil" element={<ProfilPage />} />

            <Route exact path="/login" element={<Service />} />
          </Routes>


        </main>

      </>
    );
  }
}



export default HeaderMain;

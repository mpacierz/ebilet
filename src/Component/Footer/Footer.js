import './Footer.css';
import { Link } from 'react-router-dom';

import fbIcon from '../../assets/img/icons/fb.png'
import igIcon from '../../assets/img/icons/ig.png'
import ytIcon from '../../assets/img/icons/yt.png'
import logoWhite from '../../assets/img/logo/logo-white.png';


function Footer() {
    return (
        <>
            <footer>
                <section>
                    <img src={logoWhite} width="150" height="63" />
                </section>

                <section>
                    <h1>OBSŁUGA KLIENTA</h1>
                    <ul>
                        <li><Link to={"/pomoc"}>KONTAKT</Link></li>
                        <li><Link to={"/pomoc"}>FAQ</Link></li>
                    </ul>
                </section>

                <section>
                    <h1>INFORMACJE DLA KUPUJĄCYCH</h1>
                    <ul>
                        <li><Link to={"/pomoc"}>POMOC OGÓLNA</Link></li>
                        <li><Link to={"/pomoc"}>JAK KUPOWAĆ?</Link></li>
                        <li><Link to={"/pomoc"}>ZAMÓWIENIA GRUPOWE</Link></li>
                        <li><Link to={"/pomoc"}>PUNKTY SPRZEDAŻY</Link></li>
                        <li><Link to={"/pomoc"}>MAPA STRONY</Link></li>
                    </ul>
                </section>

                <section>
                    <h1>INFORMACJE DLA ORGANIZATORÓW</h1>
                    <ul>
                        <li><Link to={"/pomoc"}>WSPÓŁPRACA</Link></li>
                        <li><Link to={"/pomoc"}>SYSTEMY BILETÓW</Link></li>
                    </ul>
                </section>

                <section>
                    <h1>ZNAJDZ NAS</h1>
                    <ul>
                        <li><img src={fbIcon} alt="icon" className="footer-icons" />FACEBOOK</li>
                        <li><img src={igIcon} alt="icon" className="footer-icons" />INSTAGRAM</li>
                        <li><img src={ytIcon} alt="icon" className="footer-icons" />YOUTUBE</li>
                    </ul>
                </section>

                <br />


            </footer>
        </>
    );
}

export default Footer;

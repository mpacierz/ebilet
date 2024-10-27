import './HelpPage.css';


export default function HelpPage() {

  return (
    <>

      <section id="help">

        <section id="help-left-panel">

          <b>Spis treści</b><br /><br />
          <a href="#jakkupowac">Jak kupować?</a><br />
          <a href="#grupowe">Zamowienia grupowe</a><br />
          <a href="#punkty">Punkty sprzedaży</a><br />
          <a href="#współpraca">Współpraca</a><br />
          <a href="#kontakt">Kontakt</a><br />
          <a href="#faq">FAQ</a><br />
        </section>

          <section id="help-right-panel">
            <h1>Pomoc i informacje ogólne</h1>
            <br/>
            W tym dziale zawarte są informacje odnośnie korzystania ze strony, kontaktu oraz najcześciej zadawanych pytań.
            
            <a id="jakkupowac" ><h2>Jak kupować?</h2></a>
            Przed dokonaniem zakupu zachęcamy do <b>założenia konta</b> użytkownia na portalu eBilet.
            Daje to wiele korzyści m.in:<br /><br />
            - Szybkie i wygodne zakupy - brak potrzeby wypełniania tych samych pól.<br />
            - Twoje bilety zawsze pod ręką - wszystkie twoje bilety znajdują na twoim profilu.<br />
            - Informacje o promocjach - jako zalogowany użytkownik dostajesz spersonalizowane informacje o akcjach promocyjnych i specjalnych ofertach.<br /><br />

            Przeglądanie wydarzeń i formularz rezerwacyjny jest czytelny oraz intuicyjny. W każdym etapie przeglądania serwisu oraz kupowania biletu użytkownik mam możliwosć
            powrotu do poprzedniego kroku w którym może sprawdzić i poprawić błedy.<br />

            Po przejściu do zamówienia użytkownik ma 10 min na dokończenie procesu zakupu biletu.<br />
            Użytkownik podaje dane (jeśli nie jest zalogowany) oraz dokonuje wyboru metody płatności.




            <a id="grupowe"><h2>Zamowienia grupowe</h2></a>
            Aby jak najlepiej sprostać oczekiwaniom klientów każde zamówienie grupowe jest realizowane indywidualnie przez biuro obsługi.
            Zamówienia grupowe są idealnym rozwiązaniem dla firm i szkół, które chcą nabyć większą ilość biletów za jednym razem. <br />
            Aby złożyć zamówienie wystarczy skontaktować się za pomocą e-maila bądź telefonu. Bilety zostaną wysłane pod wskazany adres.<br /><br />

            Zaletą takiego rozwiązania jest m.in. brak potrzeby stania w kolejce po bilet. <br />
            Wszelkie dodatkowe informacje i pytania prosimy kierować do biura obsługi: <br />
            <b>email</b>: ebilet@serwis.pl - internetowa obsługa zamówień<br />
            <b>telefon</b>: +48 22-14-53-642 - internetowa obsługa zamówień<br />


            <a id="punkty"><h2>Punkty sprzedaży</h2></a>

            Kielce Galeria Echo (1 piętro)<br />
            Świętokrzyska 20, 25-406 Kielce<br /><br />

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10069.337675609218!2d20.6463087!3d50.8805206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42a20e6b253e442d!2sGaleria%20Echo!5e0!3m2!1spl!2spl!4v1653726115804!5m2!1spl!2spl" width="400" height="250" className='map' ></iframe>

            <br />
            Kontakt z oddziałem: <br />
            <b>email</b>: ebilet@serwis-kielce.pl <br />
            <b>telefon</b>: +48 22-14-52-612 <br />

            <a id="współpraca"><h2>Współpraca</h2></a>

            Skontaktuj się z nami:<br />
            <b>email</b>: ebilet@serwis.pl <br />
            <b>telefon</b>: +48 22-14-53-642 <br />
            <br />

            <section id="help-page-form">
              <form action="*"><br />
                <label>Imie</label> <input type="text" name="imie" /><br /><br />
                <label>Nazwisko</label> <input type="text" name="nazwisko" /><br /><br />
                <label>Nazwa firmy</label> <input type="text" name="firma" /><br /><br />
                <label>Email</label> <input type="email" name="email" /><br /><br />
                <label>Telefon</label> <input type="phone" name="telefon" /><br /><br />
                <textarea name="querry" cols="50" rows="10">Treść zapytania</textarea>
                <button type="submit" className='help-page-send-button'>Wyślij formularz</button>
              </form>
            </section>

            <a id="kontakt"><h2>Kontakt</h2></a>

            <b>email</b>: ebilet@serwis.pl - internetowa obsługa zamówień<br />
            <b>telefon</b>: +48 22-14-53-642 - internetowa obsługa zamówień<br /><br />


            Kontakt z oddziałem: <br /><br />

            Kielce Galeria Echo (1 piętro)<br />
            Świętokrzyska 20, 25-406 Kielce<br />
            <b>email</b>: ebilet@serwis-kielce.pl <br />
            <b>telefon</b>: +48 22-14-52-612 <br />

            <a id="faq"><h2>FAQ</h2></a>
            <b>Jak znajdę wydarzenie?<br /><br /></b>
            Wyszukiwanie wydarzeń dostępne jest w paru sposobach: <br />
            <section className='float-left'>
              <br />- wydarzenie można znaleźć za pomocą wyszukiwarki która znajduje się na samej górze (istnieje możliwość wpisania tytułu interesującego nas wydarzenia, miasta lub kategorii),
              <br />- wyszukiwanie zaawansowane dostępne po kliknięciu na przycisk w górnej części strony (możliwość wyszukania po dacie, miejscu lub kategorii danego wydarzenia)
              <br />- po kliknięciu w dany obiekt użytkownik dostaje informacje o obiekcie oraz wydarzeniach jakie się na nim odbywają,
              <br />- po kliknięciu w profil artysty użytkownik dostaje informacje o artyście oraz wydarzeniach w jakich uczestniczy.<br />
            </section>

            <br /><b>Gdzie znajdę szczegółowe informacje na temat wydarzenia?<br /><br /></b>
            Wszystkie szczegółowe informacje odnośnie wydarzenia dostępne są po kliknieciu przycisku "Sprawdź". <br />
            Użytkownik dostaje informacje odnośnie opisu wydarzenia, artystach uczestniczących w wydarzeniu, lokalizacji wydarzenia oraz cen za poszczególne bilety.

            <br />
            <br /><b>Czy muszę zakładać konto aby kupić bilet?<br /></b>
            <br />Założenie konta nie jest konieczne aby kupić bilet w serwisie, jednak daje wiele korzyści m.in:<br /><br />

            <section className='float-left'>
              - Szybkie i wygodne zakupy - brak potrzeby wypełniania tych samych pól.<br />
              - Twoje bilety zawsze pod ręką - wszystkie twoje bilety znajdują na twoim profilu.<br />
              - Informacje o promocjach - jako zalogowany użytkownik dostajesz spersonalizowane informacje o akcjach promocyjnych i specjalnych ofertach.<br /><br />
            </section>

            <br /><b>Jak kupić bilet?<br /></b>
            <br />
            Aby kupić bilet przechodzimy do wybranego przez nas wydarzenia a następnie wybieramy interesujący nas bilet (w wydarzeniu może znajdować się pare kategorii biletów). <br />
            Następnie przechodzimy przez następne kroki podając dane potrzebne do zakupu biletu oraz płatności.
          </section>


      </section>
    </>
  );
}
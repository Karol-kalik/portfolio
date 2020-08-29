import React from 'react';
import $ from 'jquery';
import StartPageTwo from './StartPageTwo';


const handleButtonClick = function () {
  const windowHeight = $(window).height();
  window.scroll(0, windowHeight);
}


class Start extends React.Component {
  state = {
    addClassP: 'start ',
    addClassH1L: 'start left ',
    addClassH1R: 'start right ',
    addClassUl: '',
  }

  componentDidMount() {
    setTimeout(() => {
          this.setState({
            addClassP: 'start move',
            addClassH1L: 'start left move ',
            addClassH1R: 'start right move ',
            addClassUl: 'move',
          })

    }, 300);



  }
  render() {
    const {addClassUl,addClassP, addClassH1L, addClassH1R} = this.state;
    return (
      <>
        <div className="frontPage">
          <div className="info">
            <h1 className={addClassH1L}>
              <span role="img" aria-label="men">
                👦🏻
              </span>{" "}
              O mnie
            </h1>
            <p className={addClassP}>
              Nazywam się Karol, mam 20 lat. Programowania zacząłem się uczyć na
              początku kwietnia 2020 roku, stało się to moją pasją. Od
              października rozpoczynam studia na kierunku informatycznym. Staram
              się codziennie uczyć czegoś nowego i rozwiązywać napotkane mnie
              problemy. Jestem osobą kreatywną i lubiącą pracować w zespole. Z
              chęcią uczę się od innych w celu nabycia nowej wiedzy i nie
              popełniania tych samych błędów.
            </p>
          </div>
          <div className="info">
            <h1 className={addClassH1R}>
              <span role="img" aria-label="climbing">
                🧗🏻
              </span>{" "}
              Moje plany
            </h1>
            <p className={addClassP}>
              Moim planem na najbliższe late jest dalszy rozwój. Chce się uczyć
              coraz to nowszych technologii, nie opierać się na jednej.
              Zdecydować czy do danego projektu jest lepiej użyć React'a czy
              Angular'a. Mimo, że głównie skupiam się na Front-Endzie, mam
              zamiar zacząć przygodę z backendem.
              <br />
              <span role="img" aria-label="run">
                🏃🏻
              </span>{" "}
              <strong>Chce biec ciągle do przodu</strong>
            </p>
          </div>
          <div className="info">
            <h1 className={addClassH1L}>
              <span role="img" aria-label="programing">
                👨🏻‍💻
              </span>{" "}
              Ukończone kursy
            </h1>
            <p className={addClassP}>
              Poza szeroko dostępnymi dokumentacjami postanowiłem zrobić kilka
              kursów w celu nabrania pewnych nawyków programistycznych.
              Ukończone przeze mnie kursy były oglądane na platformie Udemy.
              Prowadzącym był Bartłomiej Borowczyk. Ukończone kursy :<br />
            </p>
            <ul className={addClassUl}>
              <li>
                <span role="img" aria-label="lightning">
                  ⚡️ React od podstaw
                </span>
              </li>
              <li>
                <span role="img" aria-label="lightning">
                  ⚡️ Programowanie w JavaScript
                </span>
              </li>
              <li>
                <span role="img" aria-label="lightning">
                  ⚡️ Front-end zaawansowany w 15 dni
                </span>
              </li>
              <li>
                <span role="img" aria-label="lightning">
                  ⚡️ Wprowadzenie do Git i GitHub{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="info last">
            <h1 className={addClassH1R}>
              <span role="img" aria-label="programer">
                🧑🏻‍💻
              </span>{" "}
              Praca
            </h1>
            <p className={addClassP}>
              Tylko ciężką pracą można coś w życiu osiągnąć. Moim marzeniem jest znaleźć pracę, która da mi możliwość rozwoju zawodowego.  Jestem pewny, że moją wytrwałością jestem w stanie dużo osiągnąć, żeby stać się lepszy. Mam nadzieje, że ten czas który wykorzystuje na
              kształcenie zaowocuje
              <span role="img" aria-label="Strawberry">
                🍓
              </span>
              <span role="img" aria-label="Grapes">
                🍇
              </span>
              <span role="img" aria-label="Cherries">
                🍒
              </span>
              i moje hobby stanie się moją pracą.
            </p>
          </div>
          <button className="movePage" onClick={handleButtonClick}>
            <i className="fas fa-arrow-down"></i>
          </button>
          <div className="line"></div>
        </div>
        <StartPageTwo />
      </>
    );
  }
}



    export default Start;
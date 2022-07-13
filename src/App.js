import './App.css';
import CardList from './components/CardList';
import AppHeader from './components/AppHeader';
import React, { Component, useState, useEffect } from 'react';
import CardsForm from "./components/CardsForm.js";

//Class based component
class App2 extends Component {
  state = {
    cards: []
  }

  //lifecycle methods
  componentDidMount() {

    const URL_API = 'https://restcountries.com/v3.1/all'
    fetch(URL_API)
      .then(data => data.json())
      .then(countries => {
        function getNameAndCapital(country) {
          return { frontSide: country.name.official, backSide: country.capital ? country.capital[0] : "" }
        }
        const cards = countries.map(getNameAndCapital)
        this.setState({ cards });
        //console.log(countries.map(getNameAndCapital));
      });

    console.log('componentDidMount');
  }

  componentDidUpdate(previousProps, previousState) {
    //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App" >
        <AppHeader title="Flash cards" />
        <CardList cardData={this.state.cards} />
      </div>
    );
  }
}

//Function based component
function App() {
  const URL_API = 'https://restcountries.com/v3.1/all'
  const [cards, setCards] = useState([]);
  //Function callback is called 
  // * componentDidMount(),
  // * componentDidUpdate(),
  // * componentWillUnamount() 
  useEffect(() => {
    if (cards.length === 0) {
      fetch(URL_API)
        .then(data => data.json())
        .then(countries => {
          function getNameAndCapital(country) {
            return { frontSide: country.name.official, backSide: country.capital ? country.capital[0] : "" }
          }
          const cards = countries.map(getNameAndCapital);
          setCards(cards);
          console.log(cards)
        });
    }
  },);
  console.log(cards);
  return (
    <div className="App" >
      <AppHeader title="Flash cards" />
      <CardsForm />
      <CardList cardData={cards} />
    </div>
  );
}


export default App;

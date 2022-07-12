import './App.css';
import CardList from './components/CardList';
import AppHeader from './components/AppHeader';

let cardData = [
  {
    frontSide: "9 * 6",
    backSide: 9 * 6,
  },
  {
    frontSide: "2**16",
    backSide: 2 ** 16,
  },
  {
    frontSide: "5 * 6",
    backSide: '30'
  }, { frontSide: "45 % 12", backSide: (45 % 12).toString() }
];

function App() {

  return (
    <div className="App">
      <AppHeader title="Flash cards" />
      <CardList cardData={cardData} />
      <CardList cardData={[{ frontSide: "45 % 6", backSide: (45 % 6).toString() }]} />
      <CardList cardData={[{ frontSide: "45 % 5", backSide: (45 % 5).toString() }, { frontSide: "The only river flowing to the south in Poland ?", backSide: "Orawa" }]} />
    </div>
  );
}

export default App;

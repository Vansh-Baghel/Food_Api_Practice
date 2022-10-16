import { Fragment, useState } from "react";
import "./App.css";
import Foods from "./Foods";

function App() {
  const [food, setFood] = useState('');

    function fetchDesertHandler() {
      setFood(`https://foodish-api.herokuapp.com/images/dessert/dessert${Math.floor(Math.random() * 36)}.jpg`);
    }
    function fetchPizzaHandler() {
      setFood(`https://foodish-api.herokuapp.com/images/pizza/pizza${Math.floor(Math.random() * 36)}.jpg`);
    }
    function fetchPastaHandler() {
      setFood(`https://foodish-api.herokuapp.com/images/pasta/pasta${Math.floor(Math.random() * 36)}.jpg`);
    }
    
  return (
    <Fragment>
      <Foods foodImg={food} />
      <button onClick={fetchDesertHandler}>Desert</button>
      <button onClick={fetchPizzaHandler}>Pizza</button>
      <button onClick={fetchPastaHandler}>Pasta</button>
    </Fragment>
  );
}

export default App;

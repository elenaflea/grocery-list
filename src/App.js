import logo from './logofood.png';
import organic from './organicbio2.png';
import { GroceryList } from './GroceryList';

import './App.css';

function App() {
  return (
    <div className="App">

        <img src={ logo } className="App-logo" alt="logo" />
        <h1 >Grocery List</h1>

      <GroceryList />

        <img src={ organic } className="Grocery" alt="logo" />
      
    </div>
  );
}

export default App;

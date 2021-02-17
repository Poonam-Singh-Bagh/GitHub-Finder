import logo from './logo.svg';
import './App.css';
import './Component/Style.css';
import { Switch, Route } from 'react-router-dom'
import SearchBar from './Component/SearchBar';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/profile' component={Profile}/>
        <Route exact path='/' component={SearchBar}/>

      </Switch>
    </div>
  );
}

export default App;

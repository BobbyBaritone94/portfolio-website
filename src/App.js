import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import {Switch, Route} from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Work from './Components/Work'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/work'>
          <Work/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>

      
      
    </div>
  );
}

export default App;

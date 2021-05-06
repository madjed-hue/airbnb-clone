
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    //BEM
    <div className="app">
    <Router>
      <Header/>

      <Switch>

        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
    </div>
  );
}

export default App;

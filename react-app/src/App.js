import React, { useContext } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Store, { StateContext } from './component/Store';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';


function App() {
  const [state,dispatch]= useContext(StateContext);
  const AppStyle={
    backgroundColor:state.theme.background,
    color:state.theme.text
  }
  return (
    <div className="App" style={AppStyle}>
        <Router>
          <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/detail/:countryName">
                <DetailPage/>
            </Route>
          </Switch>
        </Router>       
    </div>
  );
}

export default App;

//  Theme Color

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
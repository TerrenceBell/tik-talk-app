import React from 'react';
import ReactDOM from 'react-dom';
//import some reducer here
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import GlobalStyle from './GlobalStyle'
import Home from './containers/Home'
import Messageboard from './containers/Messageboard'
import About from './containers/About'
//import Messageboard from './Messageboard';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <NavBar />
    <Switch>
    <Route exact path="/" component={ Home } />
<Route exact path="/chat" component={Messageboard} />
<Route exact path="/about" component={About} />
      <App />
      </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

{/* <Route exact path="/" component={ Home } />
<Route exact path="/chat" component={Messageboard} />
<Route exact path="/about" component={About} /> */}

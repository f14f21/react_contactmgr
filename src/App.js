import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';

import Provider from './context';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';

class App extends Component {
  render() {

    return (
        <Provider>
            <div className="App">
                <Header Title="Contact Manager"/>
                <div className="container">
                    <Contacts/>
                </div>
            </div>
        </Provider>
    );
  }
}

export default App;

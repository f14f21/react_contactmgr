import React, { Component } from 'react';
import Contact from './components/Contact'
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';

class App extends Component {
  render() {

    return (
      <div className="App">
            <Header Title="Contact Manager"/>
            <Contact Name="Hamed Abasi" Email="ha.abasi@gmail.com" Tel="+989112738596"/>
            <Contact Name="Hamed Abasi" Email="ha.abasi@gmail.com" Tel="+989112738596"/>
      </div>
    );
  }
}

export default App;

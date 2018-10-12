import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact'

import Provider from './context';
import About from './components/pages/about';
import NotFound from './components/pages/notfound';
import Test from './components/test/test';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import EditContact from "./components/contacts/EditContact";

class App extends Component {
    render() {

        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header Title="Contact Manager"/>
                        <div className="container">
                            <br/>
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route exact path="/contacts/add" component={AddContact} />
                                <Route exact path="/contacts/edit/:id" component={EditContact} />
                                <Route exact path="/about/:id" component={About} />
                                <Route exact path="/test" component={Test} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

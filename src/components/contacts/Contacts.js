import React, {Component} from 'react';
import Contact from "./Contact";

import {Consumer} from "../../context";

class Contacts extends Component {


    //
    // onDeleteHandler = (id) => {
    //     this.setState(
    //         {
    //             contacts : this.state.contacts.filter(it => it.id !==id)
    //         }
    //     );
    // };

    render() {

        return (
            <Consumer>
                {
                    value => {
                        const {contacts} = value;
                        return (
                            <React.Fragment>
                                <div className="display-3">
                                    <span className="text-danger">Contact</span> List
                                </div>
                                {
                                    contacts.map((contact) =>{
                                        return <Contact key={contact.id} ContactObject={contact}/>
                                    })
                                }
                            </React.Fragment>
                        );


                    }
                }
            </Consumer>

        );





    }
}

export default Contacts;
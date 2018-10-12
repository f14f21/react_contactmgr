import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Consumer} from "../../context";

class Contact extends Component {

    state = {
      showContactInfo : false,
        Noor:"Ys"
    };
    onDelete = (id,dispatch) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {

                dispatch({
                    type:'DELETE_CONTACT',
                    payload:id
                });


            });

    };

    onShowClick = (id,name,e) => {
        this.setState({
            showContactInfo : !this.state.showContactInfo
        });
    };

    render() {

        const {ContactObject} = this.props;
        const {showContactInfo} = this.state;
        return (


            <Consumer>
                {
                    value => {
                        return (

                            <div className="m-3">

                                <div className="card mb-3">
                                    <div className="card-header">{ContactObject.name} &nbsp;&nbsp;
                                        <i onClick={this.onShowClick.bind(this,ContactObject.id,ContactObject.name)} className="fa fa-sort-down" style={{cursor:'pointer'}}/>
                                        <i onClick={this.onDelete.bind(this,ContactObject.id,value.dispatch)} className="fa fa-trash" style={{cursor:'pointer',float:'right'}}/>

                                        <Link to={`/contacts/edit/${ContactObject.id}`} ><i className="fa fa-pen mr-3" style={{cursor:'pointer',float:'right'}}></i> </Link>
                                    </div>

                                    <div className="card-body">
                                        {showContactInfo ? (
                                            <ul className="list-group">
                                                <li className="list-group-item-info m-1 mr-auto p-sm-1">{ContactObject.name}</li>
                                                <li className="list-group-item-info m-1 mr-auto p-sm-1">Tel: {ContactObject.phone}</li>
                                                <li className="list-group-item-info m-1 mr-auto p-sm-1">Age: {ContactObject.id}</li>
                                            </ul>
                                        ) : null}

                                    </div>

                                </div>

                            </div>


                        )
                    }
                }
            </Consumer>



        );
    }


}
Contact.defaultProps = {
    Age:30
};

Contact.propTypes =  {
    ContactObject: PropTypes.object.isRequired,
    // onDelete: PropTypes.func.isRequired
};
export default Contact;
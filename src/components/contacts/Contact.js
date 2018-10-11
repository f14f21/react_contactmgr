import React, {Component} from 'react';
import PropTypes from 'prop-types'

import {Consumer} from "../../context";

class Contact extends Component {

    state = {
      showContactInfo : false,
        Noor:"Ys"
    };
    onDelete = (id,dispatch) => {
        dispatch({
            type:'DELETE_CONTACT',
            payload:id
        })
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
                                    <div className="card-header">{ContactObject.Name} &nbsp;&nbsp;
                                        <i onClick={this.onShowClick.bind(this,ContactObject.id,ContactObject.Name)} className="fa fa-sort-down" style={{cursor:'pointer'}}/>
                                        <i onClick={this.onDelete.bind(this,ContactObject.id,value.dispatch)} className="fa fa-trash" style={{cursor:'pointer',float:'right'}}/>
                                    </div>

                                    <div className="card-body">
                                        {showContactInfo ? (
                                            <ul className="list-group">
                                                <li className="list-group-item-info m-1 mr-auto p-sm-1">{ContactObject.Name}</li>
                                                <li className="list-group-item-info m-1 mr-auto p-sm-1">Tel: {ContactObject.Tel}</li>
                                                <li className="list-group-item-info m-1 mr-auto p-sm-1">Age: {ContactObject.Age}</li>
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
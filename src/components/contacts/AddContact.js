import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TextInputGroup"

class AddContact extends Component {
    state = {
        name:'',
        email:'',
        tel:'',
        errors:{}
    };

    onSubmit = (dispatch,e) => {
        e.preventDefault();

        if(this.state.name === ''){
            this.setState(
                {
                    errors: {
                        name: 'Name is required'
                    }
                }
            )
        }

        if(this.state.email === ''){
            this.setState(
                {
                    errors: {
                        email: 'Email is required'
                    }
                }
            )
        }

        if(this.state.tel === ''){
            this.setState(
                {
                    errors: {
                        tel: 'Tel is required'
                    }
                }
            )
        }

        const Object = {
            id:Math.random()*10000,
            Name: this.state.name,
            Email: this.state.email,
            Tel: this.state.tel,
            Age: 10
        };
        //console.log(Ob

        dispatch({
            type:'ADD_CONTACT',
            payload:Object
        })


        //Empty form :
        this.setState(
            {
                name:'',
                email:'',
                tel:'',
                errors : {}
            }
        )

    };

    onChange = (e) => {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
    };

    render() {
        const {name,email,tel,errors} = this.state;
        return (
            <Consumer>
                {
                    value => {
                        const  {dispatch} = value;
                        return(
                            <div className="card mb-3">
                                <div className="card-header">Adding An Contact ..</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                        <TextInputGroup error={errors.name} name="name" value={name} type="text" label="Name" onChange={this.onChange} placeholder="Enter Name:" />
                                        <TextInputGroup error={errors.email} name="email" value={email} type="email" label="Email" onChange={this.onChange} placeholder="Enter Email:" />
                                        <TextInputGroup error={errors.tel} name="tel" value={tel} type="text" label="Tel" onChange={this.onChange} placeholder="Enter Tel:" />
                                        <input type="submit" value="Save" className="btn btn-light btn-block"/>
                                    </form>
                                </div>

                            </div>


                        )
                    }
                }
            </Consumer>

        );
    }


}

export default AddContact;
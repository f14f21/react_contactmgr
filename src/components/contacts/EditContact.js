import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TextInputGroup"
import axios from 'axios';

class EditContact extends Component {
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
            );
            return;
        }

        if(this.state.email === ''){
            this.setState(
                {
                    errors: {
                        email: 'Email is required'
                    }
                }
            );
            return;
        }

        if(this.state.tel === ''){
            this.setState(
                {
                    errors: {
                        tel: 'Tel is required'
                    }
                }
            );
            return;
        }

        const Object = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.tel
        };

        axios
            .put("https://jsonplaceholder.typicode.com/users/1",Object)
            .then(p=>{
                    dispatch({
                        type:'UPDATE_CONTACT',
                        payload: Object
                    });

                this.props.history.push("/");
            });


        // axios.post("https://jsonplaceholder.typicode.com/users/1",Object)
        //     .then(ans=>{
        //         dispatch({
        //             type:'ADD_CONTACT',
        //             payload:ans.data
        //         });
        //
        //
        //         //Empty form :
        //         this.setState(
        //             {
        //                 name:'',
        //                 email:'',
        //                 tel:'',
        //                 errors : {}
        //             }
        //         );
        //
        //         this.props.history.push("/");
        //
        //     });



    };

    onChange = (e) => {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
    };
    componentDidMount(){
         const {id} = this.props.match.params;
         const obj= this.getContactById(id);
         obj.then(p=>{
             const {name,email,phone} = p.data;
             this.setState({
                        name: name,
                        email: email,
                        tel: phone,
                 }
             );
         });
    }

    async getContactById(id){
        const res =axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return res;
    }

    render() {
        const {name,email,tel, errors} = this.state;
        console.log("Name : " + name);
        return (
            <Consumer>
                {
                    value => {
                        const  {dispatch} = value;

                        return(
                            <div className="card mb-3">
                                <div className="card-header">Editing An Contact ..</div>
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

export default EditContact;
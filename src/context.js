import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state,action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(p=>p.id !== action.payload)
            };
            break;
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload,...state.contacts]
            };
            break;
        default:
            return state;
    }
};

class Provider extends Component {

    state = {
        contacts: [
            {
                id:1,
                Name:'Hamed Abasi',
                Email:'ha.abasi@gmail.com',
                Tel:'0911',
                Age:33
            },
            {
                id:2,
                Name:'Ali Yar',
                Email:'ali@gmail.com',
                Tel:'0911',
                Age:30
            },
            {
                id:3,
                Name:'Mohsen Naghavi',
                Email:'naghavi@gmail.com',
                Tel:'0911',
                Age:40
            },
        ],
        dispatch: action => {
            this.setState(
                state => reducer(this.state,action)
            );
        }
    };


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
export default Provider;

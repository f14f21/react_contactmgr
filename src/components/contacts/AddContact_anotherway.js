import React, {Component} from 'react';

class AddContact_anotherway extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.telInput = React.createRef();
    }


    onSubmit = (e) => {
        e.preventDefault();
        const Object = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            tel: this.telInput.current.value,
        };
        console.log(Object);//{name: "Hamed", email: "ha.abasi@gmail.com", tel: "0911"}

    };

    //set default :
    static defaultProps = {
      name:'Hamed',
      email:'ha.abasi@gmail.com',
      tel:'0911'
    };


    render() {
        const {name,email,tel} = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Adding An Contact ..</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input name="name" type="text" className="form-control" placeholder="Enter Name:"
                                   defaultValue={name} ref={this.nameInput}/>
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input name="email" type="email" className="form-control" placeholder="Enter Email:"
                                   defaultValue={email} ref={this.emailInput}/>
                        </div>

                        <div className="form-group">
                            <label>Tel:</label>
                            <input name="tel" type="text" className="form-control" placeholder="Enter Tel:"
                                   defaultValue={tel} ref={this.telInput}/>
                        </div>

                        <input type="submit" value="Save" className="btn btn-light btn-block"/>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddContact_anotherway;
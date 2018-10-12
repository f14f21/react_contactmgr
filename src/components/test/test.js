import React, {Component} from 'react';

class Test extends Component {
    state = {
      title: '',
      completed: false,
    };
    componentDidMount(){
        console.log('componentDidMount');

        //load json ..
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    title: data.title,
                    completed: data.completed,
                })
            });
    }
    //
    // componentWillMount(){
    //     console.log('componentWillMount');
    //
    //
    // }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate');
    //
    // }
    render() {
        console.log('render');

        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default Test;
import React from 'react';

class ClassComponent extends React.Component {
    state = {
        count : 0,
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    increase(){
        this.setState({count: this.state.count + 1});
    }
    decrease(){
        this.setState({count: this.state.count - 1});
    }
    
    render(){
        return(
            <div>
                <p>Counter:{this.state.count} with ClassComponent  </p>
                <button onClick={()=> this.decrease()}>Decrease</button>
                <button onClick={()=> this.increase()}>Increase</button>
            </div>
        )
    }
}
export default ClassComponent
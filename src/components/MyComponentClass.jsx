import React, { Component } from 'react'

class MyComponentClass extends Component {
    state = {
        count: 0,
        date: new Date(),
    }

    addClickHandler = () => {
        this.setState(({count}) => ({
            count: count + 1
        }));
      
    };

    componentDidMount(){
        const {count} = this.state;
        document.title = `Clicked ${count} Times`;
        setInterval(() => {
            this.tick()
        }, 1000 )
    }

    componentDidUpdate(){
        const {count} = this.state;
        document.title = `Clicked ${count} Times`;
    }

    tick = () => {
        this.setState({
            date: new Date(),
        })
    };

  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
            <button type='button' onClick={this.addClickHandler}>Click</button>
        </p>
      </div>
    )
  }
}
export default MyComponentClass
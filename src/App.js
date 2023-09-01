import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Abraham Lincoln',
        bio: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        imgSrc: 'https://ideapod.com/wp-content/uploads/2023/05/personality-traits-that-show-youre-a-smart-man-1152x605.jpg',
        profession: 'Software Engineer',
      },
      show: false,
      timeInterval: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeInterval: this.state.timeInterval + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {this.state.show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p style={{color: 'pink', }}>Time Interval since Mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;

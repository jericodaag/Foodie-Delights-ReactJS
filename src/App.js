import React, { Component } from 'react';
import Login from './login';
import Main from './main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
    };
  }

  handleLogin = (loggedInUsername) => {
    this.setState({
      isLoggedIn: true,
      username: loggedInUsername,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: '',
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <Main username={username} onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
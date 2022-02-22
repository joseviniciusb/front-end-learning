import React, { Component } from 'react';

export default class App extends Component {
  state = {
    carregando: false,
  };

  loading = () => {
    this.setState({ carregando: true });
    setTimeout(() => {
      console.log('Hello, World!');
    }, 3000);
    this.setState({ carregando: false });
  };

  render() {
    const loading = this.state;
    return (
      <div className="App">{!loading && <h1>Testando por texto!!</h1>}</div>
    );
  }
}

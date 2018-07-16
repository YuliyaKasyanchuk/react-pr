import React, { Component } from 'react';

import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';


class App extends Component {
constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  openPopup = () => {
    this.setState({
      isOpen: true
    });
  }

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  }


  render() {
    return [

      	<Logo />,
        <Form />
       

    ];
  }
}

export default App;

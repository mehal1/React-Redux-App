import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import Posts from './Components/posts'
import Postforms from './Components/postForm'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         
        </header>
        
        <Postforms> </Postforms>
        
        <Posts> </Posts>
      </div>
      </Provider>
    );
  }
}

export default App;

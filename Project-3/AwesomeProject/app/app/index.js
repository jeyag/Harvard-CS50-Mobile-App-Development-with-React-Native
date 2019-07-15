import React from 'react';
import { BottomTab } from "./config/navigation"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  render(){
    return(

  <Provider store={store}>
    <BottomTab />
  </Provider>
)}
}

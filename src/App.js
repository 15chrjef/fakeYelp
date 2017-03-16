import React, { Component } from 'react';
import BusinessContainer from './components/BusinessContainer'
import businessList from '../businessData.json'
import Modal from './components/Modal'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      businesses: [],
      show: { display: 'none'}
    }
  }
  displayModal(){
    var newObj = this.state.show.display !== undefined ? {} : { display: 'none'};
    console.log(this.state.show)
    this.setState({ show: newObj })
  }
  componentDidMount(){
    this.setState({ businesses: businessList.businesses})
  }
  deleteBusiness(key){
    var newBusinesses = this.state.businesses.slice().filter((val, i) => i !== key)
    this.setState({ businesses: newBusinesses})
  }
  render() {
    console.log('businesses', this.state.businesses)
    return (
      <div className="App">
        <div className="App-header">
          Yelp
          <img alt='diner pic' style={{width: '100px', height: '100px'}} src='http://static.wixstatic.com/media/324cb8_a99ecf6eb33346f598790d046671e7e8.png'/>
        </div>
        <div className="container">
          <h3 style={{color: 'red'}}>Hot & New Businesses</h3>
          <BusinessContainer deleteBusiness={this.deleteBusiness.bind(this)} businesses={this.state.businesses} />
          <p onClick={this.displayModal.bind(this)} style={{color: '#0073BB', cursor: 'pointer'}}>Create a new Hot Business</p>
        </div>
        <Modal displayModal={this.displayModal.bind(this)} show={this.state.show}/>
      </div>
    );
  }
}

export default App;

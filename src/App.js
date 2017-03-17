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
      show: { display: 'none'},
      modalType: 'create',
      editingBusiness: null 
    }
  }
  displayModal(type, business){
    console.log('displayModal', business)
    this.setState({ 
      modalType: type,
      editingBusiness: business
    })
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
  createOrUpdateBusiness(obj){
    const { name, description, stars, subcategories, price, bKey } = obj;
    var newBusiness = {
      name,
			description,
      reviews : [{rating: stars}],
			subcategories,
			price
    }
    if(obj.bKey === undefined){
      this.setState({
        businesses: this.state.businesses.concat([newBusiness])
      })
    }else {
      this.setState({
        businesses: this.state.businesses.map( (bus, i) => i === bKey ? newBusiness : bus)
      })
    }
  }
  render() {
    const { show, modalType, editingBusiness, businesses } = this.state
    return (
      <div className="App">
        <div className="App-header">
          Yelp
          <img alt='diner pic' style={{width: '100px', height: '100px'}} src='http://static.wixstatic.com/media/324cb8_a99ecf6eb33346f598790d046671e7e8.png'/>
        </div>
        <div className="container">
          <h3 style={{color: 'red'}}>Hot & New Businesses</h3>
          <BusinessContainer 
            displayModal={this.displayModal.bind(this)} 
            deleteBusiness={this.deleteBusiness.bind(this)} 
            businesses={businesses} 
          />
          <p onClick={this.displayModal.bind(this, 'create')} style={{color: '#0073BB', cursor: 'pointer'}}>Create a new Hot Business</p>
        </div>
        <Modal 
          createOrUpdateBusiness={this.createOrUpdateBusiness.bind(this)} 
          displayModal={this.displayModal.bind(this)} 
          show={show}
          type={modalType}
          editingBusiness={editingBusiness}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import ModalRow from './ModalRow'
export default class Modal extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			description: '',
			stars : '',
			categories: '',
			price: '',
		}
	}
	onChange(e) {
		console.log(e.target.id)
		switch(e.target.id){
			case 'name':
				this.setState({ name: e.target.value})
				break
			case 'description':
				this.setState({ description: e.target.value})
				break
			case 'stars':
				this.setState({ stars: e.target.value})
				break
			case 'categories':
				this.setState({ categories: e.target.value})
				break
			case 'price':
				this.setState({ price: e.target.value})
			default:
		}
	}
	render(){
		console.log('show', this.props.show)
		const { name, description, stars, categories, price } = this.state
		return(
			<div className='modal' style={this.props.show}>
				<h3 style={{color: 'red'}}>Create a Business</h3>
				<div className='container'>
					<ModalRow id='name' value={name} onChange={this.onChange.bind(this)} label='Name'/>
					<ModalRow id='description' value={description} onChange={this.onChange.bind(this)} label='Description'/>
					<ModalRow id='stars' value={stars} onChange={this.onChange.bind(this)} label='Stars'/>
					<ModalRow id='categories' value={categories} onChange={this.onChange.bind(this)} label='Categories'/>
					<ModalRow id='price' value={price} onChange={this.onChange.bind(this)} label='Price'/>
				</div>
				<input style={{marginTop: '10px'}} type='submit'/>
				<i 
					onClick={this.props.displayModal} 
					style={{color: 'red', alignSelf: 'right', cursor: 'pointer', marginTop: '12px'}} 
					className="fa fa-minus-circle fa-2x">
				</i>
			</div>
		)
	}
}

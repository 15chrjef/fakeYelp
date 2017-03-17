import React from 'react';
import ModalRow from './ModalRow'
export default class Modal extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			description: '',
			stars : '',
			subcategories: '',
			price: '',
			bKey: ''
		}
	}
	onChange(e) {
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
				this.setState({ subcategories: e.target.value})
				break
			case 'price':
				this.setState({ price: e.target.value})
			default:
		}
	}
	componentWillReceiveProps(newProps){
		console.log('mounting mounting', newProps)
		const { bKey } = this.state;
		if(newProps.editingBusiness !== '' && newProps.editingBusiness !== null){
			const { name, description, reviews, subcategories, price, bKey } = newProps.editingBusiness
			console.log('businesssss', this.state)
			this.setState({
				name,
				description,
				stars: reviews[0].rating,
				subcategories,
				price,
				bKey
			})
		}
	}
	handleSubmit(){
		this.props.createOrUpdateBusiness(this.state)
		this.props.displayModal()
		this.setState({
			name: '',
			description: '',
			stars : '',
			subcategories: '',
			price: '',
		})
	}
	render(){
		const { name, description, stars, categories, price } = this.state
		const title = this.props.type === 'create' ? 'Create a Business': 'Update the Description';
			return(
				<div className='modal' style={this.props.show}>
					<h3 style={{color: 'red'}}>{title}</h3>
					<div className='container'>
						<ModalRow id='name' value={name} onChange={this.onChange.bind(this)} label='Name'/>
						<ModalRow id='description' value={description} onChange={this.onChange.bind(this)} label='Description'/>
						<ModalRow id='stars' value={stars} onChange={this.onChange.bind(this)} label='Stars'/>
						<ModalRow id='categories' value={categories} onChange={this.onChange.bind(this)} label='Categories'/>
						<ModalRow id='price' value={price} onChange={this.onChange.bind(this)} label='Price'/>
					</div>
					<div className='container'>				
						<input onClick={this.handleSubmit.bind(this)} style={{marginTop: '10px'}} type='submit'/>
						<i 
							onClick={this.props.displayModal} 
							style={{color: 'red', alignSelf: 'right', cursor: 'pointer', marginTop: '12px'}} 
							className="fa fa-minus-circle fa-2x">
						</i>
					</div>
				</div>
			)
	}
}

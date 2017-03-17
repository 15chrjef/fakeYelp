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
	//situation task action(i) result(data)
		//bullpoints only a couple minutes
	//problem solving, clarify, clarify,clarify
	//system design
	//coding front end web applications
	//code on a white board, write down details, discuss it, clarify, clarify, clarify
	//discuss ways to approach the problem
	//write very clean code, no syntax
	//last fiew minutes... if i had more time here is how i would optimize and do this
	componentWillMount(){
		console.log('mounting mounting')
		if(this.props.editingBusiness !== null){
			const { name, description, reviews, subcategories, price, bKey } = this.props.editingBusiness
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
	onSubmit(){
		this.props.createBusiness(this.state)
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
		console.log('modal props', this.props, 'state props', this.state)
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
						<input onClick={this.onSubmit.bind(this)} style={{marginTop: '10px'}} type='submit'/>
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

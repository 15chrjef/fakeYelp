import React from 'react';

const Business = (props) => {
	const { name, description, reviews, subcategories } = props.data;
	let price = ''
	for(var j = 0; j < props.data['price-range']; j++){
		price += '$'
	}
	var rating = Math.round(reviews.reduce((init, cur) => init + cur.rating, 0) / reviews.length)
	var stars = []
	for(var i = 1; i <= 5; i++){
		if(rating >= i){
			stars.push(<i key={i} className="fa fa-star fa-lg" aria-hidden="true"></i>)
		}else {
			stars.push(<i key={i} className="fa fa-star-o fa-lg" aria-hidden="true"></i>)
		}
	}	
	var categories = subcategories.split(',').map(word => {
		var newWord =	word.split('');
		newWord[0] = newWord[0].toUpperCase()
		return newWord.join('')
	}).join(', ')
	return (
		<div className='business'>
			<img 
				style={{width: '100%', borderRadius: '5px'}}
				src={'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAM6AAAAJDY5NTdlOGFlLTM2MzctNDUzZi1hNDg0LWRlNzFlYTUwMTIxZg.jpg'} 
				alt="logo" 
			/>
			<div className='container businessInfo'>
				<div style={{display: 'flex', width: '95%', justifyContent: 'space-between'}}>
					<h4 style={{ color: '#0073BB', fontWeight: 'bold'}}>{name}</h4>
					<i 
						onClick={ () => props.deleteBusiness()} 
						style={{color: 'red', alignSelf: 'right', cursor: 'pointer', marginTop: '12px'}} 
						className="fa fa-minus-circle fa-2x">
					</i>
				</div>
				<div style={{display: 'flex'}}>
					<div style={{marginRight: '10px'}}>{stars}</div>
					<div style={{color: '#666666'}}>{reviews.length} reviews</div>
				</div>
				<p style={{margin: '7px 0px -12px 0px'}}>{price}  {categories}</p>
				<p 
					onClick={() => props.displayModal('update', props.data)}
					className='description' 
					style={{textAlign: 'left', cursor: 'pointer'}}>
					{description.substring(0, 100)}...
				</p>
			</div>
		</div>
	);
}

export default Business;
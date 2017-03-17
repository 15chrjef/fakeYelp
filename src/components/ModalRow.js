import React from 'react';

const ModalRow = (props) => {
	const { label, name, id, onChange } = props
	let tag;
	if(id === 'description'){
		tag = (
			<textarea 
				style={{width: '70%', height: '150px', maxWidth: '70%', maxHeight: '150px', marginLeft: '60px'}}
				type='text' 
				id={id} 
				value={name} 
				onChange={onChange}
			/>
		)
	}else {
		tag =(	
			<input 
				style={{width: '70%',  maxWidth: '70%'}}
				type='text' 
				id={id} 
				value={name} 
				onChange={onChange}
			/>
		)
	}
	return(
		<div style={{display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '10px'}}>
			<label style={{fontWeight: 'bold'}}>{label}</label>
			{tag}
		</div>
	)
}

export default ModalRow;
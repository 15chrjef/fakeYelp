import React from 'react';

const ModalRow = (props) => {
	const { label, name, id, onChange } = props
	let tag;
	if(id === 'description'){
		tag = (
			<textarea 
				style={{width: '70%'}}
				type='text' 
				id={id} 
				value={name} 
				onChange={onChange}
			/>
		)
	}else {
		tag =(	
			<input 
				style={{width: '70%'}}
				type='text' 
				id={id} 
				value={name} 
				onChange={onChange}
			/>
		)
	}
	return(
		<div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '10px'}}>
			<label>{label}</label>
			{tag}
		</div>
	)
}

export default ModalRow;